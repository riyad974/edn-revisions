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
  updateBeachStats();
  renderBeachSpecs();
  loadSettings();
  initScrollAnim();
};

// ── Navigation ────────────────────────────────────────────────────

function goHome(){
  show('s-scene');
  ST.mat = null;
  renderBeachSpecs();
  // Atterrir sur la carte (90% du scroll max)
  const target = window.innerHeight * 1.6 * 0.9;
  if(_lenis) _lenis.scrollTo(target, {immediate:true});
  else window.scrollTo(0, target);
  _onScroll(target);
}

// ── Scroll-driven animation ───────────────────────────────────────

// ── Cache éléments scroll ─────────────────────────────────────────
let _elCard, _elWelcome, _elStats, _elShapes, _lenis;

function _resetScrollAnim(){
  if(_elCard)   { _elCard.style.opacity='0'; _elCard.style.transform='translateY(120px) scale(0.9)'; }
  if(_elWelcome){ _elWelcome.style.opacity='1'; _elWelcome.style.transform='translateX(-50%) scale(1)'; _elWelcome.style.filter='blur(0px)'; }
  if(_elStats)    _elStats.style.opacity='0';
  if(_elShapes)   _elShapes.forEach(s=>s.style.opacity='1');
}

function _onScroll(scrollY){
  if(!document.getElementById('s-scene').classList.contains('active')) return;

  const maxScroll = window.innerHeight * 1.6; // 260vh - 100vh
  const p = Math.min(scrollY / maxScroll, 1);

  // Titre : scale 1→1.45, blur 0→14px, opacity 1→0 (0–42%)
  const tP  = Math.min(p / 0.42, 1);
  const tE  = 1 - Math.pow(1 - tP, 2);
  if(_elWelcome){
    _elWelcome.style.opacity   = Math.max(0, 1 - tE);
    _elWelcome.style.transform = `translateX(-50%) scale(${1 + 0.45 * tE})`;
    _elWelcome.style.filter    = `blur(${14 * tE}px)`;
  }
  if(_elShapes) _elShapes.forEach(s => s.style.opacity = Math.max(0, 1 - tE * 1.4));

  // Carte : monte de bas (70–100%), scale 0.9→1, easing cubic-out
  const cP = Math.max(0, (p - 0.70) / 0.30);
  const cE = 1 - Math.pow(1 - cP, 3);
  if(_elCard){
    _elCard.style.opacity   = cE;
    _elCard.style.transform = `translateY(${120 * (1 - cE)}px) scale(${0.9 + 0.1 * cE})`;
  }

  // Stats : 88–100%
  if(_elStats) _elStats.style.opacity = Math.max(0, (p - 0.88) / 0.12);
}

function initScrollAnim(){
  _elCard    = document.getElementById('beach-card');
  _elWelcome = document.getElementById('beach-welcome');
  _elStats   = document.querySelector('.beach-stats-col');
  _elShapes  = document.querySelectorAll('.e-shape');
  const scene = document.getElementById('s-scene');

  function updateVisibility(){
    const on = scene.classList.contains('active');
    if(_elWelcome) _elWelcome.style.display = on ? 'block' : 'none';
    if(_elShapes)  _elShapes.forEach(s => s.style.display = on ? 'block' : 'none');
  }
  updateVisibility();
  new MutationObserver(updateVisibility)
    .observe(scene, {attributes:true, attributeFilter:['class']});

  // Lenis — smooth scroll
  _lenis = new Lenis({
    duration: 1.6,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.85,
  });
  _lenis.on('scroll', ({scroll}) => _onScroll(scroll));
  (function raf(time){ _lenis.raf(time); requestAnimationFrame(raf); })(0);
}

// ── Beach Card ────────────────────────────────────────────────────

