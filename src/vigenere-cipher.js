const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode === false ? 'reverse' : 'direct'
  }
  encrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const trimmedStr = str.replace(/\s+/g, '')
    let fullKey = key.repeat((trimmedStr.length / key.length) + 1).slice(0, trimmedStr.length).toUpperCase()
    let result = ''
    for (let i = 0, j = 0; i < str.length; i++) {
      let strLetter = str[i].toUpperCase();
      if (letters.includes(strLetter)) {
        const keyLetter = fullKey[j];
        const baseIndex = letters.indexOf(strLetter);
        const increment = letters.indexOf(keyLetter);
        strLetter = letters[baseIndex + increment >= 26 ? (baseIndex + increment) % 26 : baseIndex + increment]
        j++
      }
      result += strLetter
    }
    return this.mode === 'direct' ? result : result.split('').reverse().join('')
  }
  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const trimmedStr = str.replace(/\s+/g, '')
    let fullKey = key.repeat((trimmedStr.length / key.length) + 1).slice(0, trimmedStr.length).toUpperCase()
    let result = ''
    for (let i = 0, j = 0; i < str.length; i++) {
      let strLetter = str[i].toUpperCase();
      if (letters.includes(strLetter)) {
        const keyLetter = fullKey[j];
        const baseIndex = letters.indexOf(strLetter);
        const increment = letters.indexOf(keyLetter);
        strLetter = letters[baseIndex - increment < 0 ? 26 - Math.abs(baseIndex - increment) : baseIndex - increment]
        j++
      }
      result += strLetter
    }
    return this.mode === 'direct' ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
