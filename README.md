# primary-click

Detects if only the primary button has been clicked in mouse events.

## Usage

```
import isPrimaryClick from 'primary-click';

something.addEventListener('click', function (event) {
  if (isPrimaryClick(event)) {
    …
  }
});
```