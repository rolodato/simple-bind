var serialize = require("form-serialize");

function makeArray (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
}

function bindInput (field, handler) {
  var inputEvents = ["change", "input"];
  inputEvents.forEach(function (e) {
    field.addEventListener(e, handler);
  })
}

module.exports = function bindForm (form, handler) {
  var fields = makeArray(form.querySelectorAll("input, textarea, select"));
  fields.forEach(function (field) {
    bindInput(field, function () {
      handler(serialize(form, { hash: true }));
    });
  });
};
