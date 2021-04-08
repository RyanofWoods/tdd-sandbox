import { capitalize } from '../string';
// toBe, toEqual, toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy, toMatch

//CAPITALIZE
test('Capitalize should handle null', () => {
  expect(capitalize(null)).toBe(null);
});
test('Capitalize should handle an empty string', () => {
  expect(capitalize('')).toEqual('');
});
test('Capitalize should capitalize an lowercase word', () => {
  expect(capitalize('ryan')).toEqual('Ryan');
});
test('Capitalize should format an uppercase word correctly', () => {
  expect(capitalize('RYAN')).toEqual('Ryan');
});
test('Capitalize should format an mixed case word correctly', () => {
  expect(capitalize('rYAn')).toEqual('Ryan');
});
test('Capitalize should handle one letter words', () => {
  expect(capitalize('a')).toEqual('A');
  expect(capitalize('A')).toEqual('A');
});
