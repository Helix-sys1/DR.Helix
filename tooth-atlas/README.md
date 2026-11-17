# Tooth Atlas

Learn the teeth on an interactive 3D model: the 28 permanent teeth by name and by number (FDI, Universal and Palmer), with when each erupts, what its crown and roots look like and why it matters in the clinic.

**Use it here: [samplesize1.com/tools/tooth-atlas](https://samplesize1.com/tools/tooth-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 14 kinds of tooth, upper and lower (central and lateral incisor, canine, first and second premolar, first and second molar; either side counts), or all 28 teeth one by one with their side ("upper right first molar")
- The whole mouth or one part at a time: upper or lower jaw, front teeth (incisors and canines) or back teeth (premolars and molars), one side at a time
- **Study** each tooth's name, its FDI, Universal and Palmer numbers, when it erupts, its cusps and roots, and what matters in the clinic
- **Practice**: find each tooth; misses come back a few questions later until you get them right
- **Test**: every tooth once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- The skull as a see-through frame, so the back teeth can be found behind the cheekbone; clicking a bone names it
- Hints on or off: names with the numbers and what the tooth does ("Upper right canine (13 · #6, eye tooth)") or names only
- Esc clears the selection; X-ray and peel modes reach a tooth behind another
- Voice commands ("upper jaw", "lower left", "front teeth", "whole mouth") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

The model has no third molars (wisdom teeth) and no milk teeth.

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches, in English: regions, names, notes |
| `lang/<code>.json` | The atlas in 17 other languages: its words and the tooth names (the study notes stay English) |
| `teeth.glb` | The 3D model: the 28 teeth and the bones of the skull |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`teeth.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
