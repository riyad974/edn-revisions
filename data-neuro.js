// ══════════════════════════════════════════════════════════════════
//  data-neuro.js — 102 QCMs de Neurologie (Annales D1 S2)
//  Charge automatiquement après data.js
// ══════════════════════════════════════════════════════════════════

DATA_MEDECINE.MATS.neuro.desc = "AVC, neuropathies, SEP, Parkinson, Myasthénie, Épilepsie";

const NEURO_QCMS = [

  // ── SÉMIOLOGIE NEURO-VASCULAIRE ─────────────────────────────────

  {
    "id": "neuro_q1", "type": "QRU", "tags": ["neuro"],
    "src": "Sémiologie Neuro-Vasculaire",
    "q": "Le premier diagnostic à évoquer devant une paralysie du III douloureuse est :",
    "opts": [
      {"t": "Parésie du III d'origine diabétique", "ok": false},
      {"t": "Dissection carotidienne", "ok": false},
      {"t": "Anévrysme compressif de la terminaison carotidienne", "ok": true, "j": "Le III diabétique est un diagnostic d'élimination. L'urgence absolue est l'anévrisme compressif de la terminaison carotidienne."},
      {"t": "Crise myasthénique", "ok": false},
      {"t": "Maladie de Basedow", "ok": false}
    ]
  },
  {
    "id": "neuro_q2", "type": "QRU", "tags": ["neuro"],
    "src": "Sémiologie Neuro-Vasculaire",
    "q": "Le premier diagnostic à évoquer devant un signe de Claude-Bernard-Horner douloureux isolé est :",
    "opts": [
      {"t": "Syndrome de Wallenberg", "ok": false},
      {"t": "Cancer de l'apex pulmonaire", "ok": false},
      {"t": "Anévrysme termino-carotidien", "ok": false},
      {"t": "Tumeur oculaire", "ok": false},
      {"t": "Dissection carotidienne", "ok": true, "j": "Un CBH douloureux aigu = Dissection de l'artère carotide interne jusqu'à preuve du contraire."},
      {"t": "Algie vasculaire de la face", "ok": false}
    ]
  },
  {
    "id": "neuro_q7", "type": "QRM", "tags": ["neuro"],
    "src": "Sémiologie Neuro-Vasculaire",
    "q": "Un signe de Claude-Bernard-Horner :",
    "opts": [
      {"t": "Associe un myosis, un ptosis et une parésie de l'abduction de l'œil", "ok": false},
      {"t": "Associe un myosis, un ptosis et une énophtalmie", "ok": true, "j": "Le CBH est la paralysie des voies sympathiques homolatérales (de l'hypothalamus à l'œil). Il associe myosis + ptosis + énophtalmie."},
      {"t": "Est lié à l'atteinte du système nerveux sympathique homolatéral", "ok": true},
      {"t": "Est lié à l'atteinte du système nerveux sympathique controlatéral", "ok": false},
      {"t": "Peut se rencontrer en cas de tumeur de l'apex pulmonaire", "ok": true},
      {"t": "Peut se rencontrer en cas de syndrome de Wallenberg", "ok": true},
      {"t": "Peut se rencontrer en cas de dissection carotidienne", "ok": true}
    ]
  },

  // ── TOPOGRAPHIE LÉSIONNELLE ──────────────────────────────────────

  {
    "id": "neuro_q3", "type": "QRM", "tags": ["neuro"],
    "src": "Topographie Lésionnelle",
    "q": "Devant un déficit brutal de l'hémicorps droit associé à une aphasie chez un patient droitier, vous évoquez :",
    "opts": [
      {"t": "Infarctus cérébral vertébro-basilaire", "ok": false},
      {"t": "Infarctus cérébral sylvien droit (cérébrale moyenne)", "ok": false},
      {"t": "Infarctus cérébral sylvien gauche (cérébrale moyenne)", "ok": true, "j": "Déficit droit + aphasie = hémisphère gauche (dominant). L'installation brutale impose d'évoquer la cause ischémique (sylvien gauche) ET hémorragique (hématome fronto-pariétal gauche)."},
      {"t": "Infarctus cérébral dans le territoire de l'artère cérébrale postérieure gauche", "ok": false},
      {"t": "Infarctus cérébral dans le territoire de l'artère cérébrale postérieure droite", "ok": false},
      {"t": "Hématome cérébral fronto-pariétal gauche", "ok": true},
      {"t": "Hématome cérébral fronto-pariétal droit", "ok": false}
    ]
  },
  {
    "id": "neuro_q4", "type": "QRU", "tags": ["neuro"],
    "src": "Topographie Lésionnelle",
    "q": "Devant une cécité monoculaire droite brutale associée à un déficit brachio-facial gauche, vous évoquez :",
    "opts": [
      {"t": "Infarctus cérébral de l'artère cérébrale postérieure gauche", "ok": false},
      {"t": "Infarctus cérébral de l'artère cérébrale postérieure droite", "ok": false},
      {"t": "Infarctus cérébral du territoire carotidien droit", "ok": true, "j": "Syndrome optico-pyramidal : cécité monoculaire homolatérale à la lésion (artère ophtalmique droite) et déficit moteur controlatéral (sylvienne droite). Tout relève du territoire carotidien droit."},
      {"t": "Infarctus cérébral du territoire carotidien gauche", "ok": false},
      {"t": "Infarctus cérébraux des territoires carotidiens gauche et droit concomitants", "ok": false},
      {"t": "Hématome cérébral fronto-pariétal gauche", "ok": false},
      {"t": "Hématome cérébral fronto-pariétal droit", "ok": false}
    ]
  },
  {
    "id": "neuro_q5", "type": "QRU", "tags": ["neuro"],
    "src": "Topographie Lésionnelle",
    "q": "Devant une hémiparésie gauche épargnant la face associée à une parésie du III droit d'installation brutale, vous évoquez :",
    "opts": [
      {"t": "Infarctus cérébral vertébro-basilaire", "ok": true, "j": "Syndrome alterne de Weber (atteinte du pédoncule cérébral) : III homolatéral + hémiplégie controlatérale. Relève du territoire vertébro-basilaire."},
      {"t": "Infarctus cérébral sylvien droit (cérébrale moyenne)", "ok": false},
      {"t": "Infarctus cérébral sylvien gauche (cérébrale moyenne)", "ok": false},
      {"t": "Infarctus cérébral du territoire de l'artère cérébrale antérieure gauche", "ok": false},
      {"t": "Infarctus cérébral du territoire de l'artère cérébrale antérieure droite", "ok": false},
      {"t": "Infarctus cérébral du territoire de l'artère cérébrale postérieure gauche", "ok": false},
      {"t": "Infarctus cérébral du territoire de l'artère cérébrale postérieure droite", "ok": false}
    ]
  },

  // ── AVC ISCHÉMIQUES ──────────────────────────────────────────────

  {
    "id": "neuro_q6", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Une dissection carotidienne droite :",
    "opts": [
      {"t": "Peut être révélée par une parésie du III droit, douloureuse", "ok": false},
      {"t": "Peut être révélée par un signe de Claude-Bernard-Horner droit", "ok": true, "j": "La dissection donne un CBH par étirement du plexus péricarotidien. Le traitement est médical (antithrombotique) en USINV. Elle peut causer un infarctus par mécanisme thrombo-embolique ou hémodynamique."},
      {"t": "Peut être à l'origine d'un infarctus cérébral par un mécanisme thrombo-embolique", "ok": true},
      {"t": "Peut être à l'origine d'un infarctus cérébral par un mécanisme hémodynamique", "ok": true},
      {"t": "Nécessite une intervention chirurgicale en urgence", "ok": false},
      {"t": "Nécessite une hospitalisation en unité de soins intensifs neurovasculaires", "ok": true},
      {"t": "Nécessite l'introduction d'un traitement antithrombotique", "ok": true}
    ]
  },
  {
    "id": "neuro_q9", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Parmi les étiologies suivantes d'infarctus cérébral, quelles sont les trois plus fréquentes ?",
    "opts": [
      {"t": "ACFA (fibrillation atriale)", "ok": true, "j": "Le grand trio étiologique : Cardio-embolique (ACFA), Microangiopathie (lacunes liées aux FDRV), Macroangiopathie (athérome des troncs supra-aortiques)."},
      {"t": "Dissection artérielle", "ok": false},
      {"t": "Maladie des petites artères cérébrales liée aux FDRV", "ok": true},
      {"t": "Rétrécissement aortique calcifié", "ok": false},
      {"t": "Athérome des troncs supra-aortiques", "ok": true},
      {"t": "Infarctus du myocarde", "ok": false},
      {"t": "Drépanocytose", "ok": false}
    ]
  },
  {
    "id": "neuro_q10", "type": "QRU", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Un patient présente une hémiparésie gauche d'installation brutale survenue 1 h plus tôt. Le scanner cérébral réalisé en urgence est normal. Quelle affirmation est exacte ?",
    "opts": [
      {"t": "On évoque le diagnostic d'infarctus cérébral", "ok": true, "j": "Le scanner est typiquement normal à la première heure d'un AVC ischémique. Un hématome serait immédiatement visible (hyperdensité spontanée). L'ischémie n'est visible au scanner qu'après plusieurs heures."},
      {"t": "On évoque le diagnostic d'hématome cérébral", "ok": false},
      {"t": "On évoque le diagnostic d'aura migraineuse", "ok": false},
      {"t": "On évoque le diagnostic de trouble conversif", "ok": false},
      {"t": "Aucune réponse n'est exacte", "ok": false}
    ]
  },
  {
    "id": "neuro_q11", "type": "QRU", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Un patient est admis pour hémiplégie gauche d'installation brutale survenue 1 h plus tôt. Quel examen réalisez-vous en urgence ?",
    "opts": [
      {"t": "Une IRM cérébrale avec séquences de diffusion, T2*, Flair et ARM", "ok": true, "j": "L'IRM cérébrale multiséquences (Diffusion/T2*/FLAIR/ARM) est l'examen de premier choix en urgence pour l'AVC : elle détecte l'ischémie dès les premières minutes et exclut l'hémorragie."},
      {"t": "Une IRM cérébrale avec coupes coronales centrées sur les hippocampes", "ok": false},
      {"t": "Un scanner cérébral sans injection", "ok": false},
      {"t": "Un scanner cérébral avec injection", "ok": false},
      {"t": "Une artériographie cérébrale", "ok": false}
    ]
  },
  {
    "id": "neuro_q14", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "La thrombolyse intraveineuse pour un infarctus cérébral :",
    "opts": [
      {"t": "Peut être administrée jusqu'à 3 h après le début des symptômes", "ok": false},
      {"t": "Peut être administrée jusqu'à 4 h 30 après le début des symptômes", "ok": true, "j": "La fenêtre utile pour la thrombolyse IV (rtPA) est de 4h30 après début des symptômes. Un NIHSS élevé n'est pas une contre-indication. Elle expose à un risque hémorragique cérébral et systémique."},
      {"t": "Est à risque d'hémorragie cérébrale et systémique", "ok": true},
      {"t": "Est contre-indiquée en cas de score NIHSS > 10", "ok": false}
    ]
  },
  {
    "id": "neuro_q15", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Un patient de 59 ans, hypertendu, est admis pour un AIT survenu 10 heures plus tôt. L'IRM cérébrale est normale, l'ECG est en ACFA. Quelle(s) est(sont) la(les) proposition(s) exacte(s) ?",
    "opts": [
      {"t": "Hospitalisation en soins intensifs neurovasculaires", "ok": true, "j": "Tout AIT suspect nécessite une surveillance en USINV (risque de récidive précoce élevé). L'ACFA impose une anticoagulation efficace d'emblée en l'absence d'infarctus constitué à l'imagerie."},
      {"t": "Pas d'hospitalisation nécessaire", "ok": false},
      {"t": "Introduction d'un anti-agrégant plaquettaire", "ok": false},
      {"t": "Introduction d'une anticoagulation efficace", "ok": true},
      {"t": "Introduction d'une anticoagulation efficace et d'un anti-agrégant plaquettaire", "ok": false}
    ]
  },
  {
    "id": "neuro_q16", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Un patient de 59 ans, hypertendu et diabétique est hospitalisé pour un infarctus sylvien droit étendu, survenu 10 h plus tôt. L'ECG est en ACFA. Quelle(s) est(sont) la(les) proposition(s) exacte(s) ?",
    "opts": [
      {"t": "Introduction d'un traitement par Aspégic®", "ok": true, "j": "Devant un infarctus constitué étendu, l'anticoagulation curative immédiate est contre-indiquée (risque de transformation hémorragique). On associe antiagrégant (Aspirine) + héparine à dose préventive."},
      {"t": "Introduction d'une anticoagulation efficace", "ok": false},
      {"t": "Introduction d'une anticoagulation préventive", "ok": true},
      {"t": "Thrombolyse intraveineuse", "ok": false}
    ]
  },
  {
    "id": "neuro_q17", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Ischémiques",
    "q": "Le traitement d'une sténose à 80 % de l'artère carotide interne symptomatique repose sur :",
    "opts": [
      {"t": "Aspirine à dose anti-agrégante", "ok": true, "j": "Sténose carotidienne symptomatique > 70% = Endartériectomie chirurgicale rapide (< 15j) + traitement médical : Antiagrégant + Statine + contrôle des FDRV. L'anticoagulation n'est pas indiquée."},
      {"t": "Anticoagulation efficace", "ok": false},
      {"t": "Endartériectomie carotidienne", "ok": true},
      {"t": "Statine", "ok": true}
    ]
  },

  // ── THROMBOSES VEINEUSES CÉRÉBRALES ─────────────────────────────

  {
    "id": "neuro_q18", "type": "QRM", "tags": ["neuro"],
    "src": "Thromboses Veineuses Cérébrales",
    "q": "Une thrombose veineuse cérébrale peut se compliquer de :",
    "opts": [
      {"t": "Un déficit neurologique focal", "ok": true, "j": "La TVC bloque le retour veineux, entraînant un œdème cérébral, une HTIC, des infarctus veineux potentiellement hémorragiques et des crises d'épilepsie fréquentes."},
      {"t": "Crises convulsives", "ok": true},
      {"t": "Hémorragie cérébrale", "ok": true},
      {"t": "Hypertension intracrânienne", "ok": true}
    ]
  },
  {
    "id": "neuro_q19", "type": "QRU", "tags": ["neuro"],
    "src": "Thromboses Veineuses Cérébrales",
    "q": "Le traitement de la thrombose veineuse cérébrale repose sur :",
    "opts": [
      {"t": "L'aspirine à dose anti-agrégante", "ok": false},
      {"t": "Une anticoagulation efficace par héparine, sauf en cas de lésion hémorragique", "ok": false},
      {"t": "Une anticoagulation efficace par héparine, MÊME en cas de lésion hémorragique", "ok": true, "j": "Règle d'or absolue : Anticoagulation curative par héparine indispensable, MÊME s'il y a un remaniement hémorragique de l'infarctus veineux. C'est une exception à la règle habituelle."},
      {"t": "Une thrombolyse intraveineuse", "ok": false},
      {"t": "La pose d'un filtre cave", "ok": false}
    ]
  },
  {
    "id": "neuro_q20", "type": "QRM", "tags": ["neuro"],
    "src": "Thromboses Veineuses Cérébrales",
    "q": "Parmi les pathologies suivantes, laquelle(lesquelles) peut(peuvent) se compliquer de thrombose veineuse cérébrale ?",
    "opts": [
      {"t": "Syndrome des antiphospholipides", "ok": true, "j": "La TVC est favorisée par les états prothrombotiques (SAPL, Facteur V Leiden), les infections de voisinage (mastoïdite) et les maladies inflammatoires (Behçet). L'infarctus cérébral n'est pas une cause de TVC."},
      {"t": "Mastoïdite", "ok": true},
      {"t": "Maladie de Behçet", "ok": true},
      {"t": "Infarctus cérébral", "ok": false},
      {"t": "Mutation homozygote du facteur V de la coagulation", "ok": true}
    ]
  },

  // ── AVC HÉMORRAGIQUES ────────────────────────────────────────────

  {
    "id": "neuro_q8", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "La maladie des petites artères cérébrales :",
    "opts": [
      {"t": "Est une pathologie rare", "ok": false},
      {"t": "Peut se révéler par un infarctus lacunaire", "ok": true, "j": "La lipohyalinose des petites artères perforantes est induite par l'HTA et l'âge. Elle cause des lacunes ischémiques OU des hématomes profonds (noyaux gris, tronc, cervelet)."},
      {"t": "Est caractérisée par l'atteinte des artères perforantes cérébrales", "ok": true},
      {"t": "Peut se révéler par un hématome cérébral", "ok": true},
      {"t": "Est souvent liée aux facteurs de risque vasculaires", "ok": true}
    ]
  },
  {
    "id": "neuro_q12", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Un hématome cérébral est caractérisé à l'imagerie par :",
    "opts": [
      {"t": "Une hypodensité sur le scanner cérébral", "ok": false},
      {"t": "Une hyperdensité spontanée sur le scanner cérébral", "ok": true, "j": "Le sang frais est spontanément blanc (hyperdense) au scanner et apparaît en noir/hyposignal franc sur la séquence IRM T2* / EG (artefact de susceptibilité magnétique)."},
      {"t": "Un hyposignal à l'IRM sur la séquence T2* (ou écho de gradient)", "ok": true},
      {"t": "Un hypersignal à l'IRM sur la séquence T2* (ou écho de gradient)", "ok": false}
    ]
  },
  {
    "id": "neuro_q13", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Parmi les pathologies suivantes, lesquelles peuvent être à l'origine d'un hématome cérébral ?",
    "opts": [
      {"t": "Endocardite infectieuse", "ok": true, "j": "Toutes ces causes peuvent générer un hématome. L'angiopathie amyloïde donne typiquement des hématomes lobaires récidivants chez le sujet âgé. Le méningiome (bénin, extra-axial) ne saigne pratiquement pas en intraparenchymateux."},
      {"t": "Malformation artérioveineuse cérébrale", "ok": true},
      {"t": "Maladie des petites artères cérébrales liée aux FDRV", "ok": true},
      {"t": "Thrombophlébite cérébrale", "ok": true},
      {"t": "Tumeur cérébrale", "ok": true},
      {"t": "Angiopathie amyloïde", "ok": true}
    ]
  },
  {
    "id": "neuro_q21", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Imagerie et hématome cérébral : quelle(s) affirmation(s) est(sont) exacte(s) ?",
    "opts": [
      {"t": "Un hématome cérébral est caractérisé par une hypodensité spontanée au scanner sans injection", "ok": false},
      {"t": "Un hématome cérébral est caractérisé par une hyperdensité spontanée au scanner sans injection", "ok": true, "j": "Scanner sans injection = hyperdensité spontanée immédiate. IRM T2* / EG / SWI = séquence reine pour le sang (hyposignal en trou noir)."},
      {"t": "La séquence de diffusion est la séquence de choix en IRM pour visualiser un saignement", "ok": false},
      {"t": "La séquence Flair est la séquence de choix en IRM pour visualiser un saignement", "ok": false},
      {"t": "La séquence T2* (ou écho de gradient) est la séquence de choix en IRM pour visualiser un saignement", "ok": true}
    ]
  },
  {
    "id": "neuro_q22", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Quel(s) argument(s) est(sont) en faveur d'une origine hypertensive devant un hématome cérébral ?",
    "opts": [
      {"t": "La survenue chez un sujet de moins de 50 ans", "ok": false},
      {"t": "La topographie profonde (noyaux gris centraux, tronc, cervelet)", "ok": true, "j": "L'HTA touche préférentiellement les petites artères perforantes profondes. La topographie lobaire oriente plutôt vers une angiopathie amyloïde (sujet âgé) ou une malformation vasculaire."},
      {"t": "La topographie lobaire (ou périphérique)", "ok": false},
      {"t": "La présence d'une HTA ancienne", "ok": true},
      {"t": "L'absence de leucopathie vasculaire (ou leucoaraïose)", "ok": false}
    ]
  },
  {
    "id": "neuro_q23", "type": "QRU", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Concernant le bilan étiologique radiologique d'un hématome cérébral, quelle affirmation est exacte ?",
    "opts": [
      {"t": "Un scanner cérébral est suffisant dans la majorité des cas", "ok": false},
      {"t": "Une IRM cérébrale doit être systématiquement réalisée", "ok": true, "j": "L'IRM est systématique à distance ou en phase subaiguë pour éliminer une cause sous-jacente (tumeur, malformation cryptique, cavernome). L'artériographie est discutée chez le jeune sans cause retrouvée."},
      {"t": "Une artériographie doit être systématiquement réalisée", "ok": false},
      {"t": "L'artériographie doit être proscrite", "ok": false}
    ]
  },
  {
    "id": "neuro_q24", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Parmi les pathologies suivantes, lesquelles peuvent se révéler par un hématome cérébral ?",
    "opts": [
      {"t": "Thrombose veineuse cérébrale", "ok": true, "j": "Le méningiome est une tumeur bénigne extra-axiale qui ne saigne pratiquement jamais sous forme d'hématome intraparenchymateux. Toutes les autres peuvent être à l'origine d'un hématome."},
      {"t": "Hypertension artérielle", "ok": true},
      {"t": "Endocardite infectieuse", "ok": true},
      {"t": "Tumeur cérébrale", "ok": true},
      {"t": "Méningiome", "ok": false}
    ]
  },
  {
    "id": "neuro_q25", "type": "QRM", "tags": ["neuro"],
    "src": "AVC Hémorragiques",
    "q": "Le traitement d'une hémorragie cérébrale intraparenchymateuse repose sur :",
    "opts": [
      {"t": "Une évacuation chirurgicale systématique", "ok": false},
      {"t": "Le contrôle strict de la pression artérielle (PAS < 140 mmHg)", "ok": true, "j": "L'évacuation chirurgicale est rare et non systématique (discutée si hématome cérébelleux menaçant ou lobaire superficiel avec aggravation). La prise en charge médicale en USINV avec contrôle tensionnel est la règle."},
      {"t": "Le traitement de la cause", "ok": true},
      {"t": "Une prise en charge initiale en unité de soins intensifs neurovasculaires (USINV)", "ok": true}
    ]
  },

  // ── HÉMORRAGIE MÉNINGÉE (HSA) ────────────────────────────────────

  {
    "id": "neuro_q26", "type": "QRM", "tags": ["neuro"],
    "src": "Hémorragie Méningée (HSA)",
    "q": "Une hémorragie méningée (HM) ou sous-arachnoïdienne :",
    "opts": [
      {"t": "Est liée à une rupture d'anévrysme cérébral le plus souvent", "ok": true, "j": "L'HSA non traumatique est due à 85% à une rupture d'anévrisme. C'est une urgence absolue au pronostic redoutable (30% de mortalité subite). Elle est moins fréquente que l'hématome intraparenchymateux."},
      {"t": "Occasionne fréquemment un décès précoce", "ok": true},
      {"t": "Est aussi fréquente qu'un infarctus cérébral", "ok": false},
      {"t": "Est moins fréquente qu'un hématome cérébral intraparenchymateux", "ok": true}
    ]
  },
  {
    "id": "neuro_q27", "type": "QRU", "tags": ["neuro"],
    "src": "Hémorragie Méningée (HSA)",
    "q": "Concernant la prise en charge initiale de l'HSA, quelle affirmation est exacte ?",
    "opts": [
      {"t": "Le scanner cérébral sans injection élimine formellement le diagnostic s'il est normal", "ok": false},
      {"t": "L'exclusion de l'anévrysme (coiling ou clipping) doit être réalisée en urgence", "ok": true, "j": "L'urgence absolue est de sécuriser l'anévrisme pour éviter le resaignement précoce (risque maximal dans les premières 24h). Le scanner peut être faussement négatif (sensibilité décroissante avec le temps : 98% à H6, 50% à J5)."},
      {"t": "La ponction lombaire est le premier examen à réaliser", "ok": false},
      {"t": "Le repos au calme et le contrôle tensionnel sont secondaires", "ok": false}
    ]
  },
  {
    "id": "neuro_q28", "type": "QRM", "tags": ["neuro"],
    "src": "Hémorragie Méningée (HSA)",
    "q": "À propos du vasospasme cérébral, complication classique de l'HSA :",
    "opts": [
      {"t": "Il survient immédiatement au cours des 24 premières heures", "ok": false},
      {"t": "Son traitement préventif repose sur l'introduction d'un antiagrégant", "ok": false},
      {"t": "Il survient de façon retardée, classiquement entre le 4ème et le 14ème jour", "ok": true, "j": "Le vasospasme est une complication tardive majeure induite par les produits de dégradation du sang. On le prévient par la Nimodipine (inhibiteur calcique). Il peut causer des infarctus cérébraux différés (ischémie retardée)."},
      {"t": "Il peut être responsable d'infarctus cérébraux différés (ischémie retardée)", "ok": true}
    ]
  },

  // ── CÉPHALÉES & ALGIES ───────────────────────────────────────────

  {
    "id": "neuro_q29", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Une crise migraineuse :",
    "opts": [
      {"t": "Est peu douloureuse le plus souvent", "ok": false},
      {"t": "Peut s'accompagner de vomissements", "ok": true, "j": "La crise migraineuse est typiquement modérée à sévère. Non traitée, elle dure de 4 à 72 heures. Les vomissements et la photophobie sont classiques. Le CBH oriente vers une algie vasculaire de la face."},
      {"t": "Peut s'accompagner d'un signe de Claude-Bernard-Horner", "ok": false},
      {"t": "Dure maximum 24 h", "ok": false},
      {"t": "Peut être déclenchée par certains aliments", "ok": true}
    ]
  },
  {
    "id": "neuro_q30", "type": "QRU", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Devant un premier épisode de céphalée intense (EVA 8/10), unilatérale, pulsatile, non fébrile, accompagnée de vomissements chez une patiente de 25 ans, de survenue progressive :",
    "opts": [
      {"t": "Le diagnostic de première crise migraineuse peut être retenu", "ok": false},
      {"t": "Une surveillance clinique est suffisante", "ok": false},
      {"t": "Une imagerie cérébrale doit être réalisée", "ok": true, "j": "Une céphalée inhabituelle et inaugurale, même à sémiologie évocatrice de migraine, doit faire éliminer une céphalée secondaire et nécessite un bilan complet. C'est la répétition de > 5 crises qui permet de poser le diagnostic de migraine."},
      {"t": "Un triptan doit être donné immédiatement pour soulager rapidement", "ok": false},
      {"t": "La normalité d'un scanner cérébral sans injection permet de retenir le diagnostic de crise migraineuse", "ok": false}
    ]
  },
  {
    "id": "neuro_q31", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Les principaux traitements de la crise migraineuse sont :",
    "opts": [
      {"t": "Les triptans", "ok": true, "j": "Les triptans et les AINS sont les piliers thérapeutiques de la crise. Les β-bloquants constituent un traitement de fond de la maladie migraineuse (prophylaxie) mais ne traitent pas la crise aiguë."},
      {"t": "Les corticoïdes", "ok": false},
      {"t": "Les β-bloquants", "ok": false},
      {"t": "L'oxygénothérapie", "ok": false},
      {"t": "Les AINS", "ok": true}
    ]
  },
  {
    "id": "neuro_q32", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Un syndrome d'hypertension intracrânienne peut être lié à :",
    "opts": [
      {"t": "Une tumeur cérébrale", "ok": true, "j": "Toutes ces pathologies peuvent causer une HTIC, soit par effet de masse direct, soit par blocage des voies de résorption/circulation du LCS ou du retour veineux (TVC)."},
      {"t": "Une hydrocéphalie aiguë", "ok": true},
      {"t": "Une thrombose veineuse cérébrale", "ok": true},
      {"t": "Une méningite bactérienne", "ok": true}
    ]
  },
  {
    "id": "neuro_q33", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Un syndrome post-ponction lombaire (hypotension du LCS) :",
    "opts": [
      {"t": "Se caractérise par des céphalées matinales, soulagées par des vomissements en jet", "ok": false},
      {"t": "Se caractérise par des céphalées survenant à l'orthostatisme", "ok": true, "j": "Complication fréquente et invalidante. Les céphalées sont orthostatiques (debout) et soulagées par le décubitus. Un 'blood patch' est parfois nécessaire. L'utilisation d'aiguilles fines atraumatiques réduit la survenue."},
      {"t": "Est plus fréquent si on utilise une aiguille de gros diamètre", "ok": true},
      {"t": "Se traite par le repos en position allongée", "ok": true},
      {"t": "Est une complication rarissime", "ok": false}
    ]
  },
  {
    "id": "neuro_q34", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "L'algie vasculaire de la face :",
    "opts": [
      {"t": "Touche principalement les hommes de la cinquantaine", "ok": false},
      {"t": "Une crise se traite par triptan sous-cutané", "ok": true, "j": "Le traitement de crise de référence est le sumatriptan SC ou l'oxygénothérapie à haut débit. Le traitement de fond repose sur le vérapamil (inhibiteur calcique), et non les bêtabloquants."},
      {"t": "Peut s'accompagner de signes végétatifs (larmoiement, rhinorrhée…)", "ok": true},
      {"t": "Peut s'accompagner d'un signe de Claude-Bernard-Horner", "ok": true},
      {"t": "Le traitement de fond repose sur les β-bloquants", "ok": false}
    ]
  },
  {
    "id": "neuro_q35", "type": "QRU", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "La névralgie essentielle du trijumeau :",
    "opts": [
      {"t": "Est une pathologie de la femme jeune", "ok": false},
      {"t": "Touche le plus souvent les territoires V1, V2 et V3 du nerf trijumeau", "ok": false},
      {"t": "S'accompagne d'une abolition du réflexe cornéen", "ok": false},
      {"t": "S'accompagne d'une hypoesthésie dans le territoire du trijumeau", "ok": false},
      {"t": "Est une douleur à type de décharge électrique", "ok": true, "j": "L'examen clinique neurologique doit être strictement NORMAL en cas de névralgie essentielle du trijumeau. Toute anomalie sensitive ou du réflexe cornéen doit faire rechercher une cause secondaire (SEP, tumeur de la fosse postérieure)."}
    ]
  },
  {
    "id": "neuro_q36", "type": "QRM", "tags": ["neuro"],
    "src": "Céphalées & Algies",
    "q": "Lors d'une crise d'algie vasculaire de la face à droite, vous pouvez observer :",
    "opts": [
      {"t": "Un larmoiement droit", "ok": true, "j": "La crise d'AVF s'accompagne de signes dysautonomiques crâniens homolatéraux à la douleur (larmoiement, injection conjonctivale, CBH homolatéral). Il n'y a pas de déficit sensitif ni oculomoteur."},
      {"t": "Une paralysie du VI droit", "ok": false},
      {"t": "Une injection conjonctivale droite", "ok": true},
      {"t": "Une hypoesthésie du territoire V1 à droite", "ok": false},
      {"t": "Un signe de Claude-Bernard-Horner droit", "ok": true}
    ]
  },

  // ── NEUROPATHIES PÉRIPHÉRIQUES ───────────────────────────────────

  {
    "id": "neuro_q37", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Devant un déficit sensitivo-moteur ascendant évoluant sur quelques jours, touchant actuellement les quatre membres, les diagnostics à évoquer sont :",
    "opts": [
      {"t": "Une crise myasthénique", "ok": false},
      {"t": "Une myélite cervicale", "ok": true, "j": "L'installation en quelques jours (profil aigu/subaigu). La crise myasthénique n'a pas de troubles sensitifs. La SLA présente une évolution très chronique sur mois/années."},
      {"t": "Une sclérose latérale amyotrophique", "ok": false},
      {"t": "Une polyradiculonévrite aiguë (Guillain-Barré)", "ok": true},
      {"t": "Une compression médullaire cervicale", "ok": true}
    ]
  },
  {
    "id": "neuro_q38", "type": "QRU", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Une polyneuropathie se caractérise par :",
    "opts": [
      {"t": "L'atteinte asymétrique et asynchrone de plusieurs troncs nerveux", "ok": false},
      {"t": "Une atteinte sensitive bilatérale et symétrique débutant aux pieds, lentement évolutive", "ok": true, "j": "La polyneuropathie se définit par une atteinte synchrone, symétrique, bilatérale et longueur-dépendante (débutant aux extrémités des membres inférieurs). L'atteinte asymétrique asynchrone définit la mononeuropathie multiple (multinévrite)."},
      {"t": "Une atteinte sensitivo-motrice ascendante d'évolution rapide", "ok": false},
      {"t": "Une atteinte pluriradiculaire asymétrique", "ok": false}
    ]
  },
  {
    "id": "neuro_q39", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Quelles causes peuvent être à l'origine d'une polyneuropathie ?",
    "opts": [
      {"t": "Amylose", "ok": true, "j": "Toutes ces propositions sont des causes classiques de polyneuropathie axonale systémique. Le diabète et l'alcoolisme chronique sont les plus représentés en pratique clinique."},
      {"t": "Diabète", "ok": true},
      {"t": "Alcool", "ok": true},
      {"t": "Toxiques", "ok": true}
    ]
  },
  {
    "id": "neuro_q40", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Les deux principaux diagnostics à évoquer devant une méningoradiculite sont :",
    "opts": [
      {"t": "Diabète", "ok": false},
      {"t": "Maladie de Lyme", "ok": true, "j": "La méningoradiculite associe des signes radiculaires et une pléiocytose dans le LCS. Les deux pistes majeures sont la borréliose de Lyme (neuroborréliose) et l'infiltration maligne (méningite carcinomateuse)."},
      {"t": "Méningite carcinomateuse", "ok": true},
      {"t": "Alcool", "ok": false},
      {"t": "Amylose", "ok": false}
    ]
  },
  {
    "id": "neuro_q41", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Devant un déficit moteur des releveurs du pied et du gros orteil droit, le(s) diagnostic(s) à évoquer est(sont) :",
    "opts": [
      {"t": "Une atteinte du nerf sciatique poplité externe (ou fibulaire)", "ok": true, "j": "Le déficit des releveurs (steppage) correspond au territoire moteur du nerf fibulaire commun (SPE) ou de la racine L5. Le SPI/S1 correspond à l'extension plantaire (marche sur les orteils)."},
      {"t": "Une atteinte du nerf sciatique poplité interne", "ok": false},
      {"t": "Une atteinte radiculaire L5", "ok": true},
      {"t": "Une atteinte radiculaire L4", "ok": false}
    ]
  },
  {
    "id": "neuro_q42", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Un patient présente une ataxie proprioceptive des quatre membres (marche talonnante, signe de Romberg positif non latéralisé à la fermeture des yeux, hypopallesthésie). Vous évoquez :",
    "opts": [
      {"t": "Une lésion cérébelleuse bilatérale", "ok": false},
      {"t": "Une atteinte du système nerveux périphérique, prédominant sur les grosses fibres myélinisées", "ok": true, "j": "L'ataxie proprioceptive avec signe de Romberg sensible à l'occlusion des yeux cible les voies sensitives profondes : grosses fibres myélinisées du SNP ou cordons postérieurs de la moelle cervicale."},
      {"t": "Une atteinte du système nerveux périphérique, prédominant sur les petites fibres non myélinisées", "ok": false},
      {"t": "Une atteinte médullaire cervicale, cordonale postérieure", "ok": true},
      {"t": "Une atteinte médullaire cervicale, touchant les cordons latéraux", "ok": false}
    ]
  },
  {
    "id": "neuro_q43", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Une neuropathie démyélinisante peut montrer le(s) anomalie(s) suivante(s) à l'ENMG :",
    "opts": [
      {"t": "Diminution de l'amplitude des potentiels d'action", "ok": false},
      {"t": "Allongement des latences distales", "ok": true, "j": "Les anomalies de conduction (vitesse, latence, blocs) traduisent une atteinte de la gaine de myéline. La diminution d'amplitude (A) signe une perte axonale."},
      {"t": "Diminution des vitesses de conduction", "ok": true},
      {"t": "Présence de blocs de conduction", "ok": true}
    ]
  },
  {
    "id": "neuro_q44", "type": "QRM", "tags": ["neuro"],
    "src": "Neuropathies Périphériques",
    "q": "Une patiente se présente avec un déficit moteur de l'extension des doigts et du poignet de la main gauche. Vous évoquez :",
    "opts": [
      {"t": "Une atteinte du nerf radial", "ok": true, "j": "Le déficit des extenseurs du poignet et des doigts engendre une 'main tombante' caractéristique d'une atteinte du nerf radial ou de la racine C7."},
      {"t": "Une atteinte du nerf médian", "ok": false},
      {"t": "Une atteinte du nerf ulnaire", "ok": false},
      {"t": "Une atteinte radiculaire C5", "ok": false},
      {"t": "Une atteinte radiculaire C6", "ok": false},
      {"t": "Une atteinte radiculaire C7", "ok": true}
    ]
  },

  // ── DYSAUTONOMIE & DOULEURS NEUROPATHIQUES ───────────────────────

  {
    "id": "neuro_q45", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Parmi les manifestations suivantes, lesquelles sont évocatrices de dysautonomie ?",
    "opts": [
      {"t": "Hypotension orthostatique avec accélération compensatrice de la fréquence cardiaque", "ok": false},
      {"t": "Hypotension orthostatique SANS accélération compensatrice de la fréquence cardiaque", "ok": true, "j": "Dans la dysautonomie, le système cardiaque ne peut pas compenser la chute tensionnelle orthostatique par une tachycardie (fixité du rythme). Les troubles génito-sphinctériens et de la sudation complètent le tableau."},
      {"t": "Impuissance", "ok": true},
      {"t": "Anhydrose", "ok": true},
      {"t": "Incontinence urinaire", "ok": true}
    ]
  },
  {
    "id": "neuro_q46", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Un patient présente depuis 3 jours une atteinte douloureuse du nerf SPE gauche, puis du nerf médian droit depuis ce matin. Quelle(s) est(sont) la(les) réponse(s) exacte(s) ?",
    "opts": [
      {"t": "Il s'agit d'une méningoradiculite", "ok": false},
      {"t": "Il s'agit d'une mononeuropathie multiple (ou multinévrite)", "ok": true, "j": "L'atteinte asymétrique, asynchrone et douloureuse de plusieurs troncs nerveux distants définit une mononeuropathie multiple. Devant ce profil hyperalgique, l'urgence est de suspecter une vascularite systémique."},
      {"t": "Il s'agit d'une polyneuropathie", "ok": false},
      {"t": "On suspecte une maladie de Lyme", "ok": false},
      {"t": "On suspecte une vascularite", "ok": true}
    ]
  },
  {
    "id": "neuro_q47", "type": "QRU", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Une patiente consulte pour des paresthésies nocturnes des trois premiers doigts de la main gauche. Quel argument ENMG est en faveur d'un syndrome du canal carpien ?",
    "opts": [
      {"t": "Raccourcissement des latences distales du nerf médian", "ok": false},
      {"t": "Raccourcissement des latences distales du nerf radial", "ok": false},
      {"t": "Ralentissement des vitesses de conduction du nerf médian", "ok": true, "j": "Le syndrome du canal carpien correspond à une souffrance compressive focale du nerf médian au poignet, induisant un RALENTISSEMENT de sa conduction locale à l'ENMG (allongement des latences distales)."},
      {"t": "Ralentissement des vitesses de conduction du nerf radial", "ok": false}
    ]
  },
  {
    "id": "neuro_q48", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Le(s) signe(s) de gravité à rechercher devant un syndrome du canal carpien est(sont) :",
    "opts": [
      {"t": "La présence d'une amyotrophie de l'éminence thénar", "ok": true, "j": "Les critères de gravité sont l'apparition de signes moteurs axoniaux définitifs : amyotrophie de la loge thénar externe (muscles de l'opposant et court abducteur) et perte de force de l'opposant du pouce."},
      {"t": "La présence d'une amyotrophie de l'éminence hypothénar", "ok": false},
      {"t": "La présence d'un déficit moteur de l'opposant du pouce", "ok": true},
      {"t": "La présence d'un déficit moteur du fléchisseur du pouce", "ok": false}
    ]
  },
  {
    "id": "neuro_q49", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Un patient consulte pour des brûlures progressives ressenties lors du contact des draps sur ses pieds. Quelle(s) est(sont) la(les) réponse(s) exacte(s) ?",
    "opts": [
      {"t": "Il peut s'agir d'une polyneuropathie diabétique", "ok": true, "j": "Le contact superficiel des draps déclenchant une sensation de brûlure douloureuse est une allodynie mécanique. C'est typique de douleurs neuropathiques liées à une atteinte des petites fibres (comme dans le diabète)."},
      {"t": "Il s'agit d'une allodynie", "ok": true},
      {"t": "Il s'agit d'une hyperpathie", "ok": false},
      {"t": "Il s'agit de douleurs par excès de nociception", "ok": false},
      {"t": "Il s'agit de douleurs neuropathiques", "ok": true}
    ]
  },
  {
    "id": "neuro_q50", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Quel(s) traitement(s) est(sont) indiqué(s) en cas de douleurs neuropathiques invalidantes ?",
    "opts": [
      {"t": "Anti-inflammatoires non stéroïdiens", "ok": false},
      {"t": "Corticoïdes", "ok": false},
      {"t": "Anti-épileptiques (gabapentine, prégabaline)", "ok": true, "j": "Les paliers antalgiques classiques et AINS sont inefficaces sur les douleurs neuropathiques. Le traitement de première ligne repose sur les modulateurs neuronaux : anti-épileptiques (gabapentine, prégabaline) ou antidépresseurs (tricycliques ou inhibiteurs mixtes)."},
      {"t": "Antidépresseurs", "ok": true},
      {"t": "Morphiniques", "ok": false}
    ]
  },
  {
    "id": "neuro_q51", "type": "QRM", "tags": ["neuro"],
    "src": "Dysautonomie & Douleurs Neuropathiques",
    "q": "Des douleurs et paresthésies des deux derniers doigts de la main droite chez une femme de 50 ans sont compatibles avec :",
    "opts": [
      {"t": "Un syndrome du canal carpien droit", "ok": false},
      {"t": "Une névralgie cervico-brachiale C8-D1 droite", "ok": true, "j": "Les deux derniers doigts (4e et 5e) correspondent au territoire du nerf ulnaire (cubital) compressé au coude, ou à la racine C8-D1. Le canal carpien concerne les 3 premiers doigts (territoire médian)."},
      {"t": "Une névralgie cervico-brachiale C6 droite", "ok": false},
      {"t": "Une compression du nerf cubital droit au coude", "ok": true},
      {"t": "Un syndrome de la loge de Guyon", "ok": false}
    ]
  },

  // ── MALADIE DE PARKINSON ─────────────────────────────────────────

  {
    "id": "neuro_q52", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "La maladie de Parkinson idiopathique :",
    "opts": [
      {"t": "Est une maladie auto-immune", "ok": false},
      {"t": "Est caractérisée par une évolution par poussées", "ok": false},
      {"t": "Est caractérisée par une dégénérescence des neurones dopaminergiques de la substance noire", "ok": true, "j": "La MPI est une affection neurodégénérative chronique (progression lente, non par poussées, non auto-immune) caractérisée par la perte des neurones dopaminergiques de la pars compacta de la substance noire. C'est l'étiologie principale des syndromes parkinsoniens."},
      {"t": "Est caractérisée par une accumulation de protéine β-amyloïde", "ok": false},
      {"t": "Est la première cause de syndrome parkinsonien", "ok": true}
    ]
  },
  {
    "id": "neuro_q53", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Parmi les signes cliniques suivants, lesquels sont évocateurs d'une maladie de Parkinson idiopathique à la phase initiale ?",
    "opts": [
      {"t": "Ataxie des membres, asymétrique", "ok": false},
      {"t": "Akinésie des membres, asymétrique", "ok": true, "j": "À la phase initiale : triade parkinsonienne asymétrique (akinésie/bradykinésie, rigidité plastique en roue dentée sensibilisée par la manœuvre de Froment, micrographie, marche à petits pas). Les signes dysautonomiques lourds précoces orientent vers un syndrome parkinsonien atypique."},
      {"t": "Apraxie", "ok": false},
      {"t": "Marche à petits pas", "ok": true},
      {"t": "Marche talonnante", "ok": false},
      {"t": "Marche avec élargissement du polygone de sustentation", "ok": false},
      {"t": "Micrographie", "ok": true},
      {"t": "Hypotonie à la manœuvre de Stewart-Holmes", "ok": false},
      {"t": "Hypertonie en roue dentée majorée par la manœuvre de Froment", "ok": true},
      {"t": "Troubles de la déglutition aux liquides", "ok": false},
      {"t": "Hypotension orthostatique", "ok": false},
      {"t": "Troubles cognitifs", "ok": false},
      {"t": "Dysurie", "ok": false}
    ]
  },
  {
    "id": "neuro_q54", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Le tremblement de la maladie de Parkinson :",
    "opts": [
      {"t": "Est un tremblement prédominant au repos", "ok": true, "j": "Le tremblement parkinsonien est typiquement de repos, lent (4-6 Hz), asymétrique, touchant préférentiellement les extrémités des membres supérieurs ('comptage de monnaie'). Il respecte le chef (contrairement au tremblement essentiel) et est majoré par le stress."},
      {"t": "Est un tremblement prédominant lors des mouvements", "ok": false},
      {"t": "Est symétrique", "ok": false},
      {"t": "Est asymétrique", "ok": true},
      {"t": "Touche le chef", "ok": false},
      {"t": "Est diminué par le stress", "ok": false},
      {"t": "Est un tremblement lent", "ok": true}
    ]
  },
  {
    "id": "neuro_q55", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Votre patient suivi pour une MPI sous L-dopa consulte pour des dyskinésies de milieu de dose. Quelle(s) proposition(s) peut(peuvent) améliorer la situation ?",
    "opts": [
      {"t": "Majoration de la posologie de L-dopa", "ok": false},
      {"t": "Ajout d'agonistes dopaminergiques", "ok": false},
      {"t": "Diminution de la posologie de L-dopa", "ok": true, "j": "Les dyskinésies de milieu de dose correspondent à des pics de concentration dopaminergique trop élevés. On réduit la dose unitaire de L-dopa tout en augmentant la fréquence des prises (fractionnement) pour lisser la concentration plasmatique."},
      {"t": "Fractionnement des prises", "ok": true},
      {"t": "Arrêt du traitement", "ok": false}
    ]
  },
  {
    "id": "neuro_q56", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Quelle(s) mesure(s) thérapeutique(s) proposer à un patient sous L-dopa (4 prises/jour) devant l'apparition d'une akinésie de fin de doses ?",
    "opts": [
      {"t": "Ajout d'agonistes dopaminergiques", "ok": true, "j": "L'akinésie de fin de dose traduit l'épuisement de l'effet avant la prise suivante (fluctuation motrice). On peut fractionner les prises, ajouter un agoniste dopaminergique (action prolongée), ou associer un ICOMT (entacapone) pour prolonger la demi-vie de la L-dopa."},
      {"t": "Diminution de la posologie de L-dopa", "ok": false},
      {"t": "Fractionnement des prises", "ok": true},
      {"t": "Arrêt du traitement", "ok": false},
      {"t": "Ajout d'un ICOMT (inhibiteur de la catéchol-O-méthyltransférase)", "ok": true}
    ]
  },
  {
    "id": "neuro_q57", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Parmi les pathologies suivantes, lesquelles peuvent se révéler par un syndrome parkinsonien ?",
    "opts": [
      {"t": "Maladie d'Alzheimer", "ok": false},
      {"t": "Maladie de Wilson", "ok": true, "j": "Les syndromes Parkinson-plus (AMS, PSP, DCL), la maladie de Wilson (sujet jeune, cuivre), et la maladie de Huntington peuvent donner un syndrome parkinsonien. La SLA et la DFT n'en donnent pas."},
      {"t": "Sclérose latérale amyotrophique", "ok": false},
      {"t": "Atrophie multisystématisée (AMS)", "ok": true},
      {"t": "Démence fronto-temporale", "ok": false},
      {"t": "Paralysie supranucléaire progressive (PSP)", "ok": true},
      {"t": "Démence à corps de Lewy", "ok": true},
      {"t": "Maladie de Huntington", "ok": true}
    ]
  },
  {
    "id": "neuro_q58", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Parmi les troubles suivants, lesquels peuvent faire partie des complications évolutives de la maladie de Parkinson idiopathique ?",
    "opts": [
      {"t": "Troubles cognitifs", "ok": true, "j": "À la phase tardive : complications motrices (fluctuations, dyskinésies) + non motrices : troubles cognitifs axiaux, dysautonomie (hypotension, troubles urinaires), dysphagie et dépression. Les myoclonies ne font pas partie du tableau typique de la MPI."},
      {"t": "Hypotension orthostatique", "ok": true},
      {"t": "Fluctuations motrices", "ok": true},
      {"t": "Myoclonies", "ok": false},
      {"t": "Dyskinésies", "ok": true},
      {"t": "Troubles de la déglutition", "ok": true},
      {"t": "Troubles urinaires (dysurie, fuites urinaires)", "ok": true},
      {"t": "Dépression", "ok": true}
    ]
  },
  {
    "id": "neuro_q59", "type": "QRU", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Quel est le type de transmission génétique de la maladie de Wilson ?",
    "opts": [
      {"t": "Autosomique récessive", "ok": true, "j": "La maladie de Wilson est une affection génétique de transmission autosomique récessive liée à des mutations du gène ATP7B, provoquant une accumulation toxique de cuivre (foie + système nerveux central)."},
      {"t": "Autosomique dominante", "ok": false},
      {"t": "Liée à l'X", "ok": false},
      {"t": "Autre mode de transmission", "ok": false}
    ]
  },
  {
    "id": "neuro_q60", "type": "QRM", "tags": ["neuro"],
    "src": "Maladie de Parkinson",
    "q": "Quels types de mouvements anormaux peut-on retrouver dans la maladie de Wilson ?",
    "opts": [
      {"t": "Tremblements", "ok": true, "j": "L'atteinte des noyaux gris centraux par surcharge cuvrique induit un polymorphisme de mouvements anormaux : tremblement dit en 'battement d'ailes' (wing-beating), rigidité avec dystonie (rictus facial), ou chorée. Les myoclonies ne sont pas classiques."},
      {"t": "Dystonie", "ok": true},
      {"t": "Chorée", "ok": true},
      {"t": "Myoclonies", "ok": false}
    ]
  },

  // ── NEURO-IMAGERIE ───────────────────────────────────────────────

  {
    "id": "neuro_q61", "type": "QRU", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "Un infarctus cérébral systématisé touche le territoire occipital et la face interne du lobe temporal droit. Quel est le territoire artériel atteint ?",
    "opts": [
      {"t": "Artère cérébrale moyenne droite", "ok": false},
      {"t": "Artère cérébrale antérieure droite", "ok": false},
      {"t": "Artère cérébrale postérieure droite", "ok": true, "j": "L'ischémie du territoire occipital et de la face interne du lobe temporal correspond au territoire superficiel de l'artère cérébrale postérieure (ACP). Elle donne classiquement une hémianopsie latérale homonyme."},
      {"t": "Artère cérébelleuse postéro-inférieure droite", "ok": false}
    ]
  },
  {
    "id": "neuro_q62", "type": "QRU", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "Sur une ARM du polygone de Willis, l'absence de signal de flux sur le tronc médian postérieur objective l'occlusion de quelle artère ?",
    "opts": [
      {"t": "Artère carotide interne gauche", "ok": false},
      {"t": "Artère carotide interne droite", "ok": false},
      {"t": "Artère cérébrale moyenne droite", "ok": false},
      {"t": "Artère cérébrale moyenne gauche", "ok": false},
      {"t": "Artère basilaire", "ok": true, "j": "Sur une ARM du polygone de Willis, l'absence de signal de flux sur le tronc médian postérieur objective l'occlusion ou l'absence congénitale de l'artère basilaire, qui irrigue le tronc cérébral et le cervelet."}
    ]
  },
  {
    "id": "neuro_q63", "type": "QRU", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "Au scanner cérébral, une hyperdensité spontanée diffuse en forme de croissant le long de la convexité cérébrale, franchissant les sutures crâniennes, évoque :",
    "opts": [
      {"t": "Hématome sous-dural", "ok": true, "j": "L'hématome sous-dural aigu se présente au scanner sans injection comme une hyperdensité en croissant épousant la convexité et franchissant les sutures (contrairement à l'hématome extradural qui est biconvexe/en lentille et limité aux sutures)."},
      {"t": "Hématome extradural", "ok": false},
      {"t": "Hématome intraparenchymateux", "ok": false},
      {"t": "Hémorragie méningée", "ok": false},
      {"t": "Méningiome", "ok": false}
    ]
  },
  {
    "id": "neuro_q64", "type": "QRM", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "Une patiente présente un déficit hémicorporel gauche, une hémianopsie latérale homonyme gauche et des céphalées s'aggravant depuis une semaine. L'IRM montre : hyposignal en T2*, prise de contraste en T1-gadolinium, vaste œdème périlésionnel en FLAIR, déviation de la ligne médiane. Quelle(s) réponse(s) est(sont) exacte(s) ?",
    "opts": [
      {"t": "La lésion n'est pas hémorragique", "ok": false},
      {"t": "Il existe un effet de masse important", "ok": true, "j": "L'hyposignal en T2* signe le caractère hémorragique. L'effet de masse est majeur (déviation de la ligne médiane). L'œdème vasogénique périlésionnel est important (pas modéré). Une tumeur cérébrale primitive (glioblastome) ou métastase hémorragique sont les diagnostics prioritaires."},
      {"t": "Il existe un œdème vasogénique très modéré", "ok": false},
      {"t": "On observe un engagement temporal", "ok": false},
      {"t": "Un des diagnostics à évoquer est celui de tumeur cérébrale primitive", "ok": true}
    ]
  },
  {
    "id": "neuro_q65", "type": "QRU", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "Au scanner sans injection, une hyperdensité spontanée qui moule les espaces sous-arachnoïdiens, les citernes de la base et les vallées sylviennes, chez une patiente retrouvée comateuse, évoque :",
    "opts": [
      {"t": "Hématome sous-dural", "ok": false},
      {"t": "Hématome extradural", "ok": false},
      {"t": "Hémorragie méningée (sous-arachnoïdienne)", "ok": true, "j": "L'hyperdensité spontanée qui moule les espaces sous-arachnoïdiens et les citernes de la base signe une hémorragie méningée (HSA) aiguë. Cause classique de coma brutal ou de 'la plus terrible céphalée de la vie'."},
      {"t": "Hématome intraparenchymateux", "ok": false},
      {"t": "Tumeur cérébrale", "ok": false}
    ]
  },
  {
    "id": "neuro_q66", "type": "QRU", "tags": ["neuro"],
    "src": "Neuro-Imagerie",
    "q": "À l'IRM T1 avec injection de gadolinium, une lésion extra-axiale avec prise de contraste intense, précoce et très homogène, avec un signe de la 'queue de comète' (dural tail), évoque :",
    "opts": [
      {"t": "Gliome de haut grade", "ok": false},
      {"t": "Méningiome", "ok": true, "j": "Le méningiome est une tumeur extra-axiale (développée aux dépens de l'arachnoïde) caractérisée par une prise de contraste intense, précoce et homogène après injection de gadolinium, souvent accompagnée d'un signe de la 'queue de comète' (dural tail)."},
      {"t": "Hémangioblastome", "ok": false},
      {"t": "Adénome hypophysaire", "ok": false},
      {"t": "Craniopharyngiome", "ok": false}
    ]
  },

  // ── SCLÉROSE EN PLAQUES ──────────────────────────────────────────

  {
    "id": "neuro_q67", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "La sclérose en plaques :",
    "opts": [
      {"t": "Est une maladie génétique, de transmission autosomique récessive", "ok": false},
      {"t": "Est une maladie inflammatoire systémique, qui touche le SNC mais pas uniquement", "ok": false},
      {"t": "Est une maladie multifactorielle, comprenant une composante génétique, environnementale et auto-immune", "ok": true, "j": "La SEP est une affection multifactorielle du SNC EXCLUSIVEMENT (elle ne touche pas le SNP). Prépondérance féminine nette (sexe ratio ~3/1). Première cause de handicap non traumatique chez le sujet jeune en France."},
      {"t": "Touche principalement les femmes", "ok": true},
      {"t": "Est une pathologie très rare", "ok": false}
    ]
  },
  {
    "id": "neuro_q68", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "La sclérose en plaques :",
    "opts": [
      {"t": "Se caractérise le plus souvent par une évolution par poussées entrecoupées de rémissions", "ok": true, "j": "La forme rémittente-récurrente est la plus fréquente au début. La NORB est un mode d'entrée classique. Une poussée s'installe de façon subaiguë (pas brutalement comme un AVC) et sans signes généraux (fièvre = pseudo-poussée). L'hémiparésie et l'HLH sont inhabituels pour une poussée."},
      {"t": "Se révèle fréquemment par une hémiparésie", "ok": false},
      {"t": "Est une cause fréquente d'hémianopsie latérale homonyme", "ok": false},
      {"t": "Se révèle fréquemment par une neuropathie optique rétrobulbaire", "ok": true},
      {"t": "Une poussée se manifeste par l'apparition BRUTALE de symptômes neurologiques", "ok": false},
      {"t": "Une poussée s'accompagne de signes généraux (fièvre, altération de l'état général…)", "ok": false}
    ]
  },
  {
    "id": "neuro_q69", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Une neuropathie optique rétrobulbaire (NORB) :",
    "opts": [
      {"t": "Est liée à une atteinte des voies visuelles postérieures, occipitales", "ok": false},
      {"t": "Se caractérise par une baisse de l'acuité visuelle monoculaire, avec un œil blanc", "ok": true, "j": "L'adage classique : 'le patient ne voit rien, et le clinicien non plus' (FO normal). Un œdème papillaire modéré est possible si l'inflammation est très antérieure (papillite). La NORB est évocatrice de SEP mais n'est pas pathognomonique."},
      {"t": "Le fond d'œil est généralement normal", "ok": true},
      {"t": "On peut trouver un œdème papillaire au fond d'œil", "ok": true},
      {"t": "Signe le diagnostic de sclérose en plaques", "ok": false}
    ]
  },
  {
    "id": "neuro_q70", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Le diagnostic de sclérose en plaques :",
    "opts": [
      {"t": "Nécessite la mise en évidence de bandes oligoclonales à la ponction lombaire", "ok": false},
      {"t": "Doit être remis en question devant la présence d'anticorps antinucléaires à un taux élevé", "ok": true, "j": "Le pivot diagnostique (critères de McDonald) repose sur la dissémination spatiale ET temporelle (prouvée par une seule IRM montrant des lésions rehaussées et non rehaussées simultanément). Un taux élevé d'AAN doit faire suspecter Lupus ou Gougerot-Sjögren. Le scanner est insuffisant."},
      {"t": "Nécessite la mise en évidence d'une dissémination spatiale et temporelle des lésions", "ok": true},
      {"t": "La dissémination temporelle peut être mise en évidence sur les données de l'IRM", "ok": true},
      {"t": "Un scanner cérébral est un examen suffisant dans la démarche diagnostique", "ok": false}
    ]
  },
  {
    "id": "neuro_q71", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "En cas de suspicion de sclérose en plaques, la ponction lombaire :",
    "opts": [
      {"t": "Doit systématiquement être réalisée", "ok": false},
      {"t": "Ne doit plus jamais être réalisée", "ok": false},
      {"t": "Est utile en cas de doute clinique avec un diagnostic différentiel", "ok": true, "j": "La PL n'est plus obligatoire si les critères de McDonald d'imagerie pure sont remplis. Elle reste précieuse en cas de doute ou présentation atypique. Les BOC confortent grandement le diagnostic. Une lymphocytose modérée (< 50 cellules/mm3) est compatible avec une poussée de SEP."},
      {"t": "Sa normalité élimine le diagnostic", "ok": false},
      {"t": "La présence de bandes oligoclonales (BOC) renforce l'hypothèse diagnostique", "ok": true},
      {"t": "La présence de 30 lymphocytes/mm3 doit faire évoquer un autre diagnostic", "ok": false}
    ]
  },
  {
    "id": "neuro_q72", "type": "QRU", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Une IRM montrant des hypersignaux FLAIR confluents et volumineux associés à un effet de masse net et un œdème vasogénique périphérique important est-elle évocatrice de SEP ?",
    "opts": [
      {"t": "Oui", "ok": false},
      {"t": "Non", "ok": true, "j": "Non. Les plaques de démyélinisation typiques sont punctiformes, périventriculaires, en 'doigts de Dawson', sans effet de masse ni œdème vasogénique important. Ce profil évoquait ici des métastases cérébrales secondaires d'un cancer pulmonaire."}
    ]
  },
  {
    "id": "neuro_q73", "type": "QRU", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Une patiente de 27 ans présente une NORB droite (premier épisode). On constate un signe de Babinski bilatéral à l'examen. L'IRM montre des lésions ovoïdes périventriculaires perpendiculaires aux ventricules, dont certaines prennent le contraste. Le diagnostic de SEP peut-il être posé d'emblée ?",
    "opts": [
      {"t": "Oui — dissémination spatiale et temporelle validée", "ok": true, "j": "Le diagnostic est validé d'emblée. Dissémination spatiale : NORB (nerf optique) + atteinte pyramidale bilatérale (Babinski) + lésions IRM. Dissémination temporelle : coexistence de lésions prenant et ne prenant pas le contraste sur la MÊME IRM (lésions actives et anciennes simultanées)."},
      {"t": "Non — il faut attendre une seconde poussée clinique", "ok": false}
    ]
  },
  {
    "id": "neuro_q74", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Le traitement d'une poussée de sclérose en plaques :",
    "opts": [
      {"t": "Repose sur les immunomodulateurs", "ok": false},
      {"t": "Repose sur les immunosuppresseurs", "ok": false},
      {"t": "Repose sur une corticothérapie intraveineuse à forte dose", "ok": true, "j": "Le traitement de la poussée = corticothérapie IV à forte dose (ex: Solumedrol 1g/j pendant 3 jours). Elle ACCÉLÈRE la récupération mais ne modifie pas le reliquat de handicap à long terme ni l'histoire naturelle. Les immunomodulateurs sont des traitements de fond."},
      {"t": "Permet d'obtenir une récupération plus importante du déficit", "ok": false},
      {"t": "Permet d'accélérer la récupération du déficit", "ok": true}
    ]
  },
  {
    "id": "neuro_q75", "type": "QRU", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Une patiente suivie pour SEP (NORB gauche il y a 3 ans) vous contacte pour la réapparition d'un trouble visuel monoculaire gauche après une séance de sauna. Quel diagnostic évoquez-vous ?",
    "opts": [
      {"t": "Nouvelle poussée de SEP", "ok": false},
      {"t": "Phénomène d'Uhthoff", "ok": true, "j": "Phénomène d'Uhthoff : aggravation ou réapparition transitoire de symptômes anciens liés à une démyélinisation, déclenchée par l'élévation de la température corporelle (effort, bain chaud, fièvre, sauna). Ce n'est PAS une nouvelle poussée."},
      {"t": "Autre diagnostic à explorer", "ok": false}
    ]
  },
  {
    "id": "neuro_q76", "type": "QRU", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Patiente de 34 ans suivie pour SEP depuis 8 ans. Elle présente des troubles sphinctériens à type d'impériosités mictionnelles avec quelques fuites depuis 1 semaine. Quel est le PREMIER examen à réaliser ?",
    "opts": [
      {"t": "ECBU ou Bandelette Urinaire (BU)", "ok": true, "j": "Devant toute apparition/modification de troubles urinaires chez un patient SEP, il faut éliminer en PRIORITÉ ABSOLUE une infection urinaire par BU ou ECBU. Une infection peut mimer une poussée (syndrome pseudo-poussée dû à la fièvre/inflammation)."},
      {"t": "Bilan urodynamique", "ok": false},
      {"t": "IRM cérébrale", "ok": false},
      {"t": "IRM médullaire", "ok": false},
      {"t": "Électroneuromyogramme", "ok": false},
      {"t": "Électro-encéphalogramme", "ok": false}
    ]
  },
  {
    "id": "neuro_q77", "type": "QRM", "tags": ["neuro"],
    "src": "Sclérose en Plaques",
    "q": "Quel(s) est(sont) l'objectif(s) du traitement de fond de la sclérose en plaques ?",
    "opts": [
      {"t": "Réduire la fréquence des poussées", "ok": true, "j": "Les traitements de fond (immunomodulateurs ou immunosuppresseurs) visent à réduire la charge lésionnelle inflammatoire pour diminuer la fréquence des poussées et freiner l'accumulation du handicap. L'accélération de la récupération d'une poussée = rôle exclusif des corticoïdes."},
      {"t": "Accélérer la récupération après une poussée", "ok": false},
      {"t": "Ralentir la progression du handicap", "ok": true},
      {"t": "Autre réponse", "ok": false}
    ]
  },

  // ── PATHOLOGIES VESTIBULAIRES / VERTIGES ─────────────────────────

  {
    "id": "neuro_q78", "type": "QRM", "tags": ["neuro"],
    "src": "Pathologies Vestibulaires / Vertiges",
    "q": "Parmi les signes cliniques suivants, lesquels évoquent l'origine CENTRALE d'un vertige ?",
    "opts": [
      {"t": "Association avec des acouphènes continus", "ok": false},
      {"t": "Association avec une baisse de l'acuité auditive", "ok": false},
      {"t": "Nystagmus multidirectionnel inépuisable", "ok": true, "j": "Signes de vertige central (tronc cérébral/cervelet) : nystagmus central (multidirectionnel, vertical pur, inépuisable), CBH, atteinte des paires crâniennes. L'atteinte cochléaire et le nystagmus harmonieux orientent vers l'origine périphérique."},
      {"t": "Nystagmus horizonto-rotatoire avec secousse rapide vers la droite, associé à une déviation des index vers la gauche", "ok": false},
      {"t": "Signe de Claude-Bernard-Horner associé", "ok": true},
      {"t": "Abolition du réflexe nauséeux", "ok": true}
    ]
  },

  // ── MYASTHÉNIE ───────────────────────────────────────────────────

  {
    "id": "neuro_q79", "type": "QRM", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Le diagnostic de myasthénie doit être évoqué devant :",
    "opts": [
      {"t": "Un déficit moteur fluctuant", "ok": true, "j": "La myasthénie auto-immune est une maladie purement motrice (jonction neuro-musculaire post-synaptique). Pas d'atteinte sensitive (jamais de paresthésies). Le caractère fluctuant avec fatigabilité à l'effort est la clé clinique. Diplopie binoculaire (et non monoculaire)."},
      {"t": "Des paresthésies fluctuantes", "ok": false},
      {"t": "Un ptosis fluctuant", "ok": true},
      {"t": "Des troubles de déglutition", "ok": true},
      {"t": "Une diplopie monoculaire", "ok": false}
    ]
  },
  {
    "id": "neuro_q80", "type": "QRM", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Parmi les situations suivantes, lesquelles peuvent favoriser une crise myasthénique ?",
    "opts": [
      {"t": "Opération chirurgicale", "ok": true, "j": "Toutes ces situations peuvent décompenser une myasthénie. Les benzodiazépines font partie des médicaments formellement contre-indiqués car ils aggravent le bloc neuromusculaire par effet dépresseur respiratoire ou myorelaxant."},
      {"t": "Infection urinaire", "ok": true},
      {"t": "Décès d'un proche (stress majeur)", "ok": true},
      {"t": "Prise d'une benzodiazépine", "ok": true}
    ]
  },
  {
    "id": "neuro_q81", "type": "QRU", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "La négativité des anticorps anti-RACh et anti-MuSK chez un patient avec symptomatologie évocatrice de myasthénie oculopharyngée permet-elle d'éliminer ce diagnostic ?",
    "opts": [
      {"t": "Vrai", "ok": false},
      {"t": "Faux", "ok": true, "j": "FAUX. Il existe des formes de myasthénies 'séronégatives' (~10-15% des formes généralisées et jusqu'à 50% des formes purement oculaires) où aucun auto-anticorps n'est détecté. Le diagnostic repose alors sur la clinique, l'ENMG (décrément) et le test thérapeutique."}
    ]
  },
  {
    "id": "neuro_q82", "type": "QRU", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Devant une suspicion de myasthénie généralisée, une IRM cérébrale et médullaire doit être réalisée pour éliminer les diagnostics différentiels.",
    "opts": [
      {"t": "Vrai", "ok": false},
      {"t": "Faux", "ok": true, "j": "FAUX. La myasthénie est une pathologie du SNP (jonction). L'imagerie du SNC (IRM cérébrale/médullaire) est inutile en l'absence de signes d'appel centraux stricts (syndrome pyramidal, niveau sensitif). En revanche, un scanner thoracique est obligatoire (recherche de thymome)."}
    ]
  },
  {
    "id": "neuro_q83", "type": "QRM", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "L'ENMG dans la myasthénie généralisée :",
    "opts": [
      {"t": "Peut être normal", "ok": true, "j": "L'ENMG recherche un décrément (diminution d'amplitude > 10% du potentiel moteur lors de stimulations répétées à basse fréquence). L'examen peut être normal, notamment dans les formes localisées (importance de tester les muscles symptomatiques). Les vitesses de conduction nerveuses sont normales."},
      {"t": "Montre une altération des vitesses de conduction sensitives", "ok": false},
      {"t": "Montre une altération des vitesses de conduction motrices", "ok": false},
      {"t": "Montre une diminution de l'amplitude des potentiels moteurs à la stimulation répétée (décrément)", "ok": true},
      {"t": "Montre une augmentation de l'amplitude des potentiels moteurs à la stimulation répétée", "ok": false},
      {"t": "Les territoires cliniquement affectés doivent être examinés en priorité", "ok": true}
    ]
  },
  {
    "id": "neuro_q84", "type": "QRU", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Une imagerie thoracique doit systématiquement être réalisée devant la découverte d'une myasthénie généralisée.",
    "opts": [
      {"t": "Vrai", "ok": true, "j": "VRAI. Un scanner ou IRM thoracique est obligatoire pour rechercher une anomalie du thymus : hyperplasie thymique (fréquente chez le sujet jeune) ou thymome (tumeur épithéliale du thymus, retrouvée dans 10-15% des cas). Son traitement peut améliorer la myasthénie."},
      {"t": "Faux", "ok": false}
    ]
  },
  {
    "id": "neuro_q85", "type": "QRM", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Parmi les symptômes suivants, le(s)quel(s) est(sont) lié(s) à l'effet MUSCARINIQUE du traitement par anticholinestérasiques ?",
    "opts": [
      {"t": "Hypersécrétion salivaire", "ok": true, "j": "Effets MUSCARINIQUES (surdosage) : hypersécrétion digestive/salivaire/lacrymale, diarrhées, nausées, hypersudation, bradycardie. Effets NICOTINIQUES : crampes, fasciculations. Ces signes témoignent d'un risque de crise cholinergique."},
      {"t": "Diarrhées", "ok": true},
      {"t": "Crampes", "ok": false},
      {"t": "Fasciculations", "ok": false},
      {"t": "Hypersudation", "ok": true}
    ]
  },
  {
    "id": "neuro_q86", "type": "QRM", "tags": ["neuro"],
    "src": "Myasthénie",
    "q": "Le syndrome de Lambert-Eaton :",
    "opts": [
      {"t": "Peut se présenter sous une forme très similaire à la myasthénie auto-immune", "ok": true, "j": "Lambert-Eaton = bloc PRÉ-synaptique par anticorps anti-canaux calciques voltage-dépendants. Cliniquement proche de la myasthénie mais avec AMÉLIORATION transitoire de la force à l'effort et INCRÉMENT à l'ENMG. Syndrome paranéoplasique classique (cancer bronchique à petites cellules)."},
      {"t": "Doit faire rechercher une tumeur associée (syndrome paranéoplasique)", "ok": true},
      {"t": "Est caractérisé par la présence d'anticorps anti-canaux calcium voltage-dépendants", "ok": true},
      {"t": "Montre un décrément à l'ENMG comme dans la myasthénie auto-immune", "ok": false},
      {"t": "Est caractérisé par un blocage des canaux calciques post-synaptiques", "ok": false}
    ]
  },

  // ── SYNDROME DE GUILLAIN-BARRÉ ───────────────────────────────────

  {
    "id": "neuro_q87", "type": "QRU", "tags": ["neuro"],
    "src": "Guillain-Barré",
    "q": "Concernant le syndrome de Guillain-Barré, quelle affirmation est exacte ?",
    "opts": [
      {"t": "C'est une pathologie du SNC, touchant la moelle épinière", "ok": false},
      {"t": "C'est une pathologie du SNC, touchant le tronc cérébral", "ok": false},
      {"t": "C'est une pathologie du SNP, touchant prioritairement les grosses fibres myélinisées", "ok": true, "j": "Le SGB (polyradiculonévrite aiguë) est une atteinte démyélinisante aiguë du SNP, qui cible préférentiellement les grosses fibres myélinisées motrices et sensitives, expliquant le déficit moteur ascendant et l'aréflexie précoce."},
      {"t": "C'est une pathologie du SNP, touchant prioritairement les petites fibres non myélinisées", "ok": false},
      {"t": "Aucune des réponses précédentes", "ok": false}
    ]
  },
  {
    "id": "neuro_q88", "type": "QRU", "tags": ["neuro"],
    "src": "Guillain-Barré",
    "q": "Parmi les tableaux cliniques suivants, le(s)quel(s) évoque(nt) un syndrome de Guillain-Barré typique ?",
    "opts": [
      {"t": "Déficit du releveur du pied droit puis parésie des 3 premiers doigts de la main gauche quelques jours après", "ok": false},
      {"t": "Hypoesthésie symétrique des membres inférieurs remontant jusqu'à mi-cheville, évoluant depuis plusieurs mois", "ok": false},
      {"t": "Déficit sensitivo-moteur des 4 membres d'aggravation rapide, avec ROT vifs et niveau sensitif", "ok": false},
      {"t": "Paralysie faciale périphérique gauche isolée", "ok": false},
      {"t": "Aucune des réponses précédentes", "ok": true, "j": "Le SGB typique = tétraparésie ascendante SYMÉTRIQUE aiguë avec aréflexie. A = multinévrite, B = polyneuropathie chronique, C = atteinte centrale médullaire (ROT vifs + niveau sensitif), D = paralysie faciale isolée. Aucune proposition ne correspond au tableau typique du SGB."}
    ]
  },
  {
    "id": "neuro_q89", "type": "QRU", "tags": ["neuro"],
    "src": "Guillain-Barré",
    "q": "Une patiente de 31 ans présente un déficit sensitivo-moteur ascendant des 4 membres, des ROT abolis, pas de niveau sensitif et une diplégie faciale. Faut-il réaliser une IRM médullaire ?",
    "opts": [
      {"t": "Oui", "ok": false},
      {"t": "Non", "ok": true, "j": "Non. Tous les signes convergent vers une atteinte purement périphérique diffuse : déficit ascendant, abolition des ROT, absence de niveau sensitif (signerait une atteinte médullaire centrale) et diplégie faciale (très évocatrice du SGB). L'IRM médullaire n'a pas sa place ici."}
    ]
  },
  {
    "id": "neuro_q90", "type": "QRU", "tags": ["neuro"],
    "src": "Guillain-Barré",
    "q": "Vous suspectez une polyradiculonévrite aiguë. Parmi ces résultats d'analyse du LCS, lequel renforce votre hypothèse diagnostique ?",
    "opts": [
      {"t": "2 GB/mm³, 0 GR, protéinorachie 0,7 g/L", "ok": true, "j": "La signature biologique du SGB dans le LCS est la DISSOCIATION ALBUMINO-CYTOLOGIQUE : hyperprotéinorachie (> 0,45 g/L) ISOLÉE, contrastant avec une absence de réaction cellulaire (< 10 leucocytes/mm3). Le choix A montre exactement cette dissociation."},
      {"t": "20 GB/mm³ (lymphocytes), 18 GR, protéinorachie 0,59 g/L", "ok": false},
      {"t": "270 GB/mm³ (60% lymphocytes, 30% PNN), protéinorachie 2,3 g/L", "ok": false},
      {"t": "560 GB/mm³ (90% PNN), protéinorachie 1,8 g/L", "ok": false}
    ]
  },
  {
    "id": "neuro_q91", "type": "QRM", "tags": ["neuro"],
    "src": "Guillain-Barré",
    "q": "Un patient est admis pour un syndrome de Guillain-Barré sévère, atteinte des 4 membres apparue en 5 jours. Quels éléments de prise en charge sont nécessaires ?",
    "opts": [
      {"t": "Hospitalisation en neurologie", "ok": false},
      {"t": "Hospitalisation en réanimation", "ok": true, "j": "Évolution fulminante en 5 jours → surveillance stricte en réanimation (défaillance respiratoire, dysphagie). Traitement étiologique : IgIV ou échanges plasmatiques (les corticoïdes sont INEFFICACES dans le SGB). Prévention thromboembolique obligatoire (HBPM préventive + bas de contention)."},
      {"t": "Corticothérapie IV", "ok": false},
      {"t": "Immunoglobulines polyvalentes IV (IgIV) ou plasmaphérèse", "ok": true},
      {"t": "Anticoagulation préventive", "ok": true},
      {"t": "Bas de contention", "ok": true}
    ]
  },

  // ── ÉPILEPSIE ────────────────────────────────────────────────────

  {
    "id": "neuro_q92", "type": "QRU", "tags": ["neuro"],
    "src": "Épilepsie",
    "q": "Une patiente présente des épisodes répétés stéréotypés de clonies péri-orales droites, descendant en quelques secondes le long du bras jusqu'à la main, sans altération de la conscience. Quel diagnostic retenez-vous ?",
    "opts": [
      {"t": "Aura migraineuse", "ok": false},
      {"t": "Accidents ischémiques transitoires (AIT) répétés", "ok": false},
      {"t": "Crises épileptiques focales (partielles) simples motrices", "ok": true, "j": "Crises épileptiques focales motrices simples. La marche progressive des clonies d'un territoire à l'autre suit la somatotopie du cortex moteur (marche bravais-jacksonienne). L'absence d'altération de la conscience définit le caractère simple (non complexe)."},
      {"t": "Crises convulsives partielles complexes", "ok": false}
    ]
  },
  {
    "id": "neuro_q93", "type": "QRM", "tags": ["neuro"],
    "src": "Épilepsie",
    "q": "Une patiente présente devant vous une crise convulsive généralisée tonico-clonique. Quelle est votre attitude pendant la crise ?",
    "opts": [
      {"t": "Mise en place d'une canule de Guédel", "ok": false},
      {"t": "Instauration immédiate de 1 mg de clonazépam", "ok": false},
      {"t": "Attendre la fin de la crise et administrer 1 mg de clonazépam uniquement si la crise dépasse 5 min", "ok": true, "j": "Pendant la phase convulsive, il est dangereux d'introduire de force un objet dans la bouche. L'urgence est de protéger le patient contre les traumatismes. La majorité des crises s'arrêtent en 1-2 min. On ne traite par benzodiazépine qu'au-delà de 5 minutes (seuil de l'état de mal)."},
      {"t": "Protéger la patiente pour éviter qu'elle se blesse (éloigner les objets, protéger la tête)", "ok": true}
    ]
  },
  {
    "id": "neuro_q94", "type": "QRM", "tags": ["neuro"],
    "src": "Épilepsie",
    "q": "Un patient de 67 ans est hospitalisé à la suite d'une première crise épileptique généralisée. Parmi les pathologies suivantes, lesquelles peuvent en être à l'origine ?",
    "opts": [
      {"t": "Tumeur cérébrale", "ok": true, "j": "Chez un sujet âgé, toute agression ou lésion structurelle du cortex cérébral (tumorale, infectieuse, vasculaire ischémique ou malformative) peut irriter les neurones corticaux et déclencher une crise d'épilepsie symptomatique."},
      {"t": "Abcès cérébral", "ok": true},
      {"t": "Infarctus cérébral (séquelle ou aigu)", "ok": true},
      {"t": "Malformation artérioveineuse cérébrale", "ok": true}
    ]
  },

  // ── SYNDROMES MÉDULLAIRES ────────────────────────────────────────

  {
    "id": "neuro_q95", "type": "QRU", "tags": ["neuro"],
    "src": "Syndromes Médullaires",
    "q": "Un patient de 60 ans présente une fatigabilité à la marche, un discret déficit moteur symétrique des membres inférieurs, des ROT très vifs aux quatre membres et un signe de Babinski bilatéral. Quel est le premier examen à réaliser ?",
    "opts": [
      {"t": "IRM cérébrale", "ok": false},
      {"t": "Électroneuromyogramme", "ok": false},
      {"t": "IRM médullaire", "ok": true, "j": "La vivacité des ROT aux 4 membres (membres supérieurs inclus) + syndrome pyramidal des membres inférieurs signe une atteinte pyramidale centrale haute (cervicale). L'IRM médullaire cervicale est le premier examen pour rechercher une compression médullaire en urgence (ex: myélopathie cervicarthrosique)."},
      {"t": "Ponction lombaire", "ok": false},
      {"t": "Électro-encéphalogramme", "ok": false},
      {"t": "Scanner rachidien", "ok": false}
    ]
  },
  {
    "id": "neuro_q96", "type": "QRU", "tags": ["neuro"],
    "src": "Syndromes Médullaires",
    "q": "Un patient présente : déficit moteur global du MI droit (4/5), ROT vifs et signe de Babinski à droite, hypopallesthésie du MI droit, hypoesthésie thermo-algique du MI gauche. Quel est le diagnostic et la localisation de la lésion ?",
    "opts": [
      {"t": "Syndrome de Brown-Séquard — Hémi-moelle lombaire à gauche", "ok": false},
      {"t": "Syndrome de Brown-Séquard — Hémi-moelle lombaire à droite", "ok": true, "j": "Syndrome d'hémi-moelle (Brown-Séquard) : du côté de la lésion (droite) = atteinte motrice pyramidale + cordonnale postérieure (pallesthésie). Du côté opposé (gauche) = atteinte du faisceau spinothalamique (thermo-algique), car ces fibres croisent la ligne médiane dès leur entrée dans la moelle."},
      {"t": "Syndrome de sclérose combinée de la moelle — Lésions multiples", "ok": false},
      {"t": "Syndrome de la queue de cheval — Lésion radiculaire", "ok": false}
    ]
  },
  {
    "id": "neuro_q97", "type": "QRU", "tags": ["neuro"],
    "src": "Syndromes Médullaires",
    "q": "Une patiente de 68 ans présente des rachialgies inflammatoires depuis 1 semaine, une faiblesse des membres inférieurs depuis 48h, des ROT abolis, un RCP indifférent, une hypoesthésie en selle et une atonie du sphincter anal. Quel diagnostic évoquez-vous ?",
    "opts": [
      {"t": "Syndrome de Guillain-Barré", "ok": false},
      {"t": "Compression médullaire haute", "ok": false},
      {"t": "Syndrome du cône terminal", "ok": false},
      {"t": "Polyneuropathie chronique", "ok": false},
      {"t": "Syndrome de la queue de cheval", "ok": true, "j": "Urgence médico-chirurgicale. Le syndrome de la queue de cheval associe une atteinte périphérique des membres inférieurs (déficit, aréflexie), des troubles sphinctériens majeurs (atonie anale) et des troubles sensitifs périnéaux (hypoesthésie en selle). Cause souvent compressive (hernie discale, cancer)."}
    ]
  },
  {
    "id": "neuro_q98", "type": "QRU", "tags": ["neuro"],
    "src": "Syndromes Médullaires",
    "q": "Patient de 29 ans, faiblesse des 4 membres, ROT vifs aux 4 membres SAUF le réflexe bicipital droit qui est aboli, Babinski bilatéral, niveau sensitif à T10 (nombril), hypoesthésie du moignon de l'épaule droite. Quel est le niveau de la compression médullaire ?",
    "opts": [
      {"t": "C5", "ok": true, "j": "Le niveau lésionnel exact est donné par le signe segmentaire radiculaire : abolition SPÉCIFIQUE du réflexe bicipital droit (C5) + hypoesthésie du moignon de l'épaule (territoire C5). Le niveau sensitif cutané T10 sous-estime souvent la hauteur réelle de la lésion médullaire."},
      {"t": "C6", "ok": false},
      {"t": "C7", "ok": false},
      {"t": "T4", "ok": false},
      {"t": "T10", "ok": false}
    ]
  },

  // ── NEUROLOGIE COGNITIVE / DÉMENCES ─────────────────────────────

  {
    "id": "neuro_q99", "type": "QRU", "tags": ["neuro"],
    "src": "Neurologie Cognitive / Démences",
    "q": "Quelle est la première cause de syndrome démentiel (troubles neurocognitifs majeurs) en France ?",
    "opts": [
      {"t": "Maladie d'Alzheimer", "ok": true, "j": "La maladie d'Alzheimer est de loin la première cause de syndrome démentiel chez le sujet âgé, représentant environ 70% des cas."},
      {"t": "Démence d'origine vasculaire", "ok": false},
      {"t": "Démence fronto-temporale", "ok": false},
      {"t": "Démence à corps de Lewy diffus", "ok": false}
    ]
  },
  {
    "id": "neuro_q100", "type": "QRU", "tags": ["neuro"],
    "src": "Neurologie Cognitive / Démences",
    "q": "Un patient de 68 ans présente un trouble de la mémoire épisodique NON amélioré par l'indiçage au test de Grober et Buschke. Ce profil est-il compatible avec une maladie d'Alzheimer débutante ?",
    "opts": [
      {"t": "Oui", "ok": true, "j": "OUI. Le profil amnésique 'hippocampique' : effondrement du rappel libre qui N'EST PAS corrigé par l'indiçage signe un trouble du stockage des informations. C'est la signature neuropsychologique typique de la maladie d'Alzheimer (atteinte de l'hippocampe)."},
      {"t": "Non", "ok": false}
    ]
  },
  {
    "id": "neuro_q101", "type": "QRU", "tags": ["neuro"],
    "src": "Neurologie Cognitive / Démences",
    "q": "Un patient de 68 ans présente un trouble de la mémoire épisodique TRÈS NETTEMENT amélioré par l'indiçage. Ce profil est-il compatible avec une maladie d'Alzheimer débutante ?",
    "opts": [
      {"t": "Oui", "ok": false},
      {"t": "Non", "ok": true, "j": "NON. Si l'indiçage améliore nettement les performances de rappel, cela prouve que l'information a été stockée dans l'hippocampe mais qu'il y a un défaut de RÉCUPÉRATION (stratégie de recherche). Ce profil évoque un syndrome dysexécutif ou trouble attentionnel (démence vasculaire, dépression), pas Alzheimer."}
    ]
  },
  {
    "id": "neuro_q102", "type": "QRM", "tags": ["neuro"],
    "src": "Neurologie Cognitive / Démences",
    "q": "Un patient de 67 ans présente un tableau très évocateur de maladie d'Alzheimer confirmé par le bilan neuropsychologique. Quelle(s) imagerie(s) devez-vous demander ?",
    "opts": [
      {"t": "Aucune imagerie n'est nécessaire si le tableau clinique est typique", "ok": false},
      {"t": "Un scanner à la recherche d'une prédisposition génétique", "ok": false},
      {"t": "Une IRM cérébrale à la recherche d'une atrophie hippocampique", "ok": true, "j": "L'IRM cérébrale est l'imagerie de référence OBLIGATOIRE lors du bilan initial de tout trouble cognitif. Elle recherche l'atrophie hippocampique (coupes coronales T1) et élimine les diagnostics différentiels (lésions vasculaires en FLAIR/T2*)."},
      {"t": "Une IRM cérébrale à la recherche de lésions vasculaires cérébrales", "ok": true},
      {"t": "Une scintigraphie cérébrale systématiquement d'emblée", "ok": false}
    ]
  }

];

// Injection dans la base de données principale
DATA_MEDECINE.QCMS.push(...NEURO_QCMS);

console.log(`[data-neuro.js] ${NEURO_QCMS.length} QCMs de neurologie chargés.`);
