'use strict';

/**
 * Detects if only the primary button has been clicked in mouse events.
 * @param {MouseEvent} e Event instance (or Event-like, i.e. `SyntheticEvent`)
 * @return {Boolean}
 */
module.exports = function isPrimaryClick(e) {
  return !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
    (('button' in e && e.button === 0) || ('buttons' in e && e.buttons === 1));
};
