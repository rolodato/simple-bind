# simple-bind

Trivially simple one-way binding for HTML forms.
Useful for implementing pure functions that depend on a form's current state.

```js
var bind = require("simple-bind");

bind($("#form"), function (state) {
  // this function is called whenever the form is changed
  // state is an object, mapping field names to current values
});
```
