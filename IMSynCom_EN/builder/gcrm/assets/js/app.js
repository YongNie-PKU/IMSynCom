(function () {
  "use strict";

  const COLORS = ["#4d8c8a", "#d86d5b", "#c49a45", "#536f91", "#8b6b87", "#6f8f58"];
  const TYPE_LABEL = { species: "Species", resource: "Resource", metabolite: "Metabolite" };
  const state = {
    nodes: [
      { id: "s1", type: "species", name: "Species 1", x: 235, y: 165, value0: 0.12, m: 0.05, color: COLORS[0] },
      { id: "s2", type: "species", name: "Species 2", x: 570, y: 165, value0: 0.10, m: 0.04, color: COLORS[1] },
      { id: "r1", type: "resource", name: "Resource 1", x: 400, y: 55, value0: 1.2, color: COLORS[2] },
      { id: "m1", type: "metabolite", name: "Metabolite 1", x: 400, y: 315, value0: 0.05, color: "#b96559" }
    ],
    edges: [
      { id: "e1", type: "uptake", source: "r1", target: "s1", c: 0.55, Y: 0.65 },
      { id: "e2", type: "uptake", source: "r1", target: "s2", c: 0.42, Y: 0.60 },
      { id: "e3", type: "produce", source: "s1", target: "m1", yields: { r1: 0.18 } },
      { id: "e4", type: "uptake", source: "m1", target: "s2", c: 0.32, Y: 0.48 }
    ],
    selectedNode: "s1",
    selectedEdge: null,
    mode: "edit",
    connectFrom: null,
    tab: "equations",
    tEnd: 40,
    dt: 0.04,
    result: null,
    status: "Drag nodes; click a node or arrow to edit parameters.",
    drag: null,
    moved: false
  };

  const app = document.getElementById("app");
  const fmt = n => {
    if (!Number.isFinite(n)) return "—";
    if (Math.abs(n) >= 1000 || (Math.abs(n) > 0 && Math.abs(n) < 0.001)) return n.toExponential(2);
    return Number(n.toFixed(4)).toString();
  };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const sub = s => `<span class="math-symbol">${s}</span>`;
  const nodesOf = type => state.nodes.filter(n => n.type === type);
  const quantityNodes = () => state.nodes.filter(n => n.type !== "species");
  const node = id => state.nodes.find(n => n.id === id);
  const indexOfType = n => nodesOf(n.type).findIndex(x => x.id === n.id) + 1;
  const indexOfQuantity = n => quantityNodes().findIndex(x => x.id === n.id) + 1;
  const variable = n => n.type === "species" ? `X<sub>${indexOfType(n)}</sub>` : `Q<sub>${indexOfQuantity(n)}</sub>`;
  const uptakeEdge = (quantityId, speciesId) => state.edges.find(e => e.type === "uptake" && e.source === quantityId && e.target === speciesId);
  const validConversionInputs = e => quantityNodes().filter(q => q.id !== e.target && uptakeEdge(q.id, e.source));
  function conversionYield(e, inputId) {
    if (e.yields && Object.prototype.hasOwnProperty.call(e.yields, inputId)) return Number(e.yields[inputId]) || 0;
    if (e.input === inputId && Number.isFinite(Number(e.D))) return Number(e.D);
    return 0;
  }
  function setConversionYield(e, inputId, value) {
    if (!e.yields) e.yields = {};
    e.yields[inputId] = Math.max(0, Number(value) || 0);
    delete e.input;
    delete e.D;
  }

  function headerHTML() {
    return `
      <nav class="platform-nav">
        <a class="home-tag" href="../index.html">← Back to IMSynCom Home</a>
        <span class="platform-name">Integrated Modeling Platform for Synthetic Microbial Communities</span>
      </nav>
      <header class="model-header">
        <div class="brand">
          <img class="brand-logo" src="./image/logo.png" alt="IMSynCom Logo">
          <div class="brand-copy">
            <div class="brand-platform">IMSynCom · BLOCKS</div>
            <h1>Visual Programming for the Generalized Consumer–Resource Model <span class="version">v1.4</span></h1>
            <div class="subtitle">Graphical programming for generalized Consumer–Resource Models</div>
            <div class="funding">Supported by the National Key R&D Program of China (2021YFA0910300)</div>
          </div>
        </div>
        <div class="header-side">
          <div class="header-formula">
            u<sub>iα</sub> = c<sub>iα</sub>Q<sub>α</sub><br>
            dX<sub>i</sub>/dt = X<sub>i</sub>[Σ<sub>α</sub>Y<sub>iα</sub>u<sub>iα</sub> − m<sub>i</sub>]<br>
            dQ<sub>β</sub>/dt = −Σ<sub>i</sub>X<sub>i</sub>u<sub>iβ</sub> + Σ<sub>i,α≠β</sub>D<sub>iβα</sub>X<sub>i</sub>u<sub>iα</sub>
          </div>
          <div class="header-status">${esc(state.status)}</div>
        </div>
      </header>
      <div class="toolbar">
        <div class="model-summary">
          <strong>Blocks gCRM</strong>
          <span>${nodesOf("species").length} species · ${nodesOf("resource").length}  Resource · ${nodesOf("metabolite").length}  Metabolite · ${state.edges.length}  edges</span>
        </div>
        <div class="header-actions">
          <button class="ghost-button" data-action="export">Export Model</button>
          <button class="primary-button" data-action="run">▶ Run Simulation</button>
        </div>
      </div>`;
  }

  function leftPanelHTML() {
    return `
      <aside class="left-panel">
        <div class="panel-heading">
          <div><span class="step">01</span><h2>Model Objects</h2></div>
          <div class="icon-buttons">
            <button class="icon-button" data-add="species" title="Add Species">Add Species</button>
            <button class="icon-button" data-add="resource" title="Add Resource">Add Resource</button>
            <button class="icon-button" data-add="metabolite" title="Add Metabolite">Add Metabolite</button>
          </div>
        </div>
        <div class="node-list">
          ${state.nodes.map(n => `
            <button class="node-row ${state.selectedNode === n.id ? "active" : ""}" data-node-list="${n.id}">
              <i class="node-swatch ${n.type}" style="background:${n.color}"></i>
              <span><strong>${esc(n.name)}</strong><small>${TYPE_LABEL[n.type]} · ${variable(n).replace(/<[^>]+>/g, "")}(0)=${fmt(n.value0)}</small></span>
              <span class="chevron">›</span>
            </button>`).join("")}
        </div>
        <div class="divider"></div>
        <div class="section-title">Canvas Tools</div>
        <div class="tool-grid">
          <button class="tool ${state.mode === "edit" ? "active" : ""}" data-mode="edit">
            <span class="tool-icon">↖</span><strong>Select</strong><small>Drag nodes; click an object to edit</small>
          </button>
          <button class="tool ${state.mode === "uptake" ? "active" : ""}" data-mode="uptake">
            <span class="tool-icon">→</span><strong>Uptake / Growth</strong><small>Resource or metabolite → species</small>
          </button>
          <button class="tool produce ${state.mode === "produce" ? "active" : ""}" data-mode="produce">
            <span class="tool-icon">↗</span><strong>Resource Transformation</strong><small>After uptake of Qα: species → metabolite Qβ</small>
          </button>
        </div>
        <div class="mini-help">
          <span>Instructions</span>
          <p>After selecting an edge tool, click the source and then the target. Bidirectional edges are drawn automatically on opposite sides of the center line.</p>
        </div>
        <button class="text-button" data-action="layout">Auto Layout</button>
      </aside>`;
  }

  function getEdgeGeometry(e) {
    const a = node(e.source), b = node(e.target);
    if (!a || !b) return null;
    let dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.max(1, Math.hypot(dx, dy));
    const ux = dx / len, uy = dy / len;
    const ra = a.type === "species" ? 35 : a.type === "resource" ? 35 : 34;
    const rb = b.type === "species" ? 35 : b.type === "resource" ? 35 : 34;
    const x1 = a.x + ux * ra, y1 = a.y + uy * ra;
    const x2 = b.x - ux * rb, y2 = b.y - uy * rb;
    const reverse = state.edges.some(x => x.id !== e.id && x.source === e.target && x.target === e.source);
    const bend = reverse ? 30 : 0;
    const px = -uy, py = ux;
    const cx = (x1 + x2) / 2 + px * bend;
    const cy = (y1 + y2) / 2 + py * bend;
    const lx = 0.25 * x1 + 0.5 * cx + 0.25 * x2;
    const ly = 0.25 * y1 + 0.5 * cy + 0.25 * y2;
    return { path: `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`, lx, ly };
  }

  function nodeSVG(n) {
    const selected = state.selectedNode === n.id && !state.selectedEdge;
    const connecting = state.connectFrom === n.id;
    let shape = "";
    if (n.type === "species") {
      shape = `
        <circle class="node-shape" r="34.3" fill="white" stroke="${n.color}" stroke-width="3">
        </circle>
        <circle cx="-19" cy="-19" r="5" fill="${n.color}" opacity=".18"></circle>
        <circle cx="19" cy="17" r="8" fill="${n.color}" opacity=".12"></circle>`;
    } else if (n.type === "resource") {
      shape = `<rect class="node-shape" x="-25" y="-25" width="50" height="50" rx="5" fill="white" stroke="${n.color}" stroke-width="3"></rect>`;
    } else {
      shape = `<polygon class="node-shape" points="0,-28 29,23 -29,23" fill="white" stroke="${n.color}" stroke-width="3" stroke-linejoin="round"></polygon>`;
    }
    const nameY = n.type === "metabolite" ? 6 : -2;
    const metaY = n.type === "metabolite" ? 18 : 12;
    return `
      <g class="node-group" transform="translate(${n.x} ${n.y})" data-node="${n.id}">
        ${(selected || connecting) ? `<circle class="node-ring" r="43"></circle>` : ""}
        ${shape}
        <text class="node-name" text-anchor="middle" y="${nameY}">${esc(n.name)}</text>
        <text class="node-meta" text-anchor="middle" y="${metaY}">${n.type === "species" ? "X" : n.type === "resource" ? "R" : "M"}₀=${fmt(n.value0)}</text>
      </g>`;
  }

  function canvasHTML() {
    const edgeSVG = state.edges.map(e => {
      const g = getEdgeGeometry(e);
      if (!g) return "";
      const color = e.type === "uptake" ? "#173f67" : "#c49a45";
      const output = e.type === "produce" ? node(e.target) : null;
      const conversionInputs = e.type === "produce" ? validConversionInputs(e) : [];
      const activeConversions = conversionInputs.filter(q => conversionYield(e, q.id) > 0);
      const label = e.type === "uptake"
        ? `c=${fmt(e.c)}, Y=${fmt(e.Y)}`
        : activeConversions.length === 1
          ? `Q${indexOfQuantity(activeConversions[0])}→${output ? `Q${indexOfQuantity(output)}` : "Q?"}, D=${fmt(conversionYield(e, activeConversions[0].id))}`
          : `${activeConversions.length || conversionInputs.length} inputs → ${output ? `Q${indexOfQuantity(output)}` : "Q?"}`;
      return `
        <g data-edge="${e.id}">
          <path class="edge-hit" d="${g.path}" data-edge-hit="${e.id}"></path>
          <path class="edge ${state.selectedEdge === e.id ? "selected" : ""}" d="${g.path}" stroke="${color}" stroke-width="2.2" marker-end="url(#arrow-${e.type})"></path>
          <g transform="translate(${g.lx} ${g.ly})">
            <rect class="edge-label-bg" x="-31" y="-9" width="62" height="18" rx="8"></rect>
            <text class="edge-label" text-anchor="middle" y="3" fill="${color}">${label}</text>
          </g>
        </g>`;
    }).join("");
    return `
      <section class="canvas-card">
        <div class="card-header">
          <div><span class="step">02</span><h2>Model Canvas</h2></div>
          <div class="canvas-header-actions">
            <div class="legend">
              <span><i class="legend-shape species"></i>Species</span>
              <span><i class="legend-shape resource"></i>Resource</span>
              <span><i class="legend-shape metabolite"></i>Metabolite</span>
            </div>
            <button class="clear-canvas-button" data-action="clear">Clear Canvas</button>
          </div>
        </div>
        <svg id="modelCanvas" class="model-canvas ${state.mode !== "edit" ? "connecting" : ""}" viewBox="0 0 800 380" preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.1" fill="#ded6ca"></circle>
            </pattern>
            <marker id="arrow-uptake" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#173f67"></path></marker>
            <marker id="arrow-produce" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#c49a45"></path></marker>
          </defs>
          <rect width="800" height="380" fill="url(#dot-grid)" rx="14"></rect>
          ${edgeSVG}
          ${state.nodes.map(nodeSVG).join("")}
        </svg>
        <div class="canvas-status"><span class="status-dot ${state.mode !== "edit" ? "active" : ""}"></span>${esc(state.status)}</div>
      </section>`;
  }

  function equationsHTML() {
    const uptakeDefinitions = state.edges.filter(e => e.type === "uptake").map(e => {
      const quantity = node(e.source), consumer = node(e.target);
      if (!quantity || !consumer) return "";
      return `<div class="equation-row resource"><span style="background:#173f67">u</span><p>u<sub>${indexOfType(consumer)},${indexOfQuantity(quantity)}</sub> = ${fmt(e.c)}${variable(quantity)}</p></div>`;
    }).join("");
    return uptakeDefinitions + state.nodes.map(n => {
      const idx = n.type === "species" ? indexOfType(n) : indexOfQuantity(n);
      let eq = "";
      if (n.type === "species") {
        const inputs = state.edges.filter(e => e.type === "uptake" && e.target === n.id);
        const terms = inputs.map(e => {
          const q = node(e.source);
          return `+ ${fmt(e.Y)}·u<sub>${idx},${indexOfQuantity(q)}</sub>`;
        }).join(" ");
        eq = `dX<sub>${idx}</sub>/dt = X<sub>${idx}</sub>[${terms || "0"} − ${fmt(n.m)}]`;
      } else {
        const consumers = state.edges.filter(e => e.type === "uptake" && e.source === n.id);
        const losses = consumers.map(e => {
          const consumer = node(e.target);
          return `− X<sub>${indexOfType(consumer)}</sub>u<sub>${indexOfType(consumer)},${idx}</sub>`;
        }).join(" ");
        const producers = state.edges.filter(e => e.type === "produce" && e.target === n.id);
        const gains = producers.flatMap(e => {
          const producer = node(e.source);
          if (!producer) return [];
          return validConversionInputs(e).map(input => {
            const D = conversionYield(e, input.id);
            return `+ ${fmt(D)}X<sub>${indexOfType(producer)}</sub>u<sub>${indexOfType(producer)},${indexOfQuantity(input)}</sub>`;
          });
        }).join(" ");
        eq = `dQ<sub>${idx}</sub>/dt = ${gains || "0"} ${losses}`;
      }
      return `<div class="equation-row ${n.type}"><span style="background:${n.color}">${idx}</span><p>${eq}</p></div>`;
    }).join("");
  }

  function checksHTML() {
    const checks = [];
    const species = nodesOf("species");
    if (!species.length) checks.push({ level: "warn", text: "The model contains no species and cannot be simulated." });
    else checks.push({ level: "ok", text: `Defined  ${species.length} species and their Initial Biomass and Mortality Rate.` });
    const noFood = species.filter(s => !state.edges.some(e => e.type === "uptake" && e.target === s.id));
    if (noFood.length) checks.push({ level: "warn", text: `${noFood.map(x => x.name).join(", ")}  has no uptake edge and will undergo mortality only.` });
    else if (species.length) checks.push({ level: "ok", text: "Every species is connected to at least one resource or metabolite." });
    const invalid = state.edges.some(e => e.type === "uptake"
      ? e.c < 0 || e.Y < 0
      : Object.values(e.yields || {}).some(D => !Number.isFinite(Number(D)) || Number(D) < 0));
    checks.push(invalid ? { level: "warn", text: "Negative edge parameters were detected; check c, Y, or D." } : { level: "ok", text: "All edge parameters satisfy the nonnegative constraints." });
    const invalidConversions = state.edges.filter(e => e.type === "produce").filter(e => !validConversionInputs(e).length);
    checks.push(invalidConversions.length
      ? { level: "warn", text: "A valid input uptake flux is not linked to the Resource Transformationedge; Specify the Species input actually taken upResource or Metabolite." }
      : { level: "ok", text: "All resource transformations are linked to input uptake fluxes; D can be set independently for each input, and metabolites cannot be produced without substrate uptake." });
    return checks.map(c => `<div class="check-item ${c.level}"><span>${c.level === "ok" ? "✓" : "!"}</span><p>${esc(c.text)}</p></div>`).join("");
  }

  function middleHTML() {
    return `
      <main class="center-column">
        ${canvasHTML()}
        <div class="lower-grid">
          <div class="model-card">
            <div class="tab-header">
              <button class="${state.tab === "equations" ? "active" : ""}" data-tab="equations">Generated Equations</button>
              <button class="${state.tab === "rules" ? "active" : ""}" data-tab="rules">Model Definition</button>
            </div>
            ${state.tab === "equations" ? `<div class="equation-list">${equationsHTML()}</div>` : `
              <div class="equation-list">
                <div class="equation-row"><span style="background:#17324d">X</span><p>Species grow by taking up resources or metabolites; each uptake edge defines the linear uptake flux u<sub>iα</sub>=c<sub>iα</sub>Q<sub>α</sub> and yield Y<sub>iα</sub>.</p></div>
                <div class="equation-row resource"><span style="background:#c49a45">Q</span><p>Resources and metabolites are represented uniformly as explicit substances Q. They can be taken up by consumers, and metabolites can also be produced by transforming previously taken-up inputs.</p></div>
                <div class="equation-row metabolite"><span style="background:#d86d5b">D</span><p>Each ‘species → output metabolite Q<sub>β</sub>’ edge lists all input Q<sub>α</sub>; D is specified separately for each input<sub>iβα</sub>, corresponding to the production flux D<sub>iβα</sub>X<sub>i</sub>u<sub>iα</sub>, thereby representing self-feeding, cross-feeding, and multistep transformations.</p></div>
              </div>`}
          </div>
          <div class="check-card">
            <div class="card-header compact"><div><span class="step">Check</span><h2>Model Inspector</h2></div></div>
            <div class="check-list">${checksHTML()}</div>
          </div>
        </div>
      </main>`;
  }

  function nodeFormHTML(n) {
    const idx = indexOfType(n);
    const symbol = n.type === "species" ? "X" : n.type === "resource" ? "R" : "M";
    return `
      <div class="parameter-form">
        <label class="field"><span>${TYPE_LABEL[n.type]}Name</span><input type="text" data-field="name" value="${esc(n.name)}"></label>
        <label class="field">
          <span><span>Initial${n.type === "species" ? "Biomass" : "Concentration"} ${sub(`${symbol}<sub>${idx}</sub>(0)`)}</span><em>${n.type === "species" ? "biomass" : "concentration"}</em></span>
          <div class="range-row"><input type="range" min="0" max="3" step="0.01" data-field="value0" value="${n.value0}"><input type="number" min="0" step="0.01" data-field="value0" value="${n.value0}"></div>
        </label>
        ${n.type === "species" ? `
          <label class="field">
            <span><span>Mortality / Loss Rate ${sub(`m<sub>${idx}</sub>`)}</span><em>time⁻¹</em></span>
            <div class="range-row"><input type="range" min="0" max="1" step="0.01" data-field="m" value="${n.m}"><input type="number" min="0" step="0.01" data-field="m" value="${n.m}"></div>
          </label>` : ""}
        <label class="color-field"><span>Node Color</span><input type="color" data-field="color" value="${n.color}"></label>
        <button class="danger-button" data-action="delete-node">Delete ${TYPE_LABEL[n.type]}</button>
      </div>`;
  }

  function edgeFormHTML(e) {
    const a = node(e.source), b = node(e.target);
    const ai = indexOfType(a), bi = indexOfType(b);
    if (e.type === "uptake") {
      const alpha = indexOfQuantity(a);
      return `
        <div class="parameter-form">
          <div class="relationship-title"><strong>${esc(a.name)}</strong><span>Uptake / Growth →</span><strong>${esc(b.name)}</strong></div>
          <label class="field">
            <span><span>Uptake Coefficient ${sub(`c<sub>${bi},${alpha}</sub>`)}</span><em>uptake</em></span>
            <div class="range-row"><input type="range" min="0" max="2" step="0.01" data-edge-field="c" value="${e.c}"><input type="number" min="0" step="0.01" data-edge-field="c" value="${e.c}"></div>
          </label>
          <label class="field">
            <span><span>Biomass Yield ${sub(`Y<sub>${bi},${alpha}</sub>`)}</span><em>yield</em></span>
            <div class="range-row"><input type="range" min="0" max="2" step="0.01" data-edge-field="Y" value="${e.Y}"><input type="number" min="0" step="0.01" data-edge-field="Y" value="${e.Y}"></div>
          </label>
          <button class="danger-button" data-action="delete-edge">Delete Edge</button>
        </div>`;
    }
    const validInputs = quantityNodes().filter(q => q.id !== b.id && uptakeEdge(q.id, a.id));
    const beta = indexOfQuantity(b);
    return `
      <div class="parameter-form">
        <div class="relationship-title"><strong>${esc(a.name)}</strong><span>Resource Transformation →</span><strong>${esc(b.name)}</strong></div>
        <div class="conversion-intro">
          <strong>Set Transformation Yields by Input Substance</strong>
          <small>The following inputs have uptake edges to ${esc(a.name)}; each D<sub>iβα</sub> is used independently in the calculation.</small>
        </div>
        ${validInputs.map(q => {
          const alpha = indexOfQuantity(q);
          const D = conversionYield(e, q.id);
          return `<label class="field conversion-field">
            <span><span>Q<sub>${alpha}</sub> ${esc(q.name)} → Q<sub>${beta}</sub> ${sub(`D<sub>${ai},${beta},${alpha}</sub>`)}</span><em>Qβ produced / Qα consumed</em></span>
            <div class="range-row"><input type="range" min="0" max="2" step="0.01" data-conversion-input="${q.id}" value="${D}"><input type="number" min="0" step="0.01" data-conversion-input="${q.id}" value="${D}"></div>
            <small>Production flux: D<sub>${ai},${beta},${alpha}</sub>X<sub>${ai}</sub>u<sub>${ai},${alpha}</sub></small>
          </label>`;
        }).join("") || `<div class="mini-help"><p>First create an ‘input resource/metabolite → ${esc(a.name)}’ uptake edge.</p></div>`}
        <button class="danger-button" data-action="delete-edge">Delete Edge</button>
      </div>`;
  }

  function rightPanelHTML() {
    const n = node(state.selectedNode);
    const e = state.edges.find(x => x.id === state.selectedEdge);
    return `
      <aside class="right-panel">
        <div class="panel-heading"><div><span class="step">03</span><h2>${e ? "Edge Parameters" : n ? `${TYPE_LABEL[n.type]} Parameters` : "Parameter Settings"}</h2></div></div>
        ${e ? edgeFormHTML(e) : n ? nodeFormHTML(n) : `<div class="mini-help"><p>Click a node or arrow on the canvas to edit its parameters.</p></div>`}
        <div class="divider"></div>
        <div class="section-title">Simulation Settings</div>
        <div class="two-fields">
          <label class="field"><span>Simulation Duration t</span><input type="number" min=".1" max="500" step="1" data-setting="tEnd" value="${state.tEnd}"></label>
          <label class="field"><span>Time Step Δt</span><input type="number" min=".001" max=".2" step=".01" data-setting="dt" value="${state.dt}"></label>
        </div>
        <button class="primary-button full" data-action="run">▶ Run Community Simulation</button>
      </aside>`;
  }

  function emptyResult() {
    return { times: [0], series: state.nodes.map(n => [n.value0]), warning: "" };
  }

  function chartHTML(result) {
    const species = nodesOf("species");
    const indices = species.map(s => state.nodes.findIndex(n => n.id === s.id));
    if (!species.length || !result.times.length) return `<div class="mini-help"><p>Add species and run the simulation to display dynamic curves.</p></div>`;
    const values = indices.flatMap(i => result.series[i]);
    const ymax = Math.max(0.001, ...values) * 1.08;
    const W = 640, H = 245, L = 42, R = 12, T = 14, B = 28;
    const pw = W - L - R, ph = H - T - B;
    const x = t => L + (t / Math.max(0.001, state.tEnd)) * pw;
    const y = v => T + ph - (v / ymax) * ph;
    const grid = [0,.25,.5,.75,1].map(f => {
      const yy = T + ph * (1 - f);
      return `<line class="chart-grid" x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}"></line><text x="${L-5}" y="${yy+3}" text-anchor="end">${fmt(ymax*f)}</text>`;
    }).join("");
    const paths = indices.map((idx, j) => {
      const pts = result.times.map((t, k) => `${k ? "L" : "M"}${x(t).toFixed(2)},${y(result.series[idx][k]).toFixed(2)}`).join(" ");
      return `<path d="${pts}" fill="none" stroke="${species[j].color}" stroke-width="2.2"></path>`;
    }).join("");
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${grid}<line class="chart-axis" x1="${L}" x2="${W-R}" y1="${T+ph}" y2="${T+ph}"></line>${paths}<text x="${W-R}" y="${H-6}" text-anchor="end">Time</text></svg>`;
  }

  function quantityChartHTML(result) {
    const quantities = state.nodes.filter(n => n.type !== "species");
    const indices = quantities.map(n => state.nodes.findIndex(x => x.id === n.id));
    if (!quantities.length || !result.times.length) {
      return `<div class="mini-help"><p>Add resources or metabolites and run the simulation to display concentration dynamics.</p></div>`;
    }
    const values = indices.flatMap(i => result.series[i] || []);
    const ymax = Math.max(0.001, ...values) * 1.08;
    const W = 640, H = 245, L = 42, R = 12, T = 14, B = 28;
    const pw = W - L - R, ph = H - T - B;
    const x = t => L + (t / Math.max(0.001, state.tEnd)) * pw;
    const y = v => T + ph - (v / ymax) * ph;
    const grid = [0,.25,.5,.75,1].map(f => {
      const yy = T + ph * (1 - f);
      return `<line class="chart-grid" x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}"></line><text x="${L-5}" y="${yy+3}" text-anchor="end">${fmt(ymax*f)}</text>`;
    }).join("");
    const paths = indices.map((idx, j) => {
      const series = result.series[idx] || [quantities[j].value0];
      const pts = result.times.map((t, k) => `${k ? "L" : "M"}${x(t).toFixed(2)},${y(series[k] ?? series[series.length - 1] ?? 0).toFixed(2)}`).join(" ");
      const dash = quantities[j].type === "metabolite" ? ` stroke-dasharray="7 4"` : "";
      return `<path d="${pts}" fill="none" stroke="${quantities[j].color}" stroke-width="2.2"${dash}></path>`;
    }).join("");
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${grid}<line class="chart-axis" x1="${L}" x2="${W-R}" y1="${T+ph}" y2="${T+ph}"></line>${paths}<text x="${W-R}" y="${H-6}" text-anchor="end">Time</text></svg>`;
  }

  function pieHTML(values, species) {
    const total = values.reduce((a,b) => a+b, 0);
    let offset = 0;
    const C = 2 * Math.PI * 60;
    const segs = values.map((v,i) => {
      const frac = total > 0 ? v / total : 0;
      const dash = frac * C;
      const s = `<circle class="pie-segment" cx="90" cy="90" r="60" stroke="${species[i].color}" stroke-dasharray="${dash} ${C-dash}" stroke-dashoffset="${-offset}"></circle>`;
      offset += dash;
      return s;
    }).join("");
    return `<svg class="pie" viewBox="0 0 180 180"><circle cx="90" cy="90" r="60"></circle>${segs}<text x="90" y="87" text-anchor="middle" style="font-size:9px;fill:#6d716f">Total Endpoint Biomass</text><text x="90" y="104" text-anchor="middle" style="font:700 15px Georgia;fill:#17324d">${fmt(total)}</text></svg>`;
  }

  function resultsHTML() {
    const result = state.result || emptyResult();
    const species = nodesOf("species");
    const endpoints = species.map(s => {
      const idx = state.nodes.findIndex(n => n.id === s.id);
      const arr = result.series[idx] || [s.value0];
      return arr[arr.length - 1] || 0;
    });
    const total = endpoints.reduce((a,b) => a+b, 0);
    const nonSpecies = state.nodes.filter(n => n.type !== "species");
    return `
      <section class="results-section">
        <div class="results-heading">
          <div><span class="step">04</span><div><h2>Simulation Results</h2><p>Displays species biomass, relative abundance, and resource and metabolite concentrations.</p></div></div>
          <div class="result-legend">${species.map(s => `<span><i style="background:${s.color}"></i>${esc(s.name)}</span>`).join("")}</div>
        </div>
        <div class="results-grid">
          <article class="result-card">
            <div class="result-title"><h3>Species Biomass Dynamics</h3><span>X<sub>i</sub>(t)</span></div>
            ${chartHTML(result)}
            ${result.warning ? `<div class="simulation-warning">! ${esc(result.warning)}</div>` : ""}
          </article>
          <article class="result-card">
            <div class="result-title"><h3>Endpoint Biomass and Relative Abundance</h3><span>X<sub>i</sub>(t<sub>end</sub>)</span></div>
            <div class="endpoint-layout">
              ${pieHTML(endpoints, species)}
              <div class="endpoint-list">
                ${species.map((s,i) => `<div class="endpoint-row"><i style="background:${s.color}"></i><span><strong>${esc(s.name)}</strong><small>Endpoint Biomass X = ${fmt(endpoints[i])}</small></span><b>${total > 0 ? fmt(100*endpoints[i]/total) : 0}%</b></div>`).join("") || "<small>No species</small>"}
              </div>
            </div>
          </article>
        </div>
        <article class="result-card quantity-dynamics-card">
          <div class="result-title">
            <h3>Resource and Metabolite Dynamics</h3>
            <span>Q<sub>q</sub>(t)</span>
          </div>
          <div class="quantity-legend">
            ${nonSpecies.map(n => `<span><i class="${n.type}" style="--series-color:${n.color}"></i>${esc(n.name)}</span>`).join("") || "<small>No resources or metabolites</small>"}
          </div>
          ${quantityChartHTML(result)}
        </article>
        <article class="result-card concentration-card">
          <div class="result-title"><h3>Endpoint Resource and Metabolite Concentrations</h3><span>Q<sub>q</sub>(t<sub>end</sub>)</span></div>
          <div class="concentration-grid">
            ${nonSpecies.map(n => {
              const idx = state.nodes.findIndex(x => x.id === n.id);
              const arr = result.series[idx] || [n.value0];
              return `<div class="concentration-item ${n.type}"><strong>${esc(n.name)}</strong><span>${fmt(arr[arr.length-1] || 0)}</span></div>`;
            }).join("") || "<small>No resources or metabolites</small>"}
          </div>
        </article>
      </section>`;
  }

  function render() {
    app.innerHTML = `<div class="app-shell">${headerHTML()}<div class="workspace">${leftPanelHTML()}${middleHTML()}${rightPanelHTML()}</div>${resultsHTML()}<footer><span>IMSynCom · Integrated Modeling Platform for Synthetic Microbial Communities</span><span>Graphics, equations, parameters, and simulation results remain consistent</span></footer></div>`;
    bind();
  }

  function setMode(mode) {
    state.mode = mode;
    state.connectFrom = null;
    state.status = mode === "edit"
      ? "Drag nodes; click a node or arrow to edit parameters."
      : mode === "uptake"
        ? "Uptake/Growth: Click a resource or metabolite first, then click a species."
        : "Resource Transformation: first click a species, then click the output metabolite. The right panel will list every input Qα taken up by that species, allowing each transformation yield D to be specified separately.";
    render();
  }

  function handleNodeClick(id) {
    if (state.moved) { state.moved = false; return; }
    const n = node(id);
    if (state.mode === "edit") {
      state.selectedNode = id;
      state.selectedEdge = null;
      state.status = `Selected ${n.name}; edit its parameters in the panel on the right.`;
      render();
      return;
    }
    if (!state.connectFrom) {
      const validStart = state.mode === "uptake" ? n.type === "resource" || n.type === "metabolite" : n.type === "species";
      if (!validStart) {
        state.status = state.mode === "uptake" ? "The source must be a resource or metabolite." : "The source of a resource-transformation edge must be a species.";
      } else {
        state.connectFrom = id;
        state.status = `Selected source ‘${n.name}’; now click the ${state.mode === "uptake" ? "target species" : "output metabolite"}.`;
      }
      render();
      return;
    }
    const start = node(state.connectFrom);
    const validEnd = state.mode === "uptake" ? n.type === "species" : n.type === "metabolite";
    if (!validEnd || start.id === n.id) {
      state.status = state.mode === "uptake" ? "The target must be a species." : "The target must be a metabolite.";
      render();
      return;
    }
    const exists = state.edges.some(e => e.type === state.mode && e.source === start.id && e.target === n.id);
    if (exists) {
      state.status = "An edge in this direction already exists.";
      state.connectFrom = null;
      render();
      return;
    }
    const e = state.mode === "uptake"
      ? { id: `e${Date.now()}`, type: "uptake", source: start.id, target: n.id, c: 0.3, Y: 0.5 }
      : (() => {
          const inputs = quantityNodes().filter(q => q.id !== n.id && uptakeEdge(q.id, start.id));
          if (!inputs.length) {
            state.connectFrom = null;
            state.status = `Cannot create the resource transformation: first connect an input resource or metabolite to ‘${start.name}’.`;
            return null;
          }
          return { id: `e${Date.now()}`, type: "produce", source: start.id, target: n.id, yields: Object.fromEntries(inputs.map((q, i) => [q.id, i === 0 ? 0.15 : 0])) };
        })();
    if (!e) { render(); return; }
    state.edges.push(e);
    state.selectedNode = null;
    state.selectedEdge = e.id;
    state.connectFrom = null;
    state.status = e.type === "produce"
      ? `Created ‘${start.name} → ${n.name}’ resource-transformation edge; D can be set separately for each input substance on the right.`
      : `Created ‘${start.name} → ${n.name}’ uptake edge.`;
    state.result = null;
    render();
  }

  function svgPoint(evt) {
    const svg = document.getElementById("modelCanvas");
    const rect = svg.getBoundingClientRect();
    return { x: (evt.clientX - rect.left) * 800 / rect.width, y: (evt.clientY - rect.top) * 380 / rect.height };
  }

  function bind() {
    app.querySelectorAll("[data-mode]").forEach(el => el.addEventListener("click", () => setMode(el.dataset.mode)));
    app.querySelectorAll("[data-node-list]").forEach(el => el.addEventListener("click", () => {
      state.mode = "edit"; state.selectedNode = el.dataset.nodeList; state.selectedEdge = null; render();
    }));
    app.querySelectorAll("[data-add]").forEach(el => el.addEventListener("click", () => addNode(el.dataset.add)));
    app.querySelectorAll("[data-tab]").forEach(el => el.addEventListener("click", () => { state.tab = el.dataset.tab; render(); }));
    app.querySelectorAll("[data-action]").forEach(el => el.addEventListener("click", () => action(el.dataset.action)));
    app.querySelectorAll("[data-field]").forEach(el => el.addEventListener("input", () => {
      const n = node(state.selectedNode);
      if (!n) return;
      n[el.dataset.field] = ["name","color"].includes(el.dataset.field) ? el.value : Math.max(0, Number(el.value) || 0);
      state.result = null;
      render();
    }));
    app.querySelectorAll("[data-edge-field]").forEach(el => el.addEventListener("input", () => {
      const e = state.edges.find(x => x.id === state.selectedEdge);
      if (!e) return;
      e[el.dataset.edgeField] = Math.max(0, Number(el.value) || 0);
      state.result = null;
      render();
    }));
    app.querySelectorAll("[data-conversion-input]").forEach(el => el.addEventListener("input", () => {
      const e = state.edges.find(x => x.id === state.selectedEdge && x.type === "produce");
      if (!e) return;
      setConversionYield(e, el.dataset.conversionInput, el.value);
      state.result = null;
      state.status = "The transformation yield from this input to the product has been updated independently.";
      render();
    }));
    app.querySelectorAll("[data-setting]").forEach(el => el.addEventListener("change", () => {
      state[el.dataset.setting] = Math.max(el.dataset.setting === "dt" ? .001 : .1, Number(el.value) || 1);
      render();
    }));
    app.querySelectorAll("[data-edge-hit]").forEach(el => el.addEventListener("click", evt => {
      evt.stopPropagation();
      state.mode = "edit"; state.selectedEdge = el.dataset.edgeHit; state.selectedNode = null; render();
    }));
    app.querySelectorAll("[data-node]").forEach(el => {
      el.addEventListener("pointerdown", evt => {
        evt.stopPropagation();
        const id = el.dataset.node;
        if (state.mode !== "edit") { handleNodeClick(id); return; }
        const p = svgPoint(evt), n = node(id);
        state.drag = { id, dx: p.x - n.x, dy: p.y - n.y, startX: p.x, startY: p.y };
        state.moved = false;
        el.setPointerCapture?.(evt.pointerId);
      });
      el.addEventListener("click", evt => { evt.stopPropagation(); if (state.mode === "edit" && !state.drag) handleNodeClick(el.dataset.node); });
    });
    const canvas = document.getElementById("modelCanvas");
    if (canvas) canvas.addEventListener("click", () => {
      if (state.mode === "edit") { state.selectedEdge = null; state.selectedNode = null; render(); }
    });
  }

  window.addEventListener("pointermove", evt => {
    if (!state.drag) return;
    const p = svgPoint(evt), n = node(state.drag.id);
    if (!n) return;
    const nx = Math.max(45, Math.min(755, p.x - state.drag.dx));
    const ny = Math.max(42, Math.min(338, p.y - state.drag.dy));
    if (Math.hypot(p.x - state.drag.startX, p.y - state.drag.startY) > 3) state.moved = true;
    n.x = nx; n.y = ny;
    const canvas = document.getElementById("modelCanvas");
    if (canvas) {
      canvas.querySelector(`[data-node="${n.id}"]`)?.setAttribute("transform", `translate(${n.x} ${n.y})`);
      state.edges.filter(e => e.source === n.id || e.target === n.id).forEach(e => {
        const g = getEdgeGeometry(e);
        const group = canvas.querySelector(`[data-edge="${e.id}"]`);
        if (!g || !group) return;
        group.querySelectorAll("path").forEach(pth => pth.setAttribute("d", g.path));
        group.querySelector("g")?.setAttribute("transform", `translate(${g.lx} ${g.ly})`);
      });
    }
  });
  window.addEventListener("pointerup", () => {
    if (!state.drag) return;
    const dragged = state.drag.id;
    state.drag = null;
    if (!state.moved) handleNodeClick(dragged);
  });

  function addNode(type) {
    const count = nodesOf(type).length + 1;
    const id = `${type[0]}${Date.now()}`;
    const pos = {
      species: { x: 170 + (count % 4) * 145, y: 150 + Math.floor(count / 4) * 90 },
      resource: { x: 160 + (count % 5) * 125, y: 55 },
      metabolite: { x: 160 + (count % 5) * 125, y: 315 }
    }[type];
    state.nodes.push({
      id, type, name: `${TYPE_LABEL[type]} ${count}`,
      x: Math.min(730, pos.x), y: Math.min(330, pos.y),
      value0: type === "species" ? .1 : type === "resource" ? 1 : 0,
      ...(type === "species" ? { m: .05 } : {}),
      color: COLORS[(state.nodes.length) % COLORS.length]
    });
    state.mode = "edit"; state.selectedNode = id; state.selectedEdge = null; state.result = null;
    state.status = `Added ${TYPE_LABEL[type]} ${count}.`;
    render();
  }

  function autoLayout() {
    ["resource","species","metabolite"].forEach((type,row) => {
      const list = nodesOf(type);
      list.forEach((n,i) => {
        n.x = 100 + (i + 1) * 600 / (list.length + 1);
        n.y = [60,185,315][row];
      });
    });
    state.status = "Applied the three-layer Resource—Species—Metabolite layout.";
    render();
  }

  function action(name) {
    if (name === "run") return runSimulation();
    if (name === "layout") return autoLayout();
    if (name === "clear") {
      state.nodes = []; state.edges = []; state.selectedNode = null; state.selectedEdge = null; state.result = null;
      state.mode = "edit"; state.status = "The canvas has been cleared; model objects can be added from the upper left."; render(); return;
    }
    if (name === "delete-node") {
      const id = state.selectedNode;
      state.nodes = state.nodes.filter(n => n.id !== id);
      state.edges = state.edges.filter(e => e.source !== id && e.target !== id);
      state.edges.filter(e => e.type === "produce").forEach(e => {
        if (e.yields) delete e.yields[id];
        if (e.input === id) { delete e.input; delete e.D; }
      });
      state.selectedNode = state.nodes[0]?.id || null; state.result = null; render(); return;
    }
    if (name === "delete-edge") {
      const removed = state.edges.find(e => e.id === state.selectedEdge);
      state.edges = state.edges.filter(e => e.id !== state.selectedEdge);
      if (removed?.type === "uptake") {
        state.edges.filter(e => e.type === "produce" && e.source === removed.target).forEach(e => {
          if (e.yields) delete e.yields[removed.source];
          if (e.input === removed.source) { delete e.input; delete e.D; }
        });
      }
      state.selectedEdge = null; state.result = null; render(); return;
    }
    if (name === "export") return exportModel();
  }

  function derivative(y) {
    const dy = Array(y.length).fill(0);
    const uptakeFlux = new Map();
    state.edges.filter(e => e.type === "uptake").forEach(e => {
      const si = state.nodes.findIndex(n => n.id === e.source);
      const ti = state.nodes.findIndex(n => n.id === e.target);
      if (si < 0 || ti < 0) return;
      const uptake = e.c * y[si] * y[ti];
      uptakeFlux.set(`${e.source}|${e.target}`, uptake);
      dy[si] -= uptake;
      dy[ti] += e.Y * uptake;
    });
    state.edges.filter(e => e.type === "produce").forEach(e => {
      const ti = state.nodes.findIndex(n => n.id === e.target);
      if (ti < 0) return;
      validConversionInputs(e).forEach(input => {
        const uptake = uptakeFlux.get(`${input.id}|${e.source}`) || 0;
        dy[ti] += conversionYield(e, input.id) * uptake;
      });
    });
    state.nodes.forEach((n,i) => { if (n.type === "species") dy[i] -= n.m * y[i]; });
    return dy;
  }

  function runSimulation() {
    if (!nodesOf("species").length) {
      state.status = "Add at least one species first."; render(); return;
    }
    const steps = Math.max(1, Math.ceil(state.tEnd / state.dt));
    if (steps > 250000) { state.status = "Too many integration steps; increase Δt or shorten the simulation duration."; render(); return; }
    let y = state.nodes.map(n => Math.max(0, n.value0));
    const times = [0], series = state.nodes.map((n,i) => [y[i]]);
    const every = Math.max(1, Math.floor(steps / 500));
    let warning = "";
    for (let step=1; step<=steps; step++) {
      const h = Math.min(state.dt, state.tEnd - (step-1)*state.dt);
      const k1 = derivative(y);
      const k2 = derivative(y.map((v,i) => Math.max(0, v + h*k1[i]/2)));
      const k3 = derivative(y.map((v,i) => Math.max(0, v + h*k2[i]/2)));
      const k4 = derivative(y.map((v,i) => Math.max(0, v + h*k3[i])));
      y = y.map((v,i) => Math.max(0, v + h*(k1[i]+2*k2[i]+2*k3[i]+k4[i])/6));
      if (y.some(v => !Number.isFinite(v) || v > 1e8)) {
        warning = "Numerical divergence occurred; reduce the parameter values or time-step size.";
        y = y.map(v => Number.isFinite(v) ? Math.min(v,1e8) : 0);
        break;
      }
      if (step % every === 0 || step === steps) {
        times.push(Math.min(state.tEnd, step*state.dt));
        y.forEach((v,i) => series[i].push(v));
      }
    }
    state.result = { times, series, warning };
    state.status = warning || "Simulation completed: species, resource, and metabolite dynamics and endpoint results were updated.";
    render();
    document.querySelector(".results-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function exportModel() {
    const data = { version: "IMSynCom Blocks gCRM v1.4", model: "multi-input-uptake-coupled-resource-transformation", nodes: state.nodes, edges: state.edges, simulation: { tEnd: state.tEnd, dt: state.dt } };
    const blob = new Blob([JSON.stringify(data,null,2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "IMSynCom-Blocks-gCRM-model.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    state.status = "The model has been exported as JSON file.";
    render();
  }

  render();
  runSimulation();
})();
