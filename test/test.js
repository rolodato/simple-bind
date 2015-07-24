var bind = require("../simple-bind.js");

window.onload = function () {
  var form = document.getElementById("form");
  bind(form, function (state) {
    var result = document.getElementById("result");
    result.innerHTML = JSON.stringify(state, null, 2);
  });
};
