const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) && isNaN(date)) {
    throw new Error("Invalid date!")
  }
  try {
    date.getUTCDay()
  } catch (error) {
    throw new Error("Invalid date!")
  }

  const month = date.getMonth()
  let season
  if (month < 2 || month === 11) {
    season = 'winter'
  }
  if (month < 5 && month >= 2) {
    season = 'spring'
  }
  if (month < 8 && month >= 5) {
    season = 'summer'
  }
  if (month < 11 && month >= 8) {
    season = 'autumn'
  }
  return season
}

module.exports = {
  getSeason
};
