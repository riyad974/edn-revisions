let MATS = {};
let QCMS = [];
const ST = {qcm: 0, ok: 0, done: {}, mat: null};

// ── Système vidéo A/B crossfade ──────────────────────────────────

const BG_SRCS = [
  { webm:'files/fond.webm',  mp4:'fond.mp4'  },
  { webm:'files/fond1.webm', mp4:'fond1.mp4' },
  { webm:'files/fond2.webm', mp4:'fond2.mp4' },
];

let _bgIdx  = 0;
let _bgSlot = 0;

function _bgEl(slot){ return document.getElementById(slot === 0 ? 'bg-video-a' : 'bg-video-b'); }

function _loadVideo(el, idx){
  el.querySelectorAll('source').forEach(s => s.remove());
  const w = document.createElement('source'); w.src = BG_SRCS[idx].webm; w.type = 'video/webm';
  const m = document.createElement('source'); m.src = BG_SRCS[idx].mp4;  m.type = 'video/mp4';
  el.appendChild(w); el.appendChild(m);
  el.load();
}

function _crossfadeTo(idx){
  const nextSlot = 1 - _bgSlot;
  const cur  = _bgEl(_bgSlot);
  const next = _bgEl(nextSlot);

  _loadVideo(next, idx);
  next.loop    = true;
  next.style.opacity = '0';
  next.play().then(() => {
    next.style.opacity = '1';
    cur.style.opacity  = '0';
    setTimeout(() => {
      cur.pause();
      _bgIdx  = idx;
      _bgSlot = nextSlot;
    }, 1500);
  }).catch(() => {});
}

function initBgVideo(startIdx){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  _bgIdx = startIdx || 0;
  const a = _bgEl(0), b = _bgEl(1);
  _loadVideo(a, _bgIdx);
  a.loop = true;
  a.style.opacity = '1';
  b.style.opacity = '0';
  a.play().catch(() => {});
  document.addEventListener('visibilitychange', () => {
    const active = _bgEl(_bgSlot);
    if (document.hidden) active.pause();
    else active.play().catch(() => {});
  });
}

function setBg(idx){
  if (idx === _bgIdx) return;
  _crossfadeTo(idx);
  document.querySelectorAll('.bc-bg-tile').forEach((t,i) => t.classList.toggle('active', i === idx));
  localStorage.setItem('edn_bg', idx);
}

// ── Thème QCM + chargement settings ──────────────────────────────

function setQcmTheme(theme){
  document.body.classList.toggle('qcm-classic', theme === 'classic');
  document.getElementById('btt-glass').classList.toggle('active', theme === 'glass');
  document.getElementById('btt-classic').classList.toggle('active', theme === 'classic');
  localStorage.setItem('edn_qcm_theme', theme);
}

function loadSettings(){
  const bg = parseInt(localStorage.getItem('edn_bg') || '0');
  initBgVideo(bg);
  document.querySelectorAll('.bc-bg-tile').forEach((t,i) => t.classList.toggle('active', i === bg));
  const theme = localStorage.getItem('edn_qcm_theme') || 'glass';
  setQcmTheme(theme);
}

