const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let i = email.length - 1; i > 0; i--) {
    if (email[i] === '@') return email.substring(i + 1, email.length)
  }
}
console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'));
module.exports = {
  getEmailDomain
};
