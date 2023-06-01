(function () {
  var button = document.getElementById("night-toggle");
  var key = "the-invariant-mode";
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function getSavedMode() {
    try {
      var value = window.localStorage.getItem(key);
      return value === "dark" || value === "light" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function setSavedMode(value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
    }
  }

  function systemMode() {
    return media && media.matches ? "dark" : "light";
  }

  function currentMode() {
    return root.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
  }

  function setMode(value) {
    var mode = value === "dark" ? "dark" : "light";
    root.setAttribute("data-bs-theme", mode);
    updateButton(mode);
  }

  function updateButton(mode) {
    if (!button) {
      return;
    }

    var isDark = mode === "dark";
    button.innerHTML = isDark ? "Light Mode" : "Dark Mode";
    button.setAttribute("aria-pressed", isDark ? "true" : "false");
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  function applyInitialMode() {
    setMode(getSavedMode() || systemMode());
  }

  applyInitialMode();

  if (button) {
    button.onclick = function () {
      var next = currentMode() === "dark" ? "light" : "dark";
      setMode(next);
      setSavedMode(next);
    };
  }

  if (media) {
    var onSystemChange = function () {
      if (!getSavedMode()) {
        setMode(systemMode());
      }
    };

    if (media.addEventListener) {
      media.addEventListener("change", onSystemChange);
    } else if (media.addListener) {
      media.addListener(onSystemChange);
    }
  }
}());
