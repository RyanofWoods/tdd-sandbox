/* eslint-disable import/prefer-default-export */
// creating functions to practice TDD, even if the method is built into js

export function capitalize(word) {
  if (!word) return word;

  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
