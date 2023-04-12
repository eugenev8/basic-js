const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const newArr = [...arr]
  for (let i = 0, j = 1; i < newArr.length; i++, j++) {
    const prevElem = newArr[i - 1]
    const element = newArr[i];
    const nextElement = newArr[j]

    if (element === '--discard-next') {
      if (nextElement) {
        delete newArr[j]
      }
      delete newArr[i]
    }
    if (element === '--discard-prev') {
      if (prevElem) {
        delete newArr[i - 1]
      }
      delete newArr[i]
    }
    if (element === '--double-next') {
      newArr.splice(j, 0, nextElement)
      delete newArr[i]
    }
    if (element === '--double-prev') {
      newArr[i] = prevElem
    }
  }
  return newArr.filter(e => typeof e !== 'undefined')
}


transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);

module.exports = {
  transform
};
