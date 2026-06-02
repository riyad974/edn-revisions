import re, json

COLLEGES = {
    'AR','Can','CD','CMF','Der','DSP','End','Gen','Ger','GO','Hem','HGE',
    'Imm','Inf','MG','MCV','MIR','MI','MPR','MTL','Nut','Nep','Neu','NC',
    'Oph','ORL','OT','Ped','Pne','Psy','Rhu','SP','The','Uro',
    # avec accents (tels qu'ils apparaissent dans le fichier)
    'Gén','Gér','Hém','Nép','Thé'
}

with open('nouveau 1.txt', 'r', encoding='utf-8') as f:
    lines = [l.rstrip() for l in f]

items = []
ue = ''
num = None
title = ''
colleges = []
skip = False

def save():
    global num, title, colleges
    if num and title:
        items.append({'id': num, 'ue': ue, 'title': title, 'colleges': colleges[:]})
    num = None; title = ''; colleges = []

for line in lines:
    line = line.strip()
    if not line:
        continue

    # Sections légende à ignorer
    if 'Légende' in line or 'Liste des Référentiels' in line:
        save(); skip = True; continue

    # Reprise après légende si nouvelle UE
    m = re.match(r'^(UE\d+\s*[-:].+)$', line)
    if m:
        skip = False
        save()
        ue = m.group(1)
        continue

    if skip:
        continue

    # Item header : "Item 1", "Item191", etc.
    m = re.match(r'^Item\s*(\d+)$', line)
    if m:
        save()
        num = int(m.group(1))
        continue

    if num is None:
        continue

    # Abréviation de collège
    if line in COLLEGES:
        colleges.append(line)
    elif not colleges:
        # Encore dans le titre (avant tout collège)
        title = (title + ' ' + line).strip() if title else line

save()

js = 'const EDN_ITEMS = ' + json.dumps(items, ensure_ascii=False, indent=0) + ';\n'
with open('data-items.js', 'w', encoding='utf-8') as f:
    f.write(js)

print(f'OK — {len(items)} items générés dans data-items.js')
