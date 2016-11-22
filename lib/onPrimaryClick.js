var isPrimaryClick = require('./isPrimaryClick');

/**
 * Decorates a function so it calls if only the primary button has been
 * pressed in mouse events.
 * @param {Function} func
 * @return {Function}
 */
module.exports = function onPrimaryClick (func) {
	return function (e) {
		return isPrimaryClick(e) ? func(e) : true;
	}
};
