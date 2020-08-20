# primary-click

Detects if the primary button has been clicked in mouse events.

## Usage

### `isPrimaryClick(e {MouseEvent})`

Detects if the primary button has been pressed in mouse events.

`e` is a `MouseEvent` or `Event`-like instance (i.e. `SyntheticEvent`).

Returns a boolean, `true` if the primary mouse button has been pressed, and no keyboard modifier keys have been pressed.

#### Example

```js
import { isPrimaryClick } from "primary-click";

someDomEl.addEventListener("click", e => {
  if (isPrimaryClick(e)) {
    …
  }
});
```

### `onPrimaryClick(func {Function})`

Decorates a function so it calls if the primary button has been pressed in mouse events.

`fn` is the `Function` to be decorated.

Returns a new function which expects a `Event`-like instance as the first argument.

#### Examples

Basic:

```js
import { onPrimaryClick } from "primary-click";

someEl.addEventListener("click", onPrimaryClick(e => {
  …
}));
```

Composed:

```js
import { onPrimaryClick } from "primary-click";
import preventDefault from "prevent-default";

someEl.addEventListener("click", onPrimaryClick(preventDefault(e => {
  …
})));
```

JSX:

```jsx
<button onClick={onPrimaryClick(myClickHandler)}>
```
