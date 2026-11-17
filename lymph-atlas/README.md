# Lymph Atlas

Learn the lymphatic system on an interactive 3D model: the lymph node groups of the head and neck, chest, abdomen, pelvis, armpit and groin, the spleen, thymus and tonsils, and the thoracic duct with the cisterna chyli.

**Use it here: [samplesize1.com/tools/lymph-atlas](https://samplesize1.com/tools/lymph-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 37 parts anatomy courses teach by name (the spleen, thymus and tonsils, the thoracic duct, cisterna chyli and right lymphatic duct, and the node groups of the neck, armpit, chest, abdomen, pelvis and groin), or all 109 node groups, organs and ducts in the model
- The whole body or one area at a time: organs and ducts; head and neck; torso (chest, abdomen, pelvis); arm (armpit, arm and elbow); leg (groin, knee and leg)
- **Study** each group's name, what drains into it, where its lymph goes next and why it matters in the clinic
- **Practice**: find each group; misses come back a few questions later until you get them right
- **Test**: every group once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Lymph in textbook green, the ducts lighter, the spleen purple-red, the thymus pink-grey, the tonsils rosy
- Nodes are small, so clicks are forgiving: a click a little beside a node still lands on it
- The skeleton, organs and big vessels as a see-through frame, so you can see which vessel a node chain follows; clicking one names it
- Hints on or off: names that say where the nodes are and what reaches them ("Jugulodigastric node (the tonsil node, below the angle of the jaw)") or anatomical names only
- Esc clears the selection; X-ray and peel modes reach nodes under others
- Voice commands ("neck", "left armpit", "abdomen", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `lymph.glb` | The 3D model: nodes, organs and ducts, plus the skeleton, organs and vessels of the frame |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`lymph.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Z-Anatomy's nodes are 1.3 mm spheres and are drawn here at a visible size in the same places; it has no lymph vessels, so the thoracic duct, cisterna chyli, right lymphatic duct and the lumbar and intestinal trunks are drawn along their textbook course, anchored to the model's aorta, azygos vein, oesophagus and vertebrae. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
