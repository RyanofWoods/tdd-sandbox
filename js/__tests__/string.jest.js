import { capitalize, camelize } from '../string';
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

//CAMELIZE
test('Camelize should handle null', () => {
  expect(camelize(null)).toBeNull();
});
test('Camelize should handle undefined', () => {
  expect(camelize(undefined)).toBeUndefined();
});
test('Camelize should handle an empty array of words', () => {
  const words = []
  expect(camelize(words)).toEqual(words);
});
test('Camelize should camelize an array of lowercase words', () => {
  const words = ['application', 'base', 'controller'];
  expect(camelize(words)).toEqual('ApplicationBaseController');
});
test('Camelize should format an array of uppercase words', () => {
  const words = [ 'APPLICATION', 'BASE', 'CONTROLLER'];
  expect(camelize(words)).toEqual('ApplicationBaseController');
});
test('Camelize should format an array of mixed words', () => {
  const words = ['AppLICaTiON', 'BASE', 'CONTrolLER'];
  expect(camelize(words)).toEqual('ApplicationBaseController');
});
test('Camelize should handle an array one letter words', () => {
  const upperWords = ['A', 'B', 'C'];
  const lowerWords = ['a', 'b', 'c'];
  const mixedWords = ['a', 'B', 'C'];

  expect(camelize(upperWords)).toEqual('ABC');
  expect(camelize(lowerWords)).toEqual('ABC');
  expect(camelize(mixedWords)).toEqual('ABC');
});
