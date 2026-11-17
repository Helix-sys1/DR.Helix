// Brain Atlas: what only this atlas does. The rest is the shared atlas engine (../atlas-engine/atlas.js), which the
// page starts with `extend: views`. The engine hands this file what it may use (api) and calls the functions returned
// at the bottom at fixed points: when it makes a piece, works out what is drawn, is about to show or ask about a
// part, gets a voice phrase, and so on.
//
// Three things live here:
//  - The see-through brain: a zoom area (the page's `zooms`: one per region of the map, plus the deep structures
//    together) shows its own parts solid and the rest of the brain as a hollow outline.
//  - Home views: every structure has a view where it is in plain sight: its own region, from the side set in data.js
//    (the unit's `view`). Showing a structure opens it.
//  - Sulci: a selected groove is drawn a little toward the viewer, and a click on the edge of a groove picks it.

export function views(api) {
  const { BONE, THREE, UNIT, VIEW_DIRS, ZOOMS, applyVisibility, bones, fitDistance, flyTo, inSide, inView, onScreen, renderZoom, scopeSphere, setView, state, studyPick, zoomDir, zoomed } = api;
  // (this changes while the atlas runs, so it is read and set through api each time: autoView)

  /* ---------------- the see-through brain ---------------- */
  // The brain's outer surface as a translucent shell (one smooth mesh, built from the whole model). It is drawn round
  // every zoom area but the whole brain, so what the area leaves out still shows as an outline: where the cerebellum
  // is when only the brainstem is solid, and so on. It is never cut in half: with one side of a region shown, the
  // other side is part of the outline.
  let shellMesh = null;
  // The shell is only drawn over the parts of the brain that are not: in the Cortex view the cortex is solid, so the
  // shell shows just the brainstem and cerebellum; with only the left half of the cerebellum shown, its right half.
  // For that, every point of the shell knows which region lies under it and on which side (worked out once, when the
  // model loads: the region of the nearest piece, found through a coarse grid of the pieces' points).
  let shellRegion = null, shellRegions = [];   // per shell point: region number * 2, + 1 on the right side; -1 = nothing near
  function mapShell() {
    const CELL = 0.004, key = (x, y, z) => (Math.floor(x / CELL) + 512) + (Math.floor(y / CELL) + 512) * 1024 + (Math.floor(z / CELL) + 512) * 1048576;
    const grid = new Map(), v = new THREE.Vector3();
    shellRegions = [...new Set([...bones.values()].map(r => r.data.region))];
    for (const r of bones.values()) {
      const pos = r.mesh.geometry.attributes.position, region = shellRegions.indexOf(r.data.region);
      for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(r.mesh.matrixWorld); const k = key(v.x, v.y, v.z); if (!grid.has(k)) grid.set(k, region); }
    }
    const pos = shellMesh.geometry.attributes.position;
    shellRegion = new Int8Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).applyMatrix4(shellMesh.matrixWorld);
      let found = -1;
      // look in the point's own cell, then in wider and wider boxes of cells round it (up to 2.4 cm away)
      for (let n = 0; n <= 6 && found < 0; n++) {
        let best = Infinity;
        for (let a = -n; a <= n; a++) for (let b = -n; b <= n; b++) for (let c = -n; c <= n; c++) {
          if (Math.max(Math.abs(a), Math.abs(b), Math.abs(c)) !== n) continue;
          const g = grid.get(key(v.x + a * CELL, v.y + b * CELL, v.z + c * CELL));
          if (g !== undefined && a * a + b * b + c * c < best) { best = a * a + b * b + c * c; found = g; }
        }
      }
      shellRegion[i] = found < 0 ? -1 : found * 2 + (v.x < 0 ? 1 : 0);   // (the brain's left is +x)
    }
    shellMesh.geometry.setAttribute('aShow', new THREE.BufferAttribute(new Float32Array(pos.count).fill(1), 1));
  }
  const hollow = () => state.view !== 'all' && ZOOMS.some(z => z.key === state.view);   // (not the lobes reached by voice: they are the solid brain, zoomed in)
  const homeHide = new Set();   // units hidden by the home view of the structure being shown (a unit's `hide` in the data: what encloses it)
  const homeShow = new Set();   // units kept in view for the structure being shown or asked about, whatever the zoom area leaves out
  let autoSet = false;          // the current zoom area / side was set by a home view (not by the person): undone for the next question

  function setHomeSets(hide, show) {
    const same = (a, b) => a.size === b.length && b.every(k => a.has(k));
    if (same(homeHide, hide) && same(homeShow, show)) return false;
    homeHide.clear(); hide.forEach(k => homeHide.add(k)); homeShow.clear(); show.forEach(k => homeShow.add(k));
    applyVisibility(); renderZoom(); return true;
  }

  // A structure's home zoom area: its region's, unless its unit names another (`zoom` in the data: the insula and
  // Heschl's gyri are cortex, but they lie under other cortex, so they are shown in the deep view)
  const homeZoom = (d) => UNIT[d.unit].zoom || d.region;
  // The least a question has to open for the structure to be clicked: nothing for what lies on the outside of the brain
  // (so a question never narrows the answer down: picking a region to look at is for the person to do, with the zoom
  // areas), the deep view for what the cortex covers, the ventricles' own view for them.
  const INSIDE = { subcortical: 'deep', dience: 'deep', ventricles: 'ventricles' };
  const reachIn = (d) => UNIT[d.unit].zoom || INSIDE[d.region] || 'all';

  // Selecting a structure in Study (a click on it, or the first one when Study starts) never changes the view: which
  // parts are solid and which are outline changes only when a part of the map or a view button is chosen, or when an
  // arrow key or a search goes to a structure (showBones, below). The one exception is a structure that isn't drawn in
  // the current view at all (Study starting while another region is being looked at): it gets its own.
  function keepInView(ids) {
    const recs = [...ids].map(id => bones.get(id)).filter(Boolean);
    if (!recs.length) return;
    const units = [...new Set(recs.map(r => r.data.unit))];
    if (recs.some(r => r.mesh.visible)) { setHomeSets([...homeHide], units); return; }   // (what was kept in view for the last selection goes; nothing else moves)
    setView(homeZoom(recs[0].data), 'both', false);
    setHomeSets(UNIT[recs[0].data.unit].hide || [], units);
    autoSet = true;
  }
  // A question: make sure the structure asked about can be clicked. If it can't be in the current view, go to the least
  // that makes it reachable, and hide what encloses it (the midbrain round the red nucleus). This counts as set by the
  // home view, so the next question undoes it.
  function openForQuestion(ids) {
    const recs = [...ids].map(id => BONE[id]).filter(Boolean);
    if (!recs.length) return;
    const d = recs[0], need = reachIn(d);
    let changed = false;
    const drawn = recs.every(x => inView(x) || (state.view === need && inSide(x, state.viewSide)));
    if (!drawn || (need !== 'all' && state.view === 'all')) { setView(need, 'both', false); changed = true; }
    if (setHomeSets(UNIT[d.unit].hide || [], [...new Set(recs.map(x => x.unit))])) changed = true;
    if (changed) autoSet = true;
  }
  function resetAutoView() {
    autoSet = false;
    homeHide.clear(); homeShow.clear();
    if (state.view !== 'all' || state.viewSide !== 'both') setView('all', 'both', false); else { applyVisibility(); renderZoom(); }
  }

  /* ---------------- home views ---------------- */
  /* Every structure has one, where it is in plain sight: its region alone inside the see-through brain, seen from one
     side ('lateral' is its own side), or its half of the brain seen from the midline ('medial'), with the parts that
     enclose it hidden. Showing a structure (a Study step, a practice reveal, a search) applies its home view once;
     nothing is hidden or shown while the camera then moves. The camera only moves when the view changes or the
     structure is off screen, so a view you turned by hand is kept between structures that share it. */
  const sideOf = (r) => r.data.side === 'L' ? 'left' : r.data.side === 'R' ? 'right' : null;
  function homeView(members, focus) {
    const f = focus || members[0], u = UNIT[f.data.unit];
    // A left + right pair is shown on the left (the two sides mirror each other, so the view shouldn't jump from one to
    // the other between structures), unless a side was asked for: the reveal after a wrong click is on the side clicked.
    const own = (focus && sideOf(focus)) || 'left', zoom = homeZoom(f.data), hide = u.hide || [];
    // the medial view keeps the structure's half of the brain, seen from the midline (VIEW_DIRS.left puts the camera on the left)
    if (u.view === 'medial') return { zoom, side: own, dir: own === 'left' ? 'right' : 'left', hide };
    return { zoom, side: 'both', dir: u.view === 'lateral' ? own : u.view, hide };
  }
  let whole = 0;   // the radius of the whole brain, worked out once
  function wholeRadius() {
    if (!whole) { const box = new THREE.Box3(); for (const r of bones.values()) box.union(r.box); whole = box.getBoundingSphere(new THREE.Sphere()).radius; }
    return whole;
  }
  // How much to keep in frame round a sphere: in the see-through brain at least about half the brain, so its outline
  // still reads as a landmark
  const frameRadius = (r) => hollow() ? Math.max(r, wholeRadius() * 0.55) : Math.max(r, zoomed() ? 0.02 : 0);
  // Frame the zoom area (a zoom chip, Reset view, a new part of the map)
  function frameSection(dir) {
    api.autoView = '';
    const s = scopeSphere();
    flyTo(s.center, fitDistance(frameRadius(s.radius)), dir || zoomDir());
  }
  // Bring the structure(s) being shown into view in their home view.
  function showBones(members, focus) {
    const h = homeView(members, focus), f = focus || members[0];
    if (state.view !== h.zoom || state.viewSide !== h.side) setView(h.zoom, h.side, false);
    setHomeSets(h.hide, [...new Set(members.map(r => r.data.unit))]);
    autoSet = true;
    // a small structure off the cortex (the pineal gland, a commissure, a geniculate body) is put in the middle of the
    // frame; a part of the cortex is always shown on the whole hemisphere, so you see where on the brain it is
    const sph = scopeSphere(h.zoom, h.side), own = new THREE.Box3();
    const lookSide = h.side !== 'both' ? h.side : (h.dir === 'left' || h.dir === 'right') ? h.dir : 'both';
    for (const r of members) if (inSide(r.data, lookSide)) own.union(r.box);
    if (own.isEmpty()) for (const r of members) own.union(r.box);
    const ms = own.getBoundingSphere(new THREE.Sphere()), close = f.data.region !== 'cortex' && ms.radius < wholeRadius() * 0.25;
    const id = [h.zoom, h.side, h.dir, h.hide.join(',')].join('|') + (close ? '|' + f.data.unit : '');
    if (id === api.autoView && onScreen(members, focus)) return;
    flyTo(close ? ms.center : sph.center, fitDistance(frameRadius(close ? ms.radius * 2.2 : sph.radius)), VIEW_DIRS[h.dir]);
    api.autoView = id;
  }

  /* ---------------- sulci ---------------- */
  // A sulcus is the cortex lining a groove, mostly covered by the gyri on either side. When one is selected it is drawn
  // a few millimetres toward the viewer (opaque, not see-through), so it shows as a glowing band along its groove, the
  // way diagrams draw sulci. Clicks use the same allowance (pickFrom, below).
  const SULCUS_LIFT = 0.01;    // metres: how far a selected sulcus is drawn toward the viewer
  const isSulcus = (r) => UNIT[r.data.unit].kind === 'sulcus';
  const sulci = [];

  /* ---------------- what the engine calls ---------------- */
  return {
    // a piece has been made: its box (for framing a close-up snugly), and for a sulcus the lift
    record(rec) {
      rec.box = new THREE.Box3().setFromBufferAttribute(rec.mesh.geometry.attributes.position).applyMatrix4(rec.mesh.matrixWorld);
      const mat = rec.mat;
      mat.userData.lift = { value: 0 };
      if (!isSulcus(rec)) return;
      sulci.push(rec);
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uLift = mat.userData.lift;
        sh.vertexShader = sh.vertexShader.replace('void main() {', 'uniform float uLift;\nvoid main() {')
          .replace('#include <fog_vertex>', '#include <fog_vertex>\n\tgl_Position = projectionMatrix * ( mvPosition + vec4( 0.0, 0.0, uLift, 0.0 ) );');
      };
      mat.customProgramCacheKey = () => 'sulcus-lift';
    },
    // the model has loaded: the shell
    model(root) {
      root.traverse((o) => { if (o.isMesh && o.name === 'shell') shellMesh = o; });
      if (!shellMesh) { console.warn('No shell mesh in the model'); return; }
      const m = new THREE.MeshStandardMaterial({ color: 0xd8cfc6, roughness: 0.55, metalness: 0, envMapIntensity: 0.6,
        transparent: true, opacity: 0.28, depthWrite: false, side: THREE.FrontSide });
      // more opaque where the surface turns away from the eye, so the outline reads and the middle stays clear
      // ...and nothing where the part of the brain under it is drawn solid (aShow, set in visibility below)
      m.onBeforeCompile = (sh) => {
        sh.vertexShader = sh.vertexShader.replace('void main() {', 'attribute float aShow;\nvarying float vShow;\nvoid main() {\n\tvShow = aShow;');
        sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'varying float vShow;\nvoid main() {').replace('#include <color_fragment>',
          '#include <color_fragment>\n\tfloat shellF = 1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition)));\n\tdiffuseColor.a *= ( 0.45 + 1.4 * pow(shellF, 2.0) ) * smoothstep( 0.35, 0.65, vShow );');
      };
      m.customProgramCacheKey = () => 'brain-shell';
      shellMesh.material = m; shellMesh.renderOrder = 10; shellMesh.visible = false;
      mapShell();
    },
    // Is this piece drawn? Not if the home view of the structure being shown hides it (the midbrain round the red
    // nucleus); and the structure being shown or asked about is drawn whatever region the zoom area leaves out. The
    // Side control always holds: with the left side chosen, only the left one of a pair is drawn, selected or not.
    piece: (r) => { const kept = r.glow || homeShow.has(r.data.unit); return { hidden: !kept && homeHide.has(r.data.unit), shown: kept && inSide(r.data, state.viewSide) }; },
    // ...and the see-through shell, over everything that isn't
    visibility() {
      if (!shellMesh) return;
      shellMesh.visible = hollow();
      if (!shellMesh.visible || !shellRegion) return;
      // one side of a region counts as solid when most of its pieces are drawn (one structure kept in view doesn't make
      // it so); a piece on the midline counts for both sides
      const drawn = new Array(shellRegions.length * 2).fill(0), all = drawn.slice();
      for (const r of bones.values()) {
        const g = shellRegions.indexOf(r.data.region) * 2;
        for (const side of r.data.side === 'L' ? [0] : r.data.side === 'R' ? [1] : [0, 1]) { all[g + side]++; if (r.mesh.visible) drawn[g + side]++; }
      }
      const show = shellMesh.geometry.attributes.aShow;
      for (let i = 0; i < shellRegion.length; i++) { const g = shellRegion[i]; show.array[i] = g >= 0 && drawn[g] * 2 > all[g] ? 0 : 1; }
      show.needsUpdate = true;
    },
    // What is being shown has changed. A sulcus is lifted when the selection is a sulcus itself (not a lobe that happens
    // to contain sulci). The structure being shown is always drawn, even when the zoom area leaves its region out, so
    // what is drawn has to be worked out again.
    glow(recs) {
      const lift = recs.length > 0 && recs.every(isSulcus);
      for (const r of sulci) r.mat.userData.lift.value = lift && r.glow ? SULCUS_LIFT : 0;
      if (!recs.length && state.mode === 'study') homeShow.clear();   // Esc in Study: nothing is kept in view any more
      return true;
    },
    // A click: the nearest part under the cursor, unless a groove lies within 8 mm behind it (a sulcus is mostly covered
    // by the gyri either side), or a much smaller part lies within 2.5 mm
    pickFrom(hits) {
      const first = hits[0].object.userData.rec;
      if (first) for (const h of hits.slice(1)) {
        const depth = h.distance - hits[0].distance, r = h.object.userData.rec;
        if (depth > 0.008) break;
        if (!r || r === first) continue;
        const groove = isSulcus(r) && !isSulcus(first);
        if (groove || (depth < 0.0025 && r.radius < first.radius * 0.6)) return h.object;
      }
      return null;
    },
    // anything a home view hid or kept counts as zoomed in (Esc and "whole brain" undo it)
    zoomed: () => homeHide.size > 0 || homeShow.size > 0,
    zoomOut() { resetAutoView(); frameSection(); },
    // The person picked a zoom area or a side themselves: it is shown as it is. Nothing a home view hid or kept carries
    // over (a part that is selected stays in view while it is selected; after Esc it goes with the rest of its region).
    setView() { autoSet = false; homeHide.clear(); homeShow.clear(); },
    ensureInView: keepInView,
    // between questions: a view opened to show the last answer goes away; one the person chose stays...
    between() { if (autoSet) resetAutoView(); },
    // ...and a question on a structure the cortex covers opens the deep view, so it can be clicked
    ask: openForQuestion,
    showBones,
    frameSection,
    // a search result: the structure, in its home view (on the left)
    searchPick(u, recs) { studyPick(recs.find(r => sideOf(r) !== 'right') || recs[0]); showBones(recs); },
    // voice: "whole brain" also undoes what a home view hid or kept
    voiceDo(cmd) { if (cmd.key === 'all' && zoomed()) resetAutoView(); return false; },
    // for the tests
    handles: { homeView, resetAutoView, homeHide, homeShow },
  };
}
