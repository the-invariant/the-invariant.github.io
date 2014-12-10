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

  function addNight() {
    if (!hasNight()) {
      document.body.className = document.body.className ? document.body.className + " night" : "night";
    }
  }

  function removeNight() {
    document.body.className = (" " + document.body.className + " ").replace(" night ", " ");
    document.body.className = document.body.className.replace(/^\s+|\s+$/g, "");
  }

  if (getMode() === "dark") {
    addNight();
  }

  if (!button) {
    return;
  }

  button.onclick = function () {
    if (!hasNight()) {
      addNight();
      setMode("dark");
    } else {
      removeNight();
      setMode("light");
    }
  };
}());
