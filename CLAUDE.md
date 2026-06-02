# EDN · Révisions Actives — CLAUDE.md

Application web statique de révisions médicales pour l'EDN (Épreuves Dématérialisées Nationales), en français. Aucun framework, aucun build step — HTML/CSS/JS vanilla pur.

## Architecture

```
projet/
├── index.html        # SPA à écrans multiples (show/hide via .active)
├── style.css         # Design system complet (CSS custom properties, pas de framework)
├── app.js            # Logique principale : navigation, QCMs, stats, référentiel R2C
├── data.js           # DATA_MEDECINE : MATS (matières) + COURS + QCMs cardio/dermato/infectio/HGE
├── data-neuro.js     # 102 QCMs neurologie — injectés dans DATA_MEDECINE après data.js
├── data-items.js     # EDN_ITEMS : 367 items R2C (généré par parse_items.py)
└── parse_items.py    # Script Python — génère data-items.js depuis "nouveau 1.txt"
```

## Écrans (SPA)

| ID HTML     | Fonction                           | Ouvert par         |
|-------------|------------------------------------|--------------------|
| `s-home`    | Accueil — stats + grille matières  | `goHome()`         |
| `s-mat`     | QCMs d'une spécialité              | `openMat(matId)`   |
| `s-items`   | Référentiel R2C (367 items)        | `openItems()`      |

Navigation : `show(id)` cache tous les `.screen` et active le bon.

## Données — structures clés

### `DATA_MEDECINE` (data.js)
```js
{
  MATS: {
    cardio: { nom, desc, col },   // clé = id de matière
    dermato, infectio, neuro, hge
  },
  COURS: [{ id, titre, desc, item, tags:[], html }],
  QCMS:  [{ id, type:"QRU"|"QRM", tags:[], src, q, opts:[{t, ok, j?}] }]
}
```

### `data-neuro.js`
Étend `DATA_MEDECINE` après chargement :
```js
DATA_MEDECINE.MATS.neuro.desc = "...";
const NEURO_QCMS = [...];        // QCMs neuro
DATA_MEDECINE.QCMS.push(...NEURO_QCMS);   // ← à ajouter si pas déjà fait
```
> Vérifier que les QCMs neuro sont bien poussés dans `DATA_MEDECINE.QCMS` sinon ils n'apparaissent pas.

### `EDN_ITEMS` (data-items.js)
```js
[{ id:1, ue:"UE1 - ...", title:"...", colleges:["SP","MI",...] }]
```
367 items, UE1 à UE11. Collèges = abréviations officielles (AR, CD, CMF, Der, DSP, End, Gén, Gér, GO, HGE, Hém, Imm, Inf, MCV, MG, MI, MIR, MPR, MTL, NC, Nép, Neu, Nut, Oph, ORL, OT, Ped, Pne, Psy, Rhu, SP, Thé, Uro…).

## Design system (style.css)

Variables CSS dans `:root` — **toujours utiliser ces tokens, jamais de couleurs brutes** :

| Token              | Usage                              |
|--------------------|------------------------------------|
| `--sky` / `--sky-dark` | Couleur primaire bleue           |
| `--navy`           | Titres principaux                  |
| `--text` / `--muted` | Corps de texte                   |
| `--bg` / `--white` | Fonds                              |
| `--border-n`       | Bordures neutres                   |
| `--sh-sm` / `--sh` | Ombres portées                    |
| `--r` / `--r-lg`   | Border-radius                      |
| `--t` / `--t-spring` | Transitions                      |

Couleurs par spécialité : `--cardio` (#ef4444), `--dermato` (#0ea5e9), `--infectio` (#22c55e), `--neuro` (#a855f7), `--hge` (#f97316).

Animations globales : `fadeUp`, `fadeIn`, `pulseDot`.

## Ajouter une nouvelle spécialité

1. **data.js** → ajouter dans `MATS` : `{ nom, desc, col }`
2. **data.js** → ajouter les QCMs avec `tags: ["<id>"]`
3. **index.html** → ajouter une `.mat-card.<id>` dans `.mat-grid` avec `onclick="openMat('<id>')"`, `id="pg-<id>"`, `id="pgl-<id>"`
4. **style.css** → ajouter `.mat-card.<id> { border-top-color: var(--<id>) }` et les variantes `.mat-icon`, `.prog-fill`

## Ajouter des QCMs

Structure minimale d'un QCM :
```js
{
  "id": "mat_qN",          // unique
  "type": "QRU",           // ou "QRM" (plusieurs bonnes réponses)
  "tags": ["cardio"],      // id(s) de matière(s)
  "src": "Nom du chapitre",
  "q": "Texte de la question",
  "opts": [
    { "t": "Proposition A", "ok": false },
    { "t": "Proposition B", "ok": true, "j": "Justification optionnelle" }
  ]
}
```
- **QRU** : exactement 1 `ok: true`
- **QRM** : plusieurs `ok: true`, la logique de vérification est dans `verify()` dans app.js

## Régénérer data-items.js

```bash
# Mettre le fichier source dans "nouveau 1.txt" puis :
python parse_items.py
# → écrit data-items.js avec const EDN_ITEMS = [...]
```

Le script reconnaît les lignes `UE\d+...`, `Item \d+`, et les abréviations de collèges.

## État de progression (app.js)

Stocké dans `ST` (objet en mémoire, **non persisté entre sessions**) :
```js
ST = { qcm: 0, ok: 0, done: { [qid]: {ok, sel} }, mat: null }
```
Pour ajouter la persistance : `localStorage.setItem('edn_st', JSON.stringify(ST))` au bon endroit.

## Conventions

- Police : **Sora** (Google Fonts), toujours `font-family:'Sora',sans-serif`
- Langue de l'UI : **français**
- Pas de commentaires dans le code sauf si logique non évidente
- Pas de framework JS, pas de bundler — tout est vanilla
- Ordre de chargement des scripts dans index.html : `data.js` → `data-neuro.js` → `data-items.js` → `app.js`
