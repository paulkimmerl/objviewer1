(() => {
  // CSS als String (vereinfacht, klassisch, klein, grau, untereinander)
  const css = `
  #overlay-text {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 101;
    pointer-events: auto;

    font-family: Arial, sans-serif;
    font-weight: normal;
    font-size: 12px;
    color: #888;
    user-select: none;
    white-space: nowrap;
    line-height: 1.4;
  }
  #overlay-text div {
    margin-bottom: 6px;
  }
  #overlay-text span.label {
    font-weight: bold;
    margin-right: 5px;
  }
  #overlay-text span.value {
    font-weight: normal;
  }
  `;

  // CSS in <style> Tag injizieren
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // Overlay-HTML erstellen (jeder Wert in eigenem div für Untereinander)
  const overlayHTML = `
  <div id="overlay-text">
    <div><span class="label">Zoom:</span><span id="zoom-val" class="value">100%</span></div>
    <div><span class="label">FPS:</span><span id="fps-val" class="value">60</span></div>
    <div><span class="label">Interaction:</span><span id="interaction-val" class="value">On</span></div>
    <div><span class="label">Parameter:</span><span id="param-val" class="value">42</span></div>
  </div>`;

  // Overlay in Body einfügen
  document.body.insertAdjacentHTML('beforeend', overlayHTML);

  // Globale Funktion zum Aktualisieren
  window.updateOverlayText = function(zoom, fps, interaction, param) {
    const zoomEl = document.getElementById('zoom-val');
    const fpsEl = document.getElementById('fps-val');
    const interactionEl = document.getElementById('interaction-val');
    const paramEl = document.getElementById('param-val');
    if (zoomEl) zoomEl.textContent = zoom;
    if (fpsEl) fpsEl.textContent = fps;
    if (interactionEl) interactionEl.textContent = interaction;
    if (paramEl) paramEl.textContent = param;
  };
})();
