#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import zipfile
import hashlib
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.abspath(__file__))

addons = []

print("Buscando addons...")

for folder in sorted(os.listdir(ROOT)):
    addon_dir = os.path.join(ROOT, folder)
    addon_xml = os.path.join(addon_dir, "addon.xml")

    if not os.path.isdir(addon_dir):
        continue

    if not os.path.isfile(addon_xml):
        continue

    try:
        tree = ET.parse(addon_xml)
        root = tree.getroot()

        addon_id = root.attrib["id"]
        version = root.attrib["version"]

        addons.append((addon_dir, addon_xml, addon_id, version))

        print(f"Encontrado: {addon_id} {version}")

    except Exception as e:
        print(f"Error leyendo {addon_xml}: {e}")

# ===========================
# Generar addons.xml
# ===========================

xml = '<?xml version="1.0" encoding="UTF-8"?>\n<addons>\n'

for addon_dir, addon_xml, addon_id, version in addons:

    with open(addon_xml, "r", encoding="utf-8") as f:
        data = f.read()

    data = data.replace('<?xml version="1.0" encoding="UTF-8"?>', "").strip()

    xml += data + "\n"

xml += "</addons>\n"

addons_xml = os.path.join(ROOT, "addons.xml")

with open(addons_xml, "w", encoding="utf-8") as f:
    f.write(xml)

print("addons.xml generado.")

# ===========================
# MD5
# ===========================

md5 = hashlib.md5(xml.encode("utf-8")).hexdigest()

with open(os.path.join(ROOT, "addons.xml.md5"), "w") as f:
    f.write(md5)

print("addons.xml.md5 generado.")

# ===========================
# ZIPS
# ===========================

for addon_dir, addon_xml, addon_id, version in addons:

    zip_name = f"{addon_id}-{version}.zip"
    zip_path = os.path.join(ROOT, zip_name)

    print(f"Creando {zip_name}...")

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:

        for root, dirs, files in os.walk(addon_dir):

            for file in files:

                filename = os.path.join(root, file)

                arcname = os.path.relpath(filename, addon_dir)

                z.write(filename, arcname)

print("ZIPs creados correctamente.")
print("Repositorio listo.") 