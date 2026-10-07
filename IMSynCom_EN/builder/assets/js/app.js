(() => {
  const descriptions = {
    glv: "Construct communities through facilitative or inhibitory interspecies relationships to explore species interactions and community dynamics.",
    gcrm: "Construct communities through uptake and production relationships among species, resources, and metabolites to explore resource competition and cross-feeding."
  };

  const tabs = Array.from(document.querySelectorAll(".model-tab"));
  const panels = Array.from(document.querySelectorAll(".model-panel"));
  const description = document.getElementById("model-description");

  function selectModel(model, updateHash = true) {
    tabs.forEach((tab) => {
      const selected = tab.dataset.model === model;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });

    panels.forEach((panel) => {
      const selected = panel.id === `panel-${model}`;
      panel.classList.toggle("active", selected);
      panel.hidden = !selected;
    });

    description.textContent = descriptions[model];
    document.title = `IMSynCom · SynCom Builder · ${model === "glv" ? "gLV" : "gCRM"}`;

    if (updateHash && history.replaceState) {
      history.replaceState(null, "", `#${model}`);
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectModel(tab.dataset.model));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const next = tabs[(index + offset + tabs.length) % tabs.length];
      selectModel(next.dataset.model);
      next.focus();
    });
  });

  const initial = location.hash.slice(1).toLowerCase();
  selectModel(initial === "gcrm" ? "gcrm" : "glv", false);
})();
