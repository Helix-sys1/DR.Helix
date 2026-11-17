# Heart Atlas

Learn the heart and the blood vessels on an interactive 3D model: the chambers, valves and coronary vessels, the aorta and every named artery and vein of the head, trunk and limbs.

**Use it here: [samplesize1.com/tools/heart-atlas](https://samplesize1.com/tools/heart-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 81 parts anatomy courses teach by name (the four chambers, the four valves, the coronary arteries and cardiac veins, the aorta and its branches, the venae cavae, the pulmonary vessels, the carotids and jugulars, the circle of Willis, and the main arteries and veins of the arm and leg), or all 250 vessels, branches and leaflets in the model
- The whole body or one area at a time: the heart (chambers, valves, coronary vessels, great vessels); head and neck (neck, face and scalp, brain); torso (chest, abdomen, pelvis); arm (shoulder and arm, forearm and hand); leg (hip and thigh, lower leg and foot)
- **Study** each vessel's name, where it comes from, what it supplies or drains and why it matters in the clinic
- **Practice**: find each vessel; misses come back a few questions later until you get them right
- **Test**: every vessel once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Textbook colours: arteries red, veins blue, the portal system purple; pulmonary arteries blue and pulmonary veins red for the blood they carry
- **Layers**: All, Arteries (veins hidden) or Valves (only the inside of the heart)
- Small vessels are thin, so clicks are forgiving: a click a little beside one still lands on it
- The skeleton and brain as a see-through frame; clicking one names it
- Hints on or off: names that say what the vessel does ("Radial artery (the wrist pulse)") or anatomical names only
- Esc clears the selection; X-ray and peel modes reach vessels under others
- Voice commands ("heart", "left arm", "brain", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `heart.glb` | The 3D model: the heart and vessels, plus the skeleton and brain |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`heart.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Vessels are drawn at least 0.8 mm in radius for visibility, with a fatter invisible tube around the thin ones for clicking. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
