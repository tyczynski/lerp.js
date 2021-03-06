/**
 * The method of linear interpolation (lerp) to easing animations.
 *
 * @param {number} x - first value
 * @param {number} y - second value
 * @param {number} a - amount to interpolate between x and y
 * @return {number}
 */
module.exports = (x, y, a) => (1 - a) * x + a * y;
