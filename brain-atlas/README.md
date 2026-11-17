# Brain Atlas

Learn the parts of the human brain on an interactive 3D model.

**Use it here: [samplesize1.com/tools/brain-atlas](https://samplesize1.com/tools/brain-atlas/)**

**In beta.** Made by [@samplesize_1](https://www.instagram.com/samplesize_1/), following [Bone Atlas](../bone-atlas/) and [Muscle Atlas](../muscle-atlas/).

## What it does

- The 46 parts of the brain an intro anatomy course asks you to know (lobes, landmark gyri and sulci, basal nuclei, limbic structures, thalamus, hypothalamus, ventricles, brainstem, cerebellum), or all 114 in the model (every gyrus and sulcus, the lobules of the cerebellum and more)
- One region at a time, divided the way textbooks divide it: cerebral cortex, subcortical structures, diencephalon, brainstem, cerebellum and ventricles. The whole brain stays on screen, with the rest in grey, so you always see where a region sits
- Colour-coded like a textbook diagram: each lobe its own colour
- **Study** each part's name and what it does
- **Practice**: find each part; misses come back a few questions later until you get them right
- **Test**: every part once, timed, no help, with your best score saved
- **Name it**: Practice and Test can also ask the other way round. One piece is shown on its own and you type its name: clues in Practice (its length, its first letter, then the name), close spellings count. Wide screens start on it, phones on Find it; the Questions switch in Settings changes it
- Eight views, one per region (cortex, subcortical structures, diencephalon, brainstem, cerebellum, ventricles) plus the whole brain and the deep structures together: each shows its own parts solid inside a see-through outline of the brain, the way textbooks draw them
- Every part has a home view (its region on its own, from the side it is best seen from, or its half of the brain seen from the midline) that Study goes to when it shows the part; a practice question opens no more than is needed to click the answer
- Hints on or off: names with what a part does or is known as, like "Precentral gyrus (primary motor cortex)", or anatomical names only
- X-ray and peel modes to reach parts underneath others
- Voice commands ("cerebellum", "deep structures", "ventricles", "whole brain") in Chrome, Edge and Safari
- Progress and best scores stay in your browser: no account, nothing is sent anywhere

## Files

This atlas is one folder of [Anatomy Atlas](../README.md) and runs on the engine the atlases share, in [`atlas-engine/`](../atlas-engine/). To run it on your computer, see [Run them yourself](../README.md#run-them-yourself).

| File | What it is |
| --- | --- |
| `index.html` | The page, and the settings that make it this atlas (zoom areas, where to look from, voice words) |
| `views.js` | What only this atlas does: looking inside the brain, and each part's home view |
| `data.js` | Everything the atlas teaches: regions, names, notes, translations |
| `brain.glb` | The 3D brain model |

## Licences and credits

- **Code**: MIT, see [LICENSE](../LICENSE).
- **3D model** (`brain.glb`): from [Z-Anatomy](https://github.com/Z-Anatomy/The-blend), based on [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/desc.html) © The Database Center for Life Science, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The cortex follows the Destrieux atlas's division into gyri and sulci. The translucent shell used by the see-through views is computed from the model and is part of `brain.glb`. If you reuse or change the model, keep this credit and share it under the same licence.
- **three.js**: MIT, see [licenses/three.js.txt](../licenses/three.js.txt).

## Updates and feedback

This folder is copied automatically from [samplesize1.com](https://samplesize1.com/tools/) whenever the atlas changes, so edits made directly here would be overwritten. Found a wrong label, a bug, or have an idea? [Open an issue](https://github.com/SampleSize1/Anatomy-Atlas/issues) and say which atlas it's about.
