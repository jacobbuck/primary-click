# primary-click

Detects if only the primary button has been clicked.

## Usage

### `isPrimaryClick(e)`

Detects if only the primary button has been pressed in mouse events.

`e` is a `MouseEvent` or `Event`-like instance (i.e. `SyntheticEvent`).

Returns a boolean, `true` if only the primary mouse button has been pressed.

#### Example

```js
import { isPrimaryClick } from 'primary-click';

someDomEl.addEventListener('click', e => {
  if (isPrimaryClick(e)) {
    …
  }
});
```

### `onPrimaryClick(func {Function})`

Decorates a function so it calls if only the primary button has been pressed in mouse events.

`func` is the `Function` to be decorated.

Returns a new function which expects a `Event`-like instance as the first argument.

#### Examples

Basic

```js
import { onPrimaryClick } from 'primary-click';

someDomEl.addEventListener('click', onPrimaryClick(e => {
  …
}));
```

Composed

```js
import { onPrimaryClick } from 'primary-click';
import preventDefault from 'prevent-default';

someDomEl.addEventListener('click', onPrimaryClick(preventDefault(e => {
  …
})));
```

JSX

```jsx
<button onClick={onPrimaryClick(myClickHandler)}>
```