function bcTab(id, btn) {
  document.querySelectorAll('.bc-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.bc-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('bcp-' + id).classList.add('active');
}

function renderBeachSpecs() {
  const el = document.getElementById('bc-spec-list');
  if (!el) return;
  const specs = [
    { id:'cardio',   icon:'🫀', nom:'Cardiologie',            col:'#ef4444' },
    { id:'dermato',  icon:'🪮', nom:'Dermatologie',           col:'#0ea5e9' },
    { id:'infectio', icon:'🦠', nom:'Infectiologie',          col:'#22c55e' },
    { id:'neuro',    icon:'🧠', nom:'Neurologie',             col:'#a855f7' },
    { id:'hge',      icon:'💩', nom:'Hépato-Gastro-Entéro',  col:'#f97316' },
  ];
  el.innerHTML = specs.map(s => {
    const tot  = QCMS.filter(q => q.tags.includes(s.id)).length;
    const done = QCMS.filter(q => q.tags.includes(s.id) && ST.done[q.id]).length;
    const pct  = tot ? Math.round(done / tot * 100) : 0;
    return `<div class="bc-spec-row" onclick="openMat('${s.id}')">
      <div class="bc-spec-icon">${s.icon}</div>
      <div class="bc-spec-info">
        <div class="bc-spec-name">${s.nom}</div>
        <div class="bc-spec-count">${done} / ${tot} QCMs</div>
      </div>
      <div class="bc-spec-track">
        <div class="bc-spec-fill" style="width:${pct}%;background:${s.col}"></div>
      </div>
    </div>`;
  }).join('');
}

function showQCMOverlay(){
  // Petit rebond du panneau
  const sign = document.getElementById('obj-sign');
  if(sign){ sign.style.transition='transform .18s ease'; sign.style.transform='scale(1.08) rotate(-1.8deg)'; setTimeout(()=>{ sign.style.transform=''; sign.style.transition=''; },200); }

  // Mise à jour des stats par spécialité
  let totalDone = 0, totalAll = 0;
  Object.keys(MATS).forEach(m => {
    const tot  = QCMS.filter(q => q.tags.includes(m)).length;
    const done = QCMS.filter(q => q.tags.includes(m) && ST.done[q.id]).length;
    totalAll += tot; totalDone += done;
    const prog = document.getElementById('sp-' + m);
    const fill = document.getElementById('spf-' + m);
    if(prog) prog.textContent = done + ' / ' + tot + ' QCMs';
    if(fill) fill.style.width = (tot ? Math.round(done/tot*100) : 0) + '%';
  });
  const sub = document.getElementById('qcm-global-stats');
  if(sub) sub.textContent = totalAll + ' QCMs · ' + totalDone + ' réalisés';

  document.getElementById('qcm-overlay').classList.add('open');
}

function hideQCMOverlay(){
  document.getElementById('qcm-overlay').classList.remove('open');
}

function launchMat(id){
  hideQCMOverlay();
  setTimeout(()=>{ openMat(id); }, 180);
}

function beachZoom(el, target){
  const scene = document.getElementById('beach-scene');
  const rect  = el.getBoundingClientRect();
  const sr    = scene.getBoundingClientRect();
  const ox = ((rect.left + rect.width  / 2 - sr.left) / sr.width  * 100).toFixed(1) + '%';
  const oy = ((rect.top  + rect.height / 2 - sr.top)  / sr.height * 100).toFixed(1) + '%';
  scene.style.transformOrigin = ox + ' ' + oy;
  scene.classList.add('zooming');
  setTimeout(() => {
    if(target === 'items') openItems();
    else show(target);
    setTimeout(() => {
      scene.classList.remove('zooming');
      scene.style.transformOrigin = 'center center';
    }, 80);
  }, 680);
}

function show(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(_lenis) _lenis.scrollTo(0, {immediate:true});
  else window.scrollTo(0,0);
}

function openMat(id){
  ST.mat = id;
  document.getElementById('mat-titre').textContent = MATS[id].nom;
  show('s-mat');
  renderQCMs();
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
  const qf = document.getElementById('st-qcm-faits');
  const sc = document.getElementById('st-score');
  if(qf) qf.textContent = ST.qcm;
  if(sc) sc.textContent = ST.qcm > 0 ? Math.round(ST.ok / ST.qcm * 100) + '%' : '—';
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
