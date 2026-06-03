const CARDIO_QUESTIONS = [
  {
    "id": "q_item152_001",
    "item": 152,
    "specialite": "cardiologie",
    "partie": "valves",
    "tags": ["endocardite", "signes-peripheriques", "complexes-immuns", "rangA"],
    "rang": "A",
    "question": "Quel est le signe cutané périphérique caractéristique de l'endocardite infectieuse ?",
    "propositions": {
      "A": "Érythème migrant",
      "B": "Faux panaris d'Osler",
      "C": "Signe de Koplik",
      "D": "Placard de Janeway",
      "E": "Taches de Roth"
    },
    "reponses": ["B"],
    "correction": "Les faux panaris d'Osler sont des nodules douloureux et fugaces de la pulpe des doigts, causés par des dépôts de complexes immuns ou des micro-emboles septiques. Ce sont des signes périphériques CLASSIQUES de l'endocardite infectieuse à connaître absolument. À distinguer des Plaques de Janeway (macules indolores des paumes = emboles septiques, rang B) et des Taches de Roth (hémorragies rétiniennes, rang B). L'érythème migrant est spécifique de la maladie de Lyme. Le signe de Koplik est pathognomonique de la rougeole."
  },
  {
    "id": "q_item232_001",
    "item": 232,
    "specialite": "cardiologie",
    "partie": "rythmologie",
    "tags": ["FA", "ECG", "diagnostic", "ondes-P", "RR-irregulier", "rangA"],
    "rang": "A",
    "question": "Parmi ces descriptions, laquelle correspond à l'aspect ECG caractéristique d'une Fibrillation Atriale (FA) ?",
    "propositions": {
      "A": "Ondes P régulières en dents de scie à ~300/min avec conduction ventriculaire régulière",
      "B": "Absence d'ondes P, trémulation de la ligne de base (ondes f) et intervalles R-R irréguliers",
      "C": "Allongement progressif de l'espace PR suivi d'une onde P bloquée",
      "D": "Ondes P négatives en D2-D3-aVF précédant un QRS fin",
      "E": "QRS larges et réguliers sans onde P identifiable"
    },
    "reponses": ["B"],
    "correction": "La FA se définit à l'ECG par 3 éléments indissociables : (1) absence d'ondes P sinusales remplacées par une trémulation anarchique de la ligne de base (ondes f, 400–600/min), (2) intervalles R-R irréguliers (réponse ventriculaire irrégulière), (3) QRS fins (sauf aberration de conduction). A = Flutter atrial (ondes F en dents de scie régulières ~300/min, conduction souvent 2:1). C = BAV 2° type Wenckebach (Mobitz I). D = Rythme jonctionnel. E = Tachycardie ventriculaire."
  },
  {
    "id": "q_item232_002",
    "item": 232,
    "specialite": "cardiologie",
    "partie": "rythmologie",
    "tags": ["FA", "anticoagulation", "CHA2DS2-VASc", "AOD", "AVC", "traitement", "rangA"],
    "rang": "A",
    "question": "Un homme de 68 ans est en FA permanente. Il a des antécédents d'HTA et de diabète de type 2. Quel est son score CHA₂DS₂-VASc et quelle est la conduite à tenir concernant l'anticoagulation ?",
    "propositions": {
      "A": "Score 1 — anticoagulation non recommandée",
      "B": "Score 2 — anticoagulation recommandée par AOD ou AVK",
      "C": "Score 3 — anticoagulation recommandée par AOD ou AVK",
      "D": "Score 2 — antiagrégation plaquettaire par aspirine suffisante",
      "E": "Score 3 — antiagrégation plaquettaire par aspirine suffisante"
    },
    "reponses": ["C"],
    "correction": "Score CHA₂DS₂-VASc : C (IC) = 0 · H (HTA) = 1 · A₂ (âge ≥ 75 ans) = 0 · D (diabète) = 1 · S₂ (AVC/AIT) = 0 · V (maladie vasculaire) = 0 · A (âge 65–74 ans) = 1 · Sc (sexe féminin) = 0 → TOTAL = 3. Score ≥ 2 chez l'homme → anticoagulation recommandée. Les AOD (apixaban, rivaroxaban, dabigatran, edoxaban) sont préférés aux AVK en FA non valvulaire. L'aspirine seule est INSUFFISANTE et ne doit PAS être prescrite à la place des anticoagulants."
  },
  {
    "id": "q_item234_001",
    "item": 234,
    "specialite": "cardiologie",
    "partie": "ic-dyspnee",
    "tags": ["IC", "OAP", "traitement", "contre-indication", "betabloquants", "urgence", "rangA"],
    "rang": "A",
    "question": "Quel traitement est formellement contre-indiqué en phase aiguë initiale d'un œdème aigu pulmonaire (OAP) cardiogénique ?",
    "propositions": {
      "A": "Furosémide IV 40–80 mg",
      "B": "Dérivés nitrés IV",
      "C": "Ventilation non invasive (VNI)",
      "D": "Bêtabloquants",
      "E": "Position demi-assise"
    },
    "reponses": ["D"],
    "correction": "Les bêtabloquants sont formellement CONTRE-INDIQUÉS en phase aiguë d'OAP. Leur effet inotrope négatif aggrave la dysfonction ventriculaire et le bas débit cardiaque. En revanche : Furosémide IV (1ère intention, diurèse rapide), dérivés nitrés IV (réduction précharge par vasodilatation veineuse), VNI-CPAP (si SpO₂ < 90% malgré O₂) et position demi-assise sont tous indiqués. Les bêtabloquants sont réintroduits à distance, une fois la décompensation stabilisée."
  }
];
