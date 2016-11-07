/**
 * Detects if only the primary button has been clicked in mouse events.
 * @param {MouseEvent} event
 * @return {boolean}
 */
module.exports = function isPrimaryClick (event) {
	return (
		!event.altKey &&
		!event.ctrlKey &&
		!event.metaKey &&
		!event.shiftKey
	) && (
		('button' in event && event.button === 0) ||
		('buttons' in event && event.buttons === 1)
	);
};
