const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let sorted = str.split('').sort().join('')
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result = result + count + str[i]
      count = 1
    }
  }
  return result.replace(/1/g, '')
}
console.log(encodeLine('abbcca'));
module.exports = {
  encodeLine
};
