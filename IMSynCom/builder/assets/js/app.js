(() => {
  const descriptions = {
    glv: "通过物种间促进或抑制关系构建群落，适合学习种间相互作用与群落动态。",
    gcrm: "通过物种、资源和代谢物之间的摄取与产生关系构建群落，适合学习资源竞争与交叉喂养。"
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