function createStars(){
  const types = ['', 'blue', 'soft'];
  for(let i = 0; i < 40; i++){
    const s   = document.createElement('div');
    const sz  = (Math.random() * 2 + 1).toFixed(1);        // 1–3 px
    const dur = (Math.random() * 4 + 2).toFixed(1) + 's';  // 2–6 s
    const del = (Math.random() * 6).toFixed(1) + 's';      // 0–6 s
    s.className = 'star ' + types[Math.floor(Math.random() * types.length)];
    s.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${(Math.random()*100).toFixed(1)}%;
      top:${(Math.random()*100).toFixed(1)}%;
      --tw-dur:${dur};--tw-delay:${del};
      opacity:${(Math.random()*0.4+0.1).toFixed(2)};
    `;
    document.body.appendChild(s);
  }
}

window.onload = () => {
  MATS = DATA_MEDECINE.MATS;
  QCMS = DATA_MEDECINE.QCMS;
  document.getElementById('st-tot-qcm').textContent = QCMS.length;
  const st2 = document.getElementById('st2-tot');
  if(st2) st2.textContent = QCMS.length;
  updateStats();
  updateProg();
  const elTot = document.getElementById('st2-items-tot');
  if(elTot && typeof EDN_ITEMS !== 'undefined') elTot.textContent = EDN_ITEMS.length;
  createStars();
  updateBeachStats();
  renderSpecsSection();
  loadSettings();
  initScrollAnim();
  history.replaceState({section:'scene'}, '', '#accueil');
  document.title = _TITLES.scene;
};

// ── History API ───────────────────────────────────────────────────

const _TITLES = {
  scene:   'MedRevision',
  items:   'MedRevision — Référentiel R2C',
};
const _MAT_NAMES = {
  cardio:   'Cardiologie',
  dermato:  'Dermatologie',
  infectio: 'Infectiologie',
  neuro:    'Neurologie',
  hge:      'Hépato-Gastro-Entérologie',
};

let _skipPush = false;

function _pushNav(state, hash, title){
  document.title = title;
  if(_skipPush) return;
  history.pushState(state, '', hash);
}

window.addEventListener('popstate', e => {
  const s = e.state;
  if(!s){ _restoreNav({section:'scene'}); return; }
  _restoreNav(s);
});

function _restoreNav(s){
  _skipPush = true;
  if(s.section === 'mat' && s.mat){
    openMat(s.mat);
  } else if(s.section === 'items'){
    openItems();
  } else if(s.section === 'cardio'){
    openCardio();
  } else if(s.section === 'qcm-v2' && s.questions){
    openCardioSession(s.questions, s.titre);
  } else {
    goHome();
  }
  _skipPush = false;
}

// ── Navigation ────────────────────────────────────────────────────

function goHome(){
  show('s-scene');
  ST.mat = null;
  renderSpecsSection();
  _resetScrollAnim();
  snapToSection(1);
  _pushNav({section:'scene'}, '#accueil', _TITLES.scene);
}

function snapToSection(n){
  const c = document.getElementById('s-scene');
  if(!c) return;
  c.scrollTo({top: n * window.innerHeight, behavior:'smooth'});
  _updateSnapNav(n);
}

function _snNavClick(idx){
  if(document.getElementById('s-scene').classList.contains('active')){
    snapToSection(idx);
  } else {
    _skipPush = true;
    show('s-scene');
    ST.mat = null;
    renderSpecsSection();
    _resetScrollAnim();
    _scrollRaw = 0; _scrollSmooth = 0;
    _skipPush = false;
    setTimeout(() => snapToSection(idx), 40);
    _pushNav({section:'scene'}, '#accueil', _TITLES.scene);
  }
}

function _updateSnapNav(idx){
  document.querySelectorAll('.snap-dot')
    .forEach((d,i) => d.classList.toggle('active', i === idx));
  document.querySelectorAll('#side-nav .sn-item[data-sn]')
    .forEach(item => item.classList.toggle('active', parseInt(item.dataset.sn) === idx));
}

function renderSpecsSection(){
  const el = document.getElementById('specs-glass-grid');
  if(!el) return;
  const specs = [
    {id:'cardio',   icon:'🫀', nom:'Cardiologie',          col:'var(--cardio)'},
    {id:'dermato',  icon:'🩺', nom:'Dermatologie',         col:'var(--dermato)'},
    {id:'infectio', icon:'🦠', nom:'Infectiologie',        col:'var(--infectio)'},
    {id:'neuro',    icon:'🧠', nom:'Neurologie',           col:'var(--neuro)'},
    {id:'hge',      icon:'🍕', nom:'HGE',                  col:'var(--hge)'},
  ];
  el.innerHTML = specs.map(s => {
    const tot  = QCMS.filter(q => q.tags.includes(s.id)).length;
    const done = QCMS.filter(q => q.tags.includes(s.id) && ST.done[q.id]).length;
    const pct  = tot ? Math.round(done / tot * 100) : 0;
    return `<div class="sgc-card ${s.id}" onclick="openMat('${s.id}')">
      <div class="sgc-top">
        <span class="sgc-icon">${s.icon}</span>
        <span class="sgc-prog-text">${done}/${tot}</span>
      </div>
      <div class="sgc-name">${s.nom}</div>
      <div class="sgc-bar-wrap">
        <div class="sgc-bar-fill" style="width:${pct}%;background:${s.col}"></div>
      </div>
    </div>`;
  }).join('');
}

// ── Scroll-driven animation ───────────────────────────────────────

// ── Cache éléments scroll ─────────────────────────────────────────
let _elCard, _elWelcome, _elStats, _elShapes;
let _scrollRaw = 0, _scrollSmooth = 0;

function _resetScrollAnim(){
  if(_elWelcome){
    _elWelcome.style.opacity='1';
    _elWelcome.style.transform='translateX(-50%) scale(1)';
    _elWelcome.style.filter='blur(0px)';
  }
  if(_elShapes) _elShapes.forEach(s=>s.style.opacity='1');
}

function _onScroll(scrollY){
  if(!document.getElementById('s-scene').classList.contains('active')) return;
  const sH = window.innerHeight;
  const p  = Math.min(scrollY / sH, 1);

  // Titre Bienvenue : scale + blur + fade (0→65% de la section hero)
  const tP = Math.min(p / 0.65, 1);
  const tE = 1 - Math.pow(1 - tP, 2);
  if(_elWelcome){
    _elWelcome.style.opacity   = Math.max(0, 1 - tE);
    _elWelcome.style.transform = `translateX(-50%) scale(${1 + 0.30 * tE})`;
    _elWelcome.style.filter    = `blur(${10 * tE}px)`;
  }
  if(_elShapes) _elShapes.forEach(s => s.style.opacity = Math.max(0, 1 - tE * 1.5));
}

function initScrollAnim(){
  _elCard    = null;
  _elWelcome = document.getElementById('beach-welcome');
  _elStats   = null;
  _elShapes  = document.querySelectorAll('.e-shape');
  const scene     = document.getElementById('s-scene');
  const container = document.getElementById('s-scene');
  const dots      = document.getElementById('snap-dots');

  function updateVisibility(){
    const on = scene.classList.contains('active');
    if(_elWelcome) _elWelcome.style.display = on ? 'block' : 'none';
    if(_elShapes)  _elShapes.forEach(s => s.style.display = on ? 'block' : 'none');
    if(dots) dots.classList.toggle('visible', on);
  }
  updateVisibility();
  new MutationObserver(updateVisibility)
    .observe(scene, {attributes:true, attributeFilter:['class']});

  // Lerp RAF — écoute le s-scene
  container.addEventListener('scroll', () => { _scrollRaw = container.scrollTop; }, {passive:true});
  (function loop(){
    _scrollSmooth += (_scrollRaw - _scrollSmooth) * 0.09;
    _onScroll(_scrollSmooth);
    requestAnimationFrame(loop);
  })();

  // IntersectionObserver — reveal des sections
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('revealed'); });
  }, {root: container, threshold: 0.18});
  document.querySelectorAll('.sec-inner').forEach(el => revealObs.observe(el));

  // IntersectionObserver — tracking section active (dots + nav)
  const sections = document.querySelectorAll('.snap-section');
  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting && e.intersectionRatio >= 0.5){
        _updateSnapNav([...sections].indexOf(e.target));
      }
    });
  }, {root: container, threshold: 0.5});
  sections.forEach(s => sectionObs.observe(s));
}


function show(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  _scrollRaw = 0; _scrollSmooth = 0;
  if(id === 's-scene'){
    const c = document.getElementById('s-scene');
    if(c) c.scrollTo({top:0, behavior:'instant'});
  }
}

function openMat(id){
  if(id === 'cardio'){ openCardio(); return; }
  ST.mat = id;
  document.getElementById('mat-titre').textContent = MATS[id].nom;
  show('s-mat');
  renderQCMs();
  const nom = _MAT_NAMES[id] || MATS[id].nom;
  _pushNav({section:'mat', mat:id}, '#qcm-' + id, 'MedRevision — QCM ' + nom);
}

// ── Utils ─────────────────────────────────────────────────────────

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── QCMs ──────────────────────────────────────────────────────────

function renderQCMs(){
  const el = document.getElementById('tc-qcm');
  const list = QCMS.filter(q => q.tags.includes(ST.mat));
  if(!list.length){ el.innerHTML = '<div class="empty">Aucun QCM disponible pour cette spécialité.</div>'; return; }

  const done = list.filter(q => ST.done[q.id]).length;
  el.innerHTML =
    `<div class="session-bar"><span>Progression</span><strong>${done} / ${list.length} QCMs</strong></div>` +
    list.map(q => {

      const d = ST.done[q.id];
      const badgeRythmo = q.tags.includes('rythmo')
        ? `<span class="badge-type" style="background:rgba(236,72,153,0.08);color:var(--rythmo);border:1px solid rgba(236,72,153,0.2)">Rythmologie</span>`
        : '';

      const lvl = getMasteryLevel(q.id);
      const lvlTitles = ['Marquer vu','Marquer revu','Marquer maîtrisé','Maîtrisé — cliquer pour reset'];
      const lvlIcons  = ['○','🐚','⭐','✦'];

      return `<div class="qcm-card" id="${q.id}">
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:2px">
          <span class="badge-type ${q.type.toLowerCase()}">${q.type}</span>
          ${badgeRythmo}
          ${d ? `<span class="chip ${d.ok ? 'ok' : 'ko'}">${d.ok ? '✓ Réussi' : '✗ Raté'}</span>` : ''}
          <button class="prog-badge ${masteryClass(lvl)}"
                  onclick="event.stopPropagation();cycleItemProgress('${q.id}',this)"
                  title="${lvlTitles[lvl]}">
            <span class="pb-icon">${lvlIcons[lvl]}</span>
            <span class="pb-count">${lvl > 0 ? getCount(q.id)+'×' : ''}</span>
          </button>
        </div>
        <div class="badge-source">📚 ${q.src}</div>
        <div class="q-text">${q.q}</div>
        <div class="opts" id="opts-${q.id}" data-corrected="${d ? '1' : '0'}">
          ${(d ? q.opts : shuffleArr(q.opts)).map((o, i) => {
            let cls = 'opt';
            if(d){ if(o.ok) cls += ' ok'; else if(d.sel === i) cls += ' ko'; }
            const L = String.fromCharCode(65 + i);
            const jEsc = (o.j || '').replace(/"/g, '&quot;');
            return `<div class="${cls}" data-ok="${o.ok}" data-j="${jEsc}" onclick="selOpt(this,'${q.id}')">
              <div class="opt-letter">${L}</div>
              <div class="opt-body">
                <div class="opt-text">${o.t}</div>
                ${d && o.j ? `<div class="expl ${o.ok ? 'good' : 'bad'} vis">
                  <div class="expl-lbl">${o.ok ? 'Correct' : 'Incorrect'}</div>
                  <p>${o.j}</p>
                </div>` : ''}
              </div>
            </div>`;
          }).join('')}
        </div>
        ${!d ? `<button class="btn-verify" id="bv-${q.id}" onclick="verify('${q.id}')" disabled>Vérifier ma réponse</button>
        <div class="feedback" id="fb-${q.id}"></div>` : ''}
      </div>`;
    }).join('');
}

// ── Progression manuelle ──────────────────────────────────────────

function cycleItemProgress(itemId, btn) {
  const current = getCount(itemId);
  const next    = current >= 3 ? 0 : current + 1;
  setCount(itemId, next);

  const lvl   = next >= 3 ? 3 : next;
  const icons  = ['○','🐚','⭐','✦'];
  const titles = ['Marquer vu','Marquer revu','Marquer maîtrisé','Maîtrisé — cliquer pour reset'];
  const cls    = masteryClass(lvl);

  btn.className      = 'prog-badge ' + cls;
  btn.title          = titles[lvl];
  btn.querySelector('.pb-icon').textContent  = icons[lvl];
  btn.querySelector('.pb-count').textContent = next > 0 ? next + '×' : '';

  // Micro-animation de confirmation
  btn.classList.add('prog-ping');
  setTimeout(() => btn.classList.remove('prog-ping'), 400);

  updateBeachStats();
}

// Met à jour les stats R2C sur la scène plage
function updateBeachStats() {
  if (typeof EDN_ITEMS === 'undefined') return;
  const total = EDN_ITEMS.length;
  const done  = EDN_ITEMS.filter(i => getCount('item_' + i.id) > 0).length;
  const pct   = total ? Math.round(done / total * 100) : 0;

  const elDone = document.getElementById('st2-items-done');
  const elPct  = document.getElementById('st2-pct');
  const elBar  = document.getElementById('st2-bar');

  if (elDone) elDone.textContent = done;
  if (elPct)  elPct.textContent  = pct + '%';
  if (elBar)  elBar.style.width  = pct + '%';
}

// Toggle vu / pas vu sur un item R2C
function toggleItemDone(itemId, el) {
  const current = getCount(itemId);
  const next    = current > 0 ? 0 : 1;
  setCount(itemId, next);

  const row = el.closest('.item-row-full');
  row.classList.toggle('item-row-done', next > 0);
  el.classList.toggle('item-check-done', next > 0);
  el.textContent = next > 0 ? '✦' : '○';
  el.title = next > 0 ? 'Marquer non vu' : 'Marquer vu';

  el.classList.add('prog-ping');
  setTimeout(() => el.classList.remove('prog-ping'), 380);

  updateBeachStats();
}

function selOpt(el, qid){
  const list = document.getElementById('opts-' + qid);
  if(list.getAttribute('data-corrected') === '1') return;
  list.querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  document.getElementById('bv-' + qid).disabled = false;
}

function verify(qid){
  const list = document.getElementById('opts-' + qid);
  if(list.getAttribute('data-corrected') === '1') return;
  list.setAttribute('data-corrected', '1');

  const q = QCMS.find(x => x.id === qid);
  const opts = list.querySelectorAll('.opt');
  let win = false, sel = -1;

  opts.forEach((opt, i) => {
    const isOk = opt.getAttribute('data-ok') === 'true';
    const isSel = opt.classList.contains('sel');
    const j = opt.dataset.j || '';

    if(isSel) sel = i;
    if(isOk){ opt.classList.add('ok'); if(isSel) win = true; }
    else if(isSel) opt.classList.add('ko');

    if(j){
      const ex = document.createElement('div');
      ex.className = `expl ${isOk ? 'good' : 'bad'} vis`;
      ex.innerHTML = `<div class="expl-lbl">${isOk ? 'Correct' : 'Incorrect'}</div><p>${j}</p>`;
      opt.querySelector('.opt-body').appendChild(ex);
    }
  });

  ST.done[qid] = {ok: win, sel};
  ST.qcm++;
  if(win) ST.ok++;
  updateStats();
  updateProg();

  const fb = document.getElementById('fb-' + qid);
  const bv = document.getElementById('bv-' + qid);
  if(fb){ fb.className = 'feedback ' + (win ? 'ok' : 'ko'); fb.textContent = win ? 'Excellente réponse ! 🎉' : 'Pas tout à fait — consultez les explications.'; }
  if(bv) bv.style.display = 'none';

  const sb = document.querySelector('#tc-qcm .session-bar strong');
  if(sb){
    const l = QCMS.filter(q => q.tags.includes(ST.mat));
    const d = l.filter(q => ST.done[q.id]).length;
    sb.textContent = `${d} / ${l.length} QCMs`;
  }
}

// ── Stats & Progression ───────────────────────────────────────────

function updateStats(){
  const qf  = document.getElementById('st-qcm-faits');
  const qf3 = document.getElementById('st3-qcm-faits');
  const sc  = document.getElementById('st-score');
  if(qf)  qf.textContent  = ST.qcm;
  if(qf3) qf3.textContent = ST.qcm;
  if(sc)  sc.textContent  = ST.qcm > 0 ? Math.round(ST.ok / ST.qcm * 100) + '%' : '—';
}

function updateProg(){
  Object.keys(MATS).forEach(m => {
    const tot = QCMS.filter(q => q.tags.includes(m)).length;
    if(!tot) return;
    const done = QCMS.filter(q => q.tags.includes(m) && ST.done[q.id]).length;
    const pct = Math.round(done / tot * 100);
    const f = document.getElementById('pg-' + m);
    const l = document.getElementById('pgl-' + m);
    if(f) f.style.width = pct + '%';
    if(l) l.textContent = `${done} / ${tot} tenté${done > 1 ? 's' : ''}`;
  });
}

// ── Référentiel R2C ───────────────────────────────────────────────

let _currentUE = 'all';

function openItems(){
  show('s-items');
  _buildUETabs();
  _renderItems();
  _pushNav({section:'items'}, '#items', _TITLES.items);
}

function _buildUETabs(){
  const ues = [...new Set(EDN_ITEMS.map(i => i.ue))];
  const tabsEl = document.getElementById('ue-tabs');
  tabsEl.innerHTML =
    `<div class="ue-tab ${_currentUE === 'all' ? 'active' : ''}" onclick="_filterUE('all')">Tous (367)</div>` +
    ues.map(ue => {
      const label = (ue.match(/^(UE\d+)/) || ['', '?'])[1];
      const count = EDN_ITEMS.filter(i => i.ue === ue).length;
      const safe = encodeURIComponent(ue);
      return `<div class="ue-tab ${_currentUE === ue ? 'active' : ''}" onclick="_filterUE(decodeURIComponent('${safe}'))" title="${ue}">${label} <small style="opacity:.65">(${count})</small></div>`;
    }).join('');
}

function _filterUE(ue){
  _currentUE = ue;
  _buildUETabs();
  _renderItems();
  document.getElementById('all-items-list').scrollTop = 0;
}

function _renderItems(){
  const el = document.getElementById('all-items-list');
  const filtered = _currentUE === 'all' ? EDN_ITEMS : EDN_ITEMS.filter(i => i.ue === _currentUE);

  if(_currentUE === 'all'){
    const groups = {};
    filtered.forEach(i => { if(!groups[i.ue]) groups[i.ue] = []; groups[i.ue].push(i); });
    el.innerHTML = Object.entries(groups).map(([ue, items]) =>
      `<div class="ue-group">
        <div class="ue-group-header">${ue}</div>
        ${items.map(_renderItemRow).join('')}
      </div>`
    ).join('');
  } else {
    el.innerHTML = filtered.map(_renderItemRow).join('');
  }
}

function _renderItemRow(i){
  const itemKey = 'item_' + i.id;
  const done    = getCount(itemKey) > 0;
  return `
    <div class="item-row-full ${done ? 'item-row-done' : ''}">
      <span class="item-num">Item<br>${i.id}</span>
      <div class="item-info">
        <div class="item-title">${i.title}</div>
        <div class="item-tags">${i.colleges.map(c => `<span class="item-tag">${c}</span>`).join('')}</div>
      </div>
      <button class="item-check ${done ? 'item-check-done' : ''}"
              onclick="event.stopPropagation();toggleItemDone('${itemKey}',this)"
              title="${done ? 'Marquer non vu' : 'Marquer vu'}">${done ? '✦' : '○'}</button>
    </div>`;
}

// ══════════════════════════════════════════
// CARDIO v2 — Accordion + QCM enrichi
// ══════════════════════════════════════════

let _cardioTagFilter = null;

function openCardio(){
  show('s-cardio');
  _pushNav({section:'cardio'}, '#cardio', 'MedRevision — QCM Cardiologie');
  _renderCardioAccordion();
}

function _renderCardioAccordion(){
  // Stats globales
  const stats = QCM_IDX.counts(CARDIO_QUESTIONS);
  document.getElementById('scd-global-stats').innerHTML =
    `<span class="acc-count">${stats.total} QCM</span>
     <span class="acc-rang-a">${stats.rangA}A</span>
     ${stats.rangB > 0 ? `<span class="acc-rang-b">${stats.rangB}B</span>` : ''}`;

  // Tag bar
  const tags = QCM_IDX.allTags();
  document.getElementById('scd-tag-bar').innerHTML =
    tags.map(({tag, count}) =>
      `<span class="tag-pill${_cardioTagFilter === tag ? ' active' : ''}"
             onclick="filterCardioByTag('${tag}')">${tag} <small>${count}</small></span>`
    ).join('');

  // Accordion
  const summary = QCM_IDX.summaryForStructure(CARDIO_STRUCTURE);
  document.getElementById('scd-accordion').innerHTML = summary
    .filter(p => p.total > 0)
    .map(partie => {
      const pct = partie.prog.pct;
      const itemsHtml = partie.items
        .filter(it => it.total > 0)
        .map(it => `
          <div class="acc-item" onclick="launchItem(${it.num},'${it.titre.replace(/'/g,"\\'")}')">
            <span class="acc-item-num">Item ${it.num}</span>
            <div class="acc-item-main">
              <span class="acc-item-titre">${it.titre}</span>
              <div class="acc-item-tags">
                ${it.tags.map(t =>
                  `<span class="tag-pill sm" onclick="event.stopPropagation();filterCardioByTag('${t}')">${t}</span>`
                ).join('')}
              </div>
            </div>
            <div class="acc-item-right">
              <div class="acc-item-badges">
                <span class="acc-count">${it.total}</span>
                <span class="acc-rang-a">${it.rangA}A</span>
                ${it.rangB > 0 ? `<span class="acc-rang-b">${it.rangB}B</span>` : ''}
              </div>
              <div class="acc-mini-prog">
                <div class="acc-prog-fill" style="width:${it.prog.pct}%"></div>
              </div>
            </div>
          </div>`).join('');

      return `
        <div class="acc-partie" id="acc-${partie.id}">
          <div class="acc-partie-hd" onclick="togglePartie('${partie.id}')">
            <span class="acc-arrow" id="acc-arrow-${partie.id}">▶</span>
            <div class="acc-hd-main">
              <span class="acc-titre">${partie.titre}</span>
              <div class="acc-hd-badges">
                <span class="acc-count">${partie.total} QCM</span>
                <span class="acc-rang-a">${partie.rangA}A</span>
                ${partie.rangB > 0 ? `<span class="acc-rang-b">${partie.rangB}B</span>` : ''}
              </div>
            </div>
            <button class="acc-launch"
                    onclick="event.stopPropagation();launchPartie('${partie.id}','${partie.titre.replace(/'/g,"\\'")}')">
              ▶ Lancer
            </button>
          </div>
          <div class="acc-prog-bar">
            <div class="acc-prog-fill" style="width:${pct}%"></div>
          </div>
          <div class="acc-partie-body" id="acc-body-${partie.id}" style="display:none">
            ${itemsHtml}
          </div>
        </div>`;
    }).join('');
}

function togglePartie(id){
  const body  = document.getElementById('acc-body-' + id);
  const arrow = document.getElementById('acc-arrow-' + id);
  const open  = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  arrow.textContent = open ? '▶' : '▼';
  arrow.classList.toggle('open', !open);
}

function launchPartie(id, titre){
  const qs = shuffleArr(QCM_IDX.byPartie(id));
  openCardioSession(qs, `${titre} — ${qs.length} questions`);
}

function launchItem(num, titre){
  const qs = shuffleArr(QCM_IDX.byItem(num));
  openCardioSession(qs, `${titre} (item ${num}) — ${qs.length} questions`);
}

function filterCardioByTag(tag){
  _cardioTagFilter = _cardioTagFilter === tag ? null : tag;
  if(_cardioTagFilter){
    const qs = QCM_IDX.byTag(tag);
    openCardioSession(qs, `Tag : ${tag} — ${qs.length} questions`);
  } else {
    _renderCardioAccordion();
  }
}

function openCardioSession(questions, titre){
  show('s-qcm-v2');
  document.getElementById('qv2-titre').textContent = titre;
  const stats = QCM_IDX.counts(questions);
  document.getElementById('qv2-meta').innerHTML =
    `<span class="acc-rang-a">${stats.rangA} rang A</span>
     ${stats.rangB > 0 ? `<span class="acc-rang-b">${stats.rangB} rang B</span>` : ''}`;
  renderQCMsV2(questions);
  _pushNav({section:'qcm-v2', questions, titre}, '#session', 'MedRevision — ' + titre);
}

// ── Render QCM v2 ──────────────────────────────────────────────────

function renderQCMsV2(questions){
  const el = document.getElementById('qv2-list');
  if(!questions.length){
    el.innerHTML = '<div class="empty">Aucune question disponible pour ce filtre.</div>';
    return;
  }
  const done0 = questions.filter(q => ST.done['v2_'+q.id]).length;
  el.innerHTML =
    `<div class="session-bar">
       <span>Progression</span>
       <strong id="qv2-sb">${done0} / ${questions.length} QCMs</strong>
     </div>` +
    questions.map(q => _renderQv2Card(q)).join('');
}

function _renderQv2Card(q){
  const isQRM  = q.reponses.length > 1;
  const type   = isQRM ? 'QRM' : 'QRU';
  const done   = ST.done['v2_' + q.id];
  const props  = Object.entries(q.propositions);

  const optsHtml = props.map(([L, text]) => {
    const isOk  = q.reponses.includes(L);
    let cls = 'opt';
    if(done){
      if(isOk) cls += ' ok';
      else if(done.sel && done.sel.includes(L)) cls += ' ko';
    }
    return `<div class="${cls}" data-letter="${L}" data-ok="${isOk}"
                 onclick="selOptV2(this,'${q.id}')">
              <div class="opt-letter">${L}</div>
              <div class="opt-body"><div class="opt-text">${text}</div></div>
            </div>`;
  }).join('');

  const corrHtml = done
    ? `<div class="qv2-correction">
         <div class="correction-lbl">📖 Correction</div>
         <p>${q.correction}</p>
       </div>`
    : `<button class="btn-verify" id="bv2-${q.id}"
               onclick="verifyV2('${q.id}')" disabled>
         Vérifier ma réponse
       </button>
       <div class="feedback" id="fb2-${q.id}"></div>`;

  return `
    <div class="qcm-card" id="v2card-${q.id}">
      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:8px">
        <span class="badge-type ${type.toLowerCase()}">${type}</span>
        <span class="badge-rang-tag rang-${q.rang.toLowerCase()}">${q.rang}</span>
        <span class="badge-source" style="margin:0">📚 Item ${q.item}</span>
        ${done ? `<span class="chip ${done.ok?'ok':'ko'}">${done.ok?'✓ Réussi':'✗ Raté'}</span>` : ''}
      </div>
      <div class="q-text">${q.question}</div>
      <div class="opts" id="v2opts-${q.id}"
           data-corrected="${done?'1':'0'}"
           data-qrm="${isQRM}"
           data-reponses="${q.reponses.join(',')}">
        ${optsHtml}
      </div>
      ${corrHtml}
    </div>`;
}

// ── Interaction QCM v2 ────────────────────────────────────────────

function selOptV2(el, qid){
  const list  = document.getElementById('v2opts-' + qid);
  if(list.getAttribute('data-corrected') === '1') return;
  const isQRM = list.getAttribute('data-qrm') === 'true';
  if(isQRM){
    el.classList.toggle('sel');
  } else {
    list.querySelectorAll('.opt').forEach(o => o.classList.remove('sel'));
    el.classList.add('sel');
  }
  const hasSel = !!list.querySelector('.opt.sel');
  const btn = document.getElementById('bv2-' + qid);
  if(btn) btn.disabled = !hasSel;
}

function verifyV2(qid){
  const list    = document.getElementById('v2opts-' + qid);
  if(list.getAttribute('data-corrected') === '1') return;
  list.setAttribute('data-corrected','1');

  const correct  = list.getAttribute('data-reponses').split(',');
  const selected = [...list.querySelectorAll('.opt.sel')].map(o => o.getAttribute('data-letter'));
  const win      = selected.length === correct.length && correct.every(l => selected.includes(l));

  list.querySelectorAll('.opt').forEach(opt => {
    const L    = opt.getAttribute('data-letter');
    const isOk = correct.includes(L);
    const isSel = selected.includes(L);
    opt.classList.remove('sel');
    if(isOk) opt.classList.add('ok');
    else if(isSel) opt.classList.add('ko');
  });

  const q = CARDIO_QUESTIONS.find(x => x.id === qid);
  const card = document.getElementById('v2card-' + qid);

  const btn = document.getElementById('bv2-' + qid);
  const fb  = document.getElementById('fb2-' + qid);
  if(btn) btn.style.display = 'none';
  if(fb){
    fb.className = 'feedback ' + (win ? 'ok' : 'ko');
    fb.textContent = win ? 'Excellente réponse ! 🎉' : 'Pas tout à fait — consultez la correction.';
  }

  if(q){
    const corr = document.createElement('div');
    corr.className = 'qv2-correction';
    corr.innerHTML = `<div class="correction-lbl">📖 Correction</div><p>${q.correction}</p>`;
    card.appendChild(corr);
  }

  ST.done['v2_' + qid] = {ok: win, sel: selected};
  ST.qcm++; if(win) ST.ok++;
  updateStats();

  const sb = document.getElementById('qv2-sb');
  if(sb){
    const total = document.querySelectorAll('#qv2-list .qcm-card').length;
    const done  = Object.keys(ST.done).filter(k => k.startsWith('v2_')).length;
    sb.textContent = `${Math.min(done, total)} / ${total} QCMs`;
  }
}
