/**
 * Detects if only the primary button has been clicked in mouse events.
 * @param {MouseEvent} event Event-like instance.
 * @return {Boolean}
 */
export const isPrimaryClick = (event) =>
  !event.altKey &&
  !event.ctrlKey &&
  !event.metaKey &&
  !event.shiftKey &&
  (event.buttons == null || event.buttons === 0 || event.buttons === 1) &&
  (event.button != null ? event.button === 0 : event.which === 1);

/**
 * Decorates a function so it calls if only the primary button has been
 * pressed in mouse events.
 * @param {Function} func
 * @return {Function}
 */
export const onPrimaryClick = (func) => (event, ...args) =>
  isPrimaryClick(event) ? func(event, ...args) : undefined;
