const DATA_MEDECINE = {
  "MATS": {
    "cardio": {
      "nom": "🫀 Cardiologie",
      "desc": "Pathologies cardiaques, rythmologie, insuffisance",
      "col": "#ff4b6b"
    },
    "dermato": {
      "nom": "🩺 Dermatologie",
      "desc": "Dermatoses inflammatoires, tumeurs cutanées",
      "col": "#38bdf8"
    },
    "infectio": {
      "nom": "🦠 Infectiologie",
      "desc": "Infections bactériennes, virales, parasitaires",
      "col": "#22c55e"
    },
    "neuro": {
      "nom": "🧠 Neurologie",
      "desc": "Bientôt disponible",
      "col": "#a855f7"
    }, // <-- La virgule a été ajoutée ici !
    "hge": {
      "nom": "🍕 Hépato-Gastro-Entérologie",
      "desc": "Hémorragies digestives, pathologies hépatiques et digestives",
      "col": "#f97316"
    }
  }, // Fin de MATS
  "COURS": [
    {
      "id": "c_endo",
      "titre": "Endocardite Infectieuse",
      "desc": "Critères de Duke, signes périphériques, ATB",
      "item": 152,
      "tags": ["cardio", "infectio"],
      "html": "<h2>Endocardite Infectieuse</h2><p>Infection bactérienne ou fongique de l'endocarde pariétal ou valvulaire. Urgence diagnostique et thérapeutique.</p><div class=\"memo\"><strong>⚡ Rang A — indispensable</strong>Fièvre + souffle cardiaque = endocardite jusqu'à preuve du contraire. Hémocultures avant tout ATB.</div><h3>Signes périphériques</h3><ul><li><b>Faux panaris d'Osler :</b> nodules douloureux fugaces à la pulpe des doigts — complexes immuns.</li><li><b>Placard de Janeway :</b> macules érythémateuses indolores des paumes — emboles septiques.</li><li><b>Taches de Roth :</b> hémorragies rétiniennes périfovéolaires.</li></ul><h3>Critères de Duke modifiés</h3><p>Diagnostic = 2 majeurs OU 1 majeur + 3 mineurs OU 5 mineurs.</p><ul><li><b>Majeur 1 :</b> hémocultures positives (≥ 2, germe typique)</li><li><b>Majeur 2 :</b> atteinte endocardique à l'ETO</li></ul><h3>Traitement</h3><p>ATB bactéricide prolongée (4–6 semaines IV). Chirurgie si : IC sévère, végétation > 10 mm, abcès, échec ATB.</p>"
    },
    {
      "id": "c_ica",
      "titre": "Insuffisance Cardiaque Aiguë",
      "desc": "OAP, traitement d'urgence, critères réa",
      "item": 234,
      "tags": ["cardio"],
      "html": "<h2>Insuffisance Cardiaque Aiguë</h2><p>Décompensation rapide de la fonction ventriculaire, potentially létale.</p><div class=\"memo\"><strong>⚡ Priorités urgences</strong>O₂ si SpO₂ &lt; 90% · Furosémide IV · Position demi-assise · Monitoring continu</div><h3>OAP cardiogénique — traitement</h3><ul><li><b>Furosémide IV :</b> 40–80 mg bolus. 1ère intention absolue.</li><li><b>Dérivés nitrés IV :</b> vasodilatation veineuse, réduction précharge.</li><li><b>VNI (CPAP/BiPAP) :</b> si détresse respiratoire persistante.</li><li><b>Bêtabloquants :</b> formellement contre-indiqués en phase aiguë initiale.</li></ul><h3>Critères de réanimation</h3><p>Choc cardiogénique (TAS &lt; 90 mmHg + bas débit), trouble du rythme grave, vasopresseurs nécessaires.</p>"
    },
    {
      "id": "c_fa",
      "titre": "Fibrillation Atriale (FA)",
      "item": 232,
      "desc": "Physiopathologie, ECG et prise en charge",
      "tags": ["cardio", "rythmo"],
      "html": "<h2>Fibrillation Atriale (FA)</h2><p>Trouble du rythme supraventriculaire le plus fréquent, caractérisé par une activation atriale anarchique.</p><div class=\"memo\"><strong>⚡ Risque majeur</strong>La stase sanguine dans l'auricule gauche expose à un risque thromboembolique élevé (AVC ischémique).</div><h3>Diagnostic ECG</h3><ul><li>Absence d'ondes P sinusales.</li><li>Trémulation de la ligne de base (ondes f, fréquence 400-600/min).</li><li>Espace R-R irrégulier (réponse ventriculaire irrégulière).</li></ul><h3>Prise en charge</h3><p>1. Prévention thromboembolique (Score CHA2DS2-VASc, AOD ou AVK).<br>2. Contrôle de la fréquence (Bêtabloquants, inhibiteurs calciques bradycardisants).<br>3. Contrôle du rythme (réduction par amiodarone ou choc électrique externe).</p>"
    },
    {
      "id": "c_mel",
      "titre": "Le Mélanome Malin",
      "item": 302,
      "desc": "ABCDE, formes cliniques, indice de Breslow",
      "tags": ["dermato"],
      "html": "<h2>Mélanome Malin</h2><p>Tumeur maligne mélanocytaire. Pronostic corrélé à l'indice de Breslow (épaisseur en mm).</p><div class=\"memo\"><strong>⚡ Règle ABCDE</strong>A = Asymétrie · B = Bords irréguliers · C = Couleur hétérogène · D = Diamètre > 6 mm · E = Évolution</div><h3>Formes cliniques</h3><ul><li><b>SSM (70%) :</b> extensif superficiel, extension horizontale d'abord — meilleur pronostic.</li><li><b>Nodulaire :</b> emblée invasif verticalement — pronostic défavorable.</li><li><b>Dubreuilh :</b> sujet âgé, face, évolution lente.</li><li><b>Acrolentigineux :</b> paumes/plantes/sous-unguéal — souvent diagnostiqué tard.</li></ul><h3>Prise en charge</h3><p>Exérèse chirurgicale avec marges selon Breslow. Ganglion sentinelle si Breslow > 1 mm.</p>"
    },
    {
      "id": "c_lyme",
      "titre": "Maladie de Lyme",
      "item": 173,
      "desc": "Érythème migrant, phases, traitement",
      "tags": ["infectio", "dermato"],
      "html": "<h2>Maladie de Lyme (Borréliose)</h2><p>Infection à <i>Borrelia burgdorferi</i> transmise par <i>Ixodes ricinus</i>.</p><div class=\"memo\"><strong>⚡ Clé diagnostique</strong>Érythème migrant = diagnostic clinique pur. Sérologie inutile en phase primaire (souvent faussement négative).</div><h3>Phases</h3><ul><li><b>Primaire (J3–J30) :</b> érythème migrant centrifuge, indolore, non prurigineux.</li><li><b>Secondaire :</b> neuroborréliose (paralysie faciale, méningite), arthrite, cardite (BAV).</li><li><b>Tertiaire :</b> arthrite chronique, encéphalopathie.</li></ul><h3>Traitement</h3><p>Phase primaire : <b>Amoxicilline 3 g/j × 14 j</b> ou Doxycycline 200 mg/j × 14 j.<br>Formes neuro graves : Ceftriaxone IV 2 g/j × 21 j.</p>"
    }, // <-- La virgule a été ajoutée ici !
    {
      "id": "c_hem_dig",
      "titre": "Hémorragies Digestives",
      "item": 355,
      "desc": "Prise en charge des hémorragies hautes et basses, orientation et objectifs",
      "tags": ["hge"],
      "html": "<h2>Hémorragies Digestives</h2><p>L'hémorragie digestive est une urgence médico-chirurgicale fréquente. La priorité absolue initiale est de juger du retentissement hémodynamique et de stabiliser le patient.</p><div class=\"box box-rang-a\"><div class=\"box-title\">🚨 RANG A — BILAN INITIAL SYSTÉMATIQUE</div>Afin d'évaluer la gravité de la spoliation sanguine, prélever immédiatement : <span class=\"med-badge badge-exam\">NFS</span> · <span class=\"med-badge badge-exam\">Plaquettes</span> · <span class=\"med-badge badge-exam\">Ionomogramme</span> · <span class=\"med-badge badge-exam\">Créatininémie</span> · <span class=\"med-badge badge-exam\">RAI</span> · <span class=\"med-badge badge-exam\">TP / TCA</span>.</div><table class=\"med-table\"><thead><tr><th>Paramètre</th><th>Hémorragie Haute (80%)</th><th>Hémorragie Basse (20%)</th></tr></thead><tbody><tr><td><b>Signes Cliniques</b></td><td>• Hématémèse (vomissement de sang)<br>• Méléna (selles noires fétides)<br>• Rectorragie abondante (si transit ultra-accéléré)</td><td>• Rectorragie (sang rouge par l'anus)<br>• Hématochézie</td></tr><tr><td><b>Causes Fréquentes</b></td><td>• Ulcère gastro-duodénal (UGD)<br>• Hypertension portale (Rupture de varices œsophagiennes)</td><td>• Diverticule colique<br>• Colite infectieuse ou inflammatoire<br>• Pathologie proctologique (Hémo...)<br>• Cancer colorectal</td></tr><tr><td><b>Examens Clés</b></td><td><span class=\"med-badge badge-exam\">EOGD</span> (Endoscopie Oeso-Gastro-Duodénale) indispensable à visée diagnostique et thérapeutique.</td><td><span class=\"med-badge badge-exam\">Coloscopie</span> (après préparation, souvent précédée d'érythromycine) ou <span class=\"med-badge badge-exam\">Vidéo-capsule</span> si le bilan haut/bas initial est négatif.</td></tr></tbody></table><h3>Prise en charge thérapeutique spécifique</h3><ul class=\"med-list\"><li><b>Si cause ulcéreuse (UGD) suspectée :</b> Administration immédiate d'un traitement par <span class=\"med-badge badge-atb\">IPP IV</span> associé à une hémostase endoscopique mécanique (pose de clip).</li><li><b>Si Hypertension Portale (Varices œsophagiennes) :</b> Mise en place d'une <span class=\"med-badge badge-atb\">Antibiothérapie prophylactique</span> pendant 7 jours, d'un traitement <span class=\"med-badge badge-atb\">Vaso-actif</span> (<span class=\"med-badge badge-atb\">Octréotide</span>) et réalisation d'une <span class=\"med-badge badge-atb\">Ligature élastique</span> des varices.</li></ul><div class=\"box box-pmz\"><div class=\"box-title\">⚠️ SEUILS ET OBJECTIFS DE TRANSFUSION (PMZ)</div>Il est capital de cibler le bon niveau d'hémoglobine (Hb) pour éviter les complications :<br><br>• <b>7 à 9 g/dL :</b> Objectif transfusionnel standard pour la population générale.<br>• <b>> 9 g/dL :</b> Seuil minimal impératif à maintenir en cas de comorbidités majeures (ex: insuffisance coronaire active).</div>"
    }
  ],
  "QCMS": [
    {
      "id": "q1",
      "type": "QRU",
      "tags": ["cardio", "infectio"],
      "src": "ECN 2019 — Item 149",
      "q": "Quel est le signe cutané périphérique caractéristique de l'endocardite infectieuse ?",
      "opts": [
        {"t": "Érythème migrant", "ok": false, "j": "L'érythème migrant est la lésion pathognomonique de la phase primaire de la maladie de Lyme. Il s'étend de façon centrifuge et est indolore.", "cid": "c_lyme", "cl": "Voir cours Maladie de Lyme"},
        {"t": "Faux panaris d'Osler", "ok": true, "j": "Nodules douloureux et fugaces de la pulpe des doigts, causés par des complexes immuns ou micro-emboles septiques. Signe périphérique classique de l'endocardite.", "cid": "c_endo", "cl": "Revoir l'Endocardite"},
        {"t": "Signe de Koplik", "ok": false, "j": "Taches blanchâtres sur la muqueuse jugale, strictement pathognomoniques de la rougeole. Rien à voir avec l'endocardite."}
      ]
    },
    {
      "id": "q2",
      "type": "QRU",
      "tags": ["cardio"],
      "src": "ECN 2021 — Item 234",
      "q": "Quel traitement est formellement contre-indiqué en phase aiguë initiale d'un OAP cardiogénique ?",
      "opts": [
        {"t": "Furosémide IV", "ok": false, "j": "Au contraire, le furosémide IV est le traitement de 1ère intention. Il réduit rapidement la surcharge hydrosodée.", "cid": "c_ica", "cl": "Revoir l'ICA"},
        {"t": "Dérivés nitrés IV", "ok": false, "j": "Les dérivés nitrés sont indiqués en aigu pour réduire la précharge par vasodilatation veineuse."},
        {"t": "Bêtabloquants", "ok": true, "j": "Formellement contre-indiqués en phase aiguë : leur effet inotrope négatif risque d'aggraver la dysfonction ventriculaire et le bas débit.", "cid": "c_ica", "cl": "Revoir l'ICA"}
      ]
    },
    {
      "id": "q_rythmo_1",
      "type": "QRU",
      "tags": ["cardio", "rythmo"],
      "src": "Création Révision — Rythmologie",
      "q": "Parmi ces descriptions, laquelle correspond à l'aspect ECG caractéristique d'une Fibrillation Atriale (FA) ?",
      "opts": [
        {"t": "Ondes P régulières en dents de scie, à une fréquence d'environ 300/min", "ok": false, "j": "Cette description est celle du Flutter Atrial commun, et non de la FA."},
        {"t": "Absence d'ondes P, trémulation de la ligne de base et intervalle R-R irrégulier", "ok": true, "j": "C'est la définition exacte de la FA à l'ECG. L'activité atriale est anarchique (ondes f) et la transmission aux ventricules est irrégulière.", "cid": "c_fa", "cl": "Revoir la FA"},
        {"t": "Allongement progressif de l'espace PR suivi d'une onde P bloquée", "ok": false, "j": "Il s'agit d'un Bloc Auriculo-Ventriculaire (BAV) de 2ème degré type Wenckebach."}
      ]
    },
    {
      "id": "q3",
      "type": "QRU",
      "tags": ["dermato", "infectio"],
      "src": "ECN 2022 — Item 169",
      "q": "Quelle affirmation concernant la maladie de Lyme est exacte ?",
      "opts": [
        {"t": "La sérologie est indispensable au diagnostic de phase primaire", "ok": false, "j": "Faux. La sérologie est souvent faussement négative en phase primaire. L'érythème migrant suffit au diagnostic clinique.", "cid": "c_lyme", "cl": "Revoir la Maladie de Lyme"},
        {"t": "L'érythème migrant est douloureux et prurigineux", "ok": false, "j": "Faux. L'érythème migrant est typiquement indolore et non prurigineux. C'est un élément clé pour le différencier d'autres lésions."},
        {"t": "Le traitement de 1ère intention en phase primaire est l'amoxicilline", "ok": true, "j": "Exact. Amoxicilline 3 g/j × 14 j (ou doxycycline 200 mg/j). Traitement oral, pas besoin d'IV en phase primaire.", "cid": "c_lyme", "cl": "Revoir la Maladie de Lyme"}
      ]
    },
    {
      "id": "q4",
      "type": "QRU",
      "tags": ["dermato"],
      "src": "ECN 2020 — Item 299",
      "q": "Quelle forme de mélanome est emblée invasive et de pronostic défavorable ?",
      "opts": [
        {"t": "Mélanome superficiel extensif (SSM)", "ok": false, "j": "Le SSM est la forme la plus fréquente (70%). Il s'étend d'abord horizontalement, ce qui laisse du temps pour un diagnostic précoce.", "cid": "c_mel", "cl": "Revoir le Mélanome"},
        {"t": "Mélanome nodulaire", "ok": true, "j": "Le mélanome nodulaire croît emblée en profondeur (phase verticale immédiate). Il est souvent diagnostiqué à un stade avancé et son pronostic est défavorable.", "cid": "c_mel", "cl": "Revoir le Mélanome"},
        {"t": "Mélanome acrolentigineux", "ok": false, "j": "Le mélanome acrolentigineux est rare mais souvent diagnostiqué tard (zones peu visibles), pas emblée invasif comme le nodulaire."}
      ]
    }
  ]
};
