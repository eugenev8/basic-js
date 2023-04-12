const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options
  let result = str

  if (typeof addition != 'undefined') {
    if (additionRepeatTimes) {
      if (additionSeparator) {
        let additionText = ''
        for (let index = 0; index < additionRepeatTimes; index++) {
          if (index === additionRepeatTimes - 1) {
            additionText += addition
          } else {
            additionText += addition + additionSeparator
          }
        }
        result = result + additionText
      } else {
        let additionText = ''
        for (let index = 0; index < additionRepeatTimes; index++) {
          if (index === additionRepeatTimes - 1) {
            additionText += addition
          } else {
            additionText += addition + '|'
          }
        }
        result = result + additionText
      }
    } else {
      result = result + addition
    }
  }

  if (repeatTimes) {
    const temp = result
    result = ''
    if (separator) {
      for (let index = 0; index < repeatTimes; index++) {
        result += temp + separator
      }
      return result.slice(0, -separator.length)
    } else {
      for (let index = 0; index < repeatTimes; index++) {
        result += temp + '+'
      }
      return result.slice(0, -1)
    }
  } else return result
}

// console.log(
//   repeater('point', { repeatTimes: 3, separator: '&&&' })
// );

module.exports = {
  repeater
};
