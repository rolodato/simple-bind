var formState = require("form-state");

function makeArray (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

function inputEvent (field) {
  if (field.type === "radio") {
    return "click";
  } else {
    return "input";
  }
}

function bindInput (field, handler) {
  field.addEventListener(inputEvent(field), handler);
}

module.exports = function bindForm (form, handler) {
  var fields = makeArray(form.querySelectorAll("input, textarea"));
  fields.forEach(function (field) {
    bindInput(field, function () {
      handler(formState(form));
    });
  });
};
