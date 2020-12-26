const sum = require('./sum');

test('adds 0 + 1 to equal 1', () => {
  expect(sum(0, 1)).toBe(1);
});
