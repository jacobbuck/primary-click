# primary-click

Detects if only the primary button has been clicked in mouse events.

## Usage

```js
import isPrimaryClick from 'primary-click';

something.addEventListener('click', event => {
  if (isPrimaryClick(event)) {
    …
  }
});
```
