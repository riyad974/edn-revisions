// ══════════════════════════════════════════
//  progress.js — Tracking de progression EDN
//  localStorage uniquement · aucune dépendance
// ══════════════════════════════════════════

const PROG_PREFIX = 'edn_prog_';

// ── Lecture ──────────────────────────────

/** Nombre de passages d'un item (0 si jamais vu) */
function getCount(itemId) {
  return parseInt(localStorage.getItem(PROG_PREFIX + itemId) || '0', 10);
}

/**
 * Niveau de maîtrise :
 *   0 = pas vu
 *   1 = vu      (1 passage)
 *   2 = revu    (2 passages)
 *   3 = maîtrisé (3+ passages)
 */
function getMasteryLevel(itemId) {
  const n = getCount(itemId);
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return 3;
}

// ── Écriture ─────────────────────────────

/**
 * Incrémente le compteur d'un item.
 * Retourne { count, level, itemId } pour que l'appelant
 * puisse mettre à jour l'UI immédiatement.
 */
function updateProgress(itemId) {
  const count = getCount(itemId) + 1;
  localStorage.setItem(PROG_PREFIX + itemId, count);
  const level = count >= 3 ? 3 : count;
  return { itemId, count, level };
}

/** Fixe manuellement un compteur (import, debug). */
function setCount(itemId, value) {
  const n = Math.max(0, parseInt(value, 10) || 0);
  if (n === 0) localStorage.removeItem(PROG_PREFIX + itemId);
  else localStorage.setItem(PROG_PREFIX + itemId, n);
}

// ── Statistiques ─────────────────────────

/**
 * Stats pour un tableau d'IDs.
 * Retourne { total, seen, reviewed, mastered, pct }
 *   seen     = au moins 1 passage
 *   reviewed = au moins 2 passages
 *   mastered = 3+ passages (référence pour les barres de progression)
 */
function getStats(itemIds) {
  let seen = 0, reviewed = 0, mastered = 0;
  itemIds.forEach(id => {
    const lvl = getMasteryLevel(id);
    if (lvl >= 1) seen++;
    if (lvl >= 2) reviewed++;
    if (lvl >= 3) mastered++;
  });
  const total = itemIds.length;
  return {
    total,
    seen,
    reviewed,
    mastered,
    pct: total ? Math.round(mastered / total * 100) : 0
  };
}

/** IDs de tous les items actuellement trackés dans localStorage. */
function getAllTrackedIds() {
  return Object.keys(localStorage)
    .filter(k => k.startsWith(PROG_PREFIX))
    .map(k => k.slice(PROG_PREFIX.length));
}

/**
 * Stats globales du site (tous les items vus un jour).
 * Pour la barre globale sur la page d'accueil.
 */
function getGlobalStats() {
  const ids = getAllTrackedIds();
  return getStats(ids);
}

/**
 * Stats d'une section QCM par matière.
 * Passe les IDs des QCMs de cette matière.
 */
function getMatStats(matId) {
  if (typeof QCMS === 'undefined') return { total: 0, mastered: 0, pct: 0 };
  const ids = QCMS.filter(q => q.tags.includes(matId)).map(q => q.id);
  return getStats(ids);
}

/**
 * Stats de la section Référentiel R2C.
 */
function getItemsStats() {
  if (typeof EDN_ITEMS === 'undefined') return { total: 0, mastered: 0, pct: 0 };
  const ids = EDN_ITEMS.map(i => 'item_' + i.id);
  return getStats(ids);
}

// ── Reset ─────────────────────────────────

/**
 * Remet à zéro toute la progression.
 * Retourne true si l'utilisateur a confirmé, false sinon.
 */
function resetAllProgress() {
  if (!confirm('⚠️ Remettre à zéro toute ta progression ?\nCette action est irréversible.')) return false;
  Object.keys(localStorage)
    .filter(k => k.startsWith(PROG_PREFIX))
    .forEach(k => localStorage.removeItem(k));
  return true;
}

// ── Helpers UI ───────────────────────────

/**
 * Classe CSS à appliquer selon le niveau de maîtrise.
 * Utilisé pour styliser les badges visuels.
 */
function masteryClass(level) {
  return ['prog-none', 'prog-seen', 'prog-reviewed', 'prog-mastered'][level] || 'prog-none';
}

/**
 * Label texte court du niveau.
 */
function masteryLabel(level) {
  return ['', '1×', '2×', '✦'][level] || '';
}
