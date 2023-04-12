const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [...arr]
  const indexes = []
  arr.forEach((e, index) => {
    if (e !== -1) {
      indexes.push(index)
    }
  })
  if (!indexes.length) {
    return arr
  }
  let isSorted = false
  let iterations = 0
  let swap = false
  do {
    for (let i = 0; i < indexes.length; i++) {
      if (i === 0) {
        swap = false
      }
      let elem = result[indexes[i]]
      let nextElem = result[indexes[i + 1]]
      if (elem > nextElem) {
        swap = true;
        [result[indexes[i]], result[indexes[i + 1]]] = [result[indexes[i + 1]], result[indexes[i]]]
      }
      if (i === indexes.length - 1 && iterations !== 0 && swap === false) {
        isSorted = true
      }
      iterations++
    }
  } while (!isSorted);
  return result
}


console.log(sortByHeight([-1, -1, -1, -1, -1]));

module.exports = {
  sortByHeight
};
