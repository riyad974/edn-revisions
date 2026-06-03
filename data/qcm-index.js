/**
 * qcm-index.js
 * Fonctions de comptage dynamique pour le système de classement QCM.
 * Ne touche pas à DATA_MEDECINE ni aux QCMs existants.
 * Chargé APRÈS les fichiers de questions (CARDIO_QUESTIONS doit être défini).
 */

/* ── Structure attendue ────────────────────────────────────────────
   CARDIO_QUESTIONS : tableau plat de toutes les questions cardio,
   chaque question ayant : { id, item, partie, tags, rang, ... }
   CARDIO_STRUCTURE : objet lu depuis qcm-cardio.json (parties + items)
─────────────────────────────────────────────────────────────────── */

const QCM_IDX = (() => {

  // ── Filtre questions par critère ────────────────────────────────

  function byPartie(partieId) {
    return CARDIO_QUESTIONS.filter(q => q.partie === partieId);
  }

  function byItem(itemNum) {
    return CARDIO_QUESTIONS.filter(q => q.item === itemNum);
  }

  function byTag(tag) {
    return CARDIO_QUESTIONS.filter(q => q.tags.includes(tag));
  }

  // ── Compteurs pour une liste de questions ──────────────────────

  function counts(questions) {
    const total = questions.length;
    const rangA = questions.filter(q => q.rang === 'A').length;
    const rangB = questions.filter(q => q.rang === 'B').length;
    return { total, rangA, rangB };
  }

  // ── Stats par partie ────────────────────────────────────────────

  function statsPartie(partieId) {
    return counts(byPartie(partieId));
  }

  // ── Stats par item ──────────────────────────────────────────────

  function statsItem(itemNum) {
    return counts(byItem(itemNum));
  }

  // ── Stats pour toute la spécialité ─────────────────────────────

  function statsSpecialite() {
    return counts(CARDIO_QUESTIONS);
  }

  // ── Tous les tags existants avec compteur ──────────────────────

  function allTags() {
    const map = {};
    CARDIO_QUESTIONS.forEach(q => {
      q.tags.forEach(tag => {
        // Exclure les méta-tags rang
        if (tag === 'rangA' || tag === 'rangB') return;
        map[tag] = (map[tag] || 0) + 1;
      });
    });
    // Retourne trié par fréquence décroissante
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }));
  }

  // ── Progression (localStorage) ─────────────────────────────────
  // Retourne le % de questions vues au moins 1× pour un ensemble donné

  function progression(questions) {
    if (!questions.length) return { seen1: 0, seen2: 0, seen3: 0, pct: 0 };
    let s1 = 0, s2 = 0, s3 = 0;
    questions.forEach(q => {
      const n = getCount('qcm_' + q.id); // utilise progress.js
      if (n >= 3) s3++;
      else if (n >= 2) s2++;
      else if (n >= 1) s1++;
    });
    return {
      seen1: s1,
      seen2: s2,
      seen3: s3,
      pct: Math.round((s1 + s2 + s3) / questions.length * 100)
    };
  }

  // ── Résumé complet pour l'affichage accordion ──────────────────

  function summaryForStructure(structure) {
    return structure.parties.map(partie => {
      const pq   = byPartie(partie.id);
      const pc   = counts(pq);
      const prog = progression(pq);
      return {
        id:    partie.id,
        titre: partie.titre,
        ...pc,
        prog,
        items: partie.items.map(item => {
          const iq   = byItem(item.num);
          const ic   = counts(iq);
          const iprog = progression(iq);
          const tags = allTagsForItem(item.num);
          return {
            ...item,
            ...ic,
            prog: iprog,
            tags
          };
        })
      };
    });
  }

  // Tags présents sur un item donné (sans méta-tags rang)
  function allTagsForItem(itemNum) {
    const set = new Set();
    byItem(itemNum).forEach(q => {
      q.tags.forEach(t => {
        if (t !== 'rangA' && t !== 'rangB') set.add(t);
      });
    });
    return [...set];
  }

  return {
    byPartie,
    byItem,
    byTag,
    counts,
    statsPartie,
    statsItem,
    statsSpecialite,
    allTags,
    progression,
    summaryForStructure,
    allTagsForItem
  };
})();
