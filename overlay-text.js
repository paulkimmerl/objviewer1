(() => {
  // CSS als String
  const css = `
  #overlay-text {
    position: fixed;
    top: 2vh;
    left: 2vw;
    z-index: 101;
    pointer-events: auto;

    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 1.2rem;
    color: #0ff;
    text-shadow:
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff;
    user-select: none;
    white-space: nowrap;
  }
  #overlay-text span.label {
    margin-right: 0.5em;
    opacity: 0.8;
  }
  #overlay-text span.value {
    font-weight: 900;
  }
  `;

  // CSS in <style> Tag injizieren
  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  // Overlay-HTML erstellen
  const overlayHTML = `
  <div id="overlay-text">
    <span class="label">Zoom:</span><span id="zoom-val" class="value">100%</span>&nbsp;&nbsp;
    <span class="label">FPS:</span><span id="fps-val" class="value">60</span>&nbsp;&nbsp;
    <span class="label">Interaction:</span><span id="interaction-val" class="value">On</span>&nbsp;&nbsp;
    <span class="label">Parameter:</span><span id="param-val" class="value">42</span>
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
