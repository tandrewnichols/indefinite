const { capitalize } = require('../helpers');
const NUMBERS = /^([0-9,]+)/;
const IS_AMBIGUOUS = /(11|18)\d{2}/;

exports.check = (word) => NUMBERS.test(word);

exports.run = (word, opts) => {
  let number = word.toString().match(NUMBERS)[1].replace(/,/g, '');
  let article = 'a';

  if (number.startsWith('11') || number.startsWith('8') || number.startsWith('18')) {
    if (IS_AMBIGUOUS.test(number)) {
      article = opts.numbers === 'colloquial' ? 'an' : 'a';
    } else if ((number.startsWith('11') || number.startsWith('18')) && number.length === 3) {
      article = 'a';
    } else {
      article = 'an';
    }
  }

  return capitalize(article, word, opts);
};
