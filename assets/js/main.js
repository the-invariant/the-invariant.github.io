(function () {
  var button = document.getElementById("night-toggle");

  if (!button) {
    return;
  }

  button.onclick = function () {
    var name = document.body.className;

    if ((" " + name + " ").indexOf(" night ") === -1) {
      document.body.className = name ? name + " night" : "night";
    } else {
      document.body.className = (" " + name + " ").replace(" night ", " ");
      document.body.className = document.body.className.replace(/^\s+|\s+$/g, "");
    }
  };
}());
