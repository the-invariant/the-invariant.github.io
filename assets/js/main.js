(function () {
  var button = document.getElementById("night-toggle");
  var key = "the-invariant-mode";

  function getMode() {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function setMode(value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
    }
  }

  function hasNight() {
    return (" " + document.body.className + " ").indexOf(" night ") !== -1;
  }

  function systemDark() {
    if (!window.matchMedia) {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function addNight() {
    if (!hasNight()) {
      document.body.className = document.body.className ? document.body.className + " night" : "night";
    }

    removeLight();
  }

  function removeNight() {
    document.body.className = (" " + document.body.className + " ").replace(" night ", " ");
    document.body.className = document.body.className.replace(/^\s+|\s+$/g, "");
  }

  function addLight() {
    if ((" " + document.body.className + " ").indexOf(" light ") === -1) {
      document.body.className = document.body.className ? document.body.className + " light" : "light";
    }
  }

  function removeLight() {
    document.body.className = (" " + document.body.className + " ").replace(" light ", " ");
    document.body.className = document.body.className.replace(/^\s+|\s+$/g, "");
  }

  function updateButton() {
    if (button) {
      button.innerHTML = hasNight() ? "Light Mode" : "Dark Mode";
    }
  }

  if (getMode() === "dark" || (!getMode() && systemDark())) {
    addNight();
  } else if (getMode() === "light") {
    removeNight();
    addLight();
  }

  updateButton();

  if (!button) {
    return;
  }

  button.onclick = function () {
    if (!hasNight()) {
      addNight();
      setMode("dark");
    } else {
      removeNight();
      addLight();
      setMode("light");
    }

    updateButton();
  };
}());
