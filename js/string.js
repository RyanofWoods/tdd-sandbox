/* eslint-disable import/prefer-default-export */
// creating functions to practice TDD, even if the method is built into js

export function capitalize(word) {
  if (!word) return word;

  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// concatenate an array of words and have them in CamelCase
export function camelize(words) {
  if (!words) {
    return words;
  }
  if (words.length === 0 ) {
    return [];
  };

  return words.map(word => capitalize(word)).join('');
}
