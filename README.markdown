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

## Example state (uses [form-serialize](https://www.npmjs.com/package/form-serialize)):

```js
{
  "select": "2",
  "checkbox": [
    "checkbox-1",
    "checkbox-2"
  ],
  "color": "#000000",
  "date": "1992-06-15",
  "datetime": "hi",
  "datetime-local": "2000-01-01T00:00",
  "email": "alice@example.com",
  "month": "1992-06",
  "number": "1234",
  "password": "secret",
  "radio": "radio-2",
  "range": "50",
  "search": "my search term",
  "tel": "911",
  "text": "hi there",
  "time": "12:00",
  "url": "example.com",
  "week": "2015-W01",
  "textarea": "hello"
}
```
