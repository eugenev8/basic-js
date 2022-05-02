const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = [];
  const arrayOfDigits = Array.from(String(n), Number)

  if (arrayOfDigits.length <= 2) {
    number.push(arrayOfDigits.pop())
    number.push(arrayOfDigits.shift())

    return Math.max.apply(null, number)
  }

  for (i = 0; i < arrayOfDigits.length - 1; i++) {
    let newArr = arrayOfDigits.slice(0, i).concat(arrayOfDigits.slice(i + 1, arrayOfDigits.length)).join('')
    number.push(newArr)
  }
  return Math.max.apply(null, number)
}

module.exports = {
  deleteDigit
};
