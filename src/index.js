/**
 * Detects if only the primary button has been clicked in mouse events.
 * @param {MouseEvent} e Event instance (or Event-like, i.e. `SyntheticEvent`)
 * @return {Boolean}
 */
export const isPrimaryClick = e =>
  !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
  ("buttons" in e ? e.buttons === 1 : "button" in e && e.button === 0);

/**
 * Decorates a function so it calls if only the primary button has been
 * pressed in mouse events.
 * @param {Function} fn
 * @return {Function}
 */
export const onPrimaryClick = fn => (e, ...args) =>
  isPrimaryClick(e, ...args) ? fn(e) : true;
