# Nerve Atlas

Learn the nerves of the human body on an interactive 3D model: the cranial nerves, the plexuses and every nerve of the limbs.

**Use it here: [samplesize1.com/tools/nerve-atlas](https://samplesize1.com/tools/nerve-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 50 nerves anatomy courses teach by name (the 12 cranial nerves, the trigeminal divisions, the spinal roots, the brachial plexus and the big nerves of the limbs), or all 127 nerves and branches in the model
- The whole body or one area at a time: cranial nerves, face and jaw; spinal cord and roots, chest, abdomen and pelvis; brachial plexus, shoulder and arm, forearm and hand; hip and thigh, lower leg, foot
- **Study** each nerve's name, where it comes from, what it supplies and how it commonly gets hurt
- **Practice**: find each nerve; misses come back a few questions later until you get them right
- **Test**: every nerve once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Nerves are thin, so clicks are forgiving: a click a little beside a nerve still lands on it
- The skeleton, brain, dural sac, eyeballs and inner ear as a see-through frame; clicking one names it
- Hints on or off: names that say what the nerve is for ("Ulnar nerve (funny-bone nerve)") or anatomical names only
- Esc clears the selection; X-ray and peel modes reach nerves under others
- Voice commands ("left arm", "head", "spine", "whole body") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, colours, voice words) |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `nerves.glb` | The 3D model: the nerves, plus the skeleton, brain, dural sac, eyes and inner ear |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`nerves.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Nerves are drawn at least 1 mm in radius for visibility, with a fatter invisible tube around each for clicking. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
