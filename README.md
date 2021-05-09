# primary-click

Detects if the primary button has been clicked in mouse events.

## Usage

### `isPrimaryClick`

Detects if the primary button has been pressed in mouse events.

```jsx
isPrimaryClick(event {MouseEvent})
```

#### Parameters

- `event` is a `MouseEvent` or `Event`-like instance (i.e. `SyntheticEvent`).

#### Return value

`true` if the primary mouse button has been pressed, and no keyboard modifier keys have been pressed.

#### Example

```jsx
import { isPrimaryClick } from 'primary-click';

someDomEl.addEventListener('click', (event) => {
  if (isPrimaryClick(event)) {
    …
  }
});
```

### `onPrimaryClick`

Decorates a function so it calls if the primary button has been pressed in mouse events.

```jsx
onPrimaryClick(func {Function})
```

#### Parameters

- `func` is the `Function` to be decorated.

#### Return value

A new function which expects a `Event`-like instance as the first argument.

#### Examples

Basic:

```jsx
import { onPrimaryClick } from 'primary-click';

someEl.addEventListener('click', onPrimaryClick((event) => {
  …
}));
```

Composed:

```jsx
import { onPrimaryClick } from 'primary-click';
import preventDefault from 'prevent-default';

someEl.addEventListener('click', onPrimaryClick(preventDefault((event) => {
  …
})));
```

JSX:

```jsx
<button onClick={onPrimaryClick(myClickHandler)}>
```
