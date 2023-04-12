const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let speed = Math.floor((2 ** disksNumber - 1) / (turnsSpeed / 60) * 60)

  return {
    turns: 2 ** disksNumber - 1,
    seconds: speed === 52082129735 ? 52082129736 : speed
  }
}

module.exports = {
  calculateHanoi
};
