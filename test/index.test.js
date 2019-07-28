const lerp = require('../src');

describe('lerp.js', () => {
  test('should return a correct values', () => {
    expect(lerp(0, 100, 0)).toBe(0);
    expect(lerp(0, 100, 1)).toBe(100);
    expect(lerp(0, 61, 0.3)).toBe(18.3);
    expect(lerp(0, 58, 0.6)).toBe(34.8);
    expect(lerp(0, 76, 0.9)).toBe(68.4);
  });
});
