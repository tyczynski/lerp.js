/**
 * The method of linear interpolation (lerp) to easing animations.
 *
 * @param {Number} x - first value
 * @param {Number} y - second value
 * @param {Number} a - amount to interpolate between x and y
 * @return {Number}
 */
module.exports = function lerp(x, y, a) {
  return (1 - a) * x + a * y;
};
