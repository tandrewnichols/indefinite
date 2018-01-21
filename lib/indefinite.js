const irregulars = require('./irregular-words');
const {
  startsWithVowel,
  xor,
  bothOrNeither,
  isAcronym,
  isIrregularAcronym,
  checkForIrregulars,
  capitalize,
  getFirst
} = require('./helpers');

const indefinite = (word, opts = {}) => {
  let hasInitialVowel = startsWithVowel(word);

  // If it's an acronym, make different checks.
  if (isAcronym(word, opts.caseInsensitive)) {
    let isIrregular = isIrregularAcronym(word);
    /*
     * If it starts with U: "a"
     * If it starts with any other vowel: "an"
     * If it starts with F, H, L, M, N, R, S, or X: "an"
     * If it starts with any other consonant: "a"
     */
    let article = bothOrNeither(hasInitialVowel, isIrregular) ? 'a' : 'an';
    return capitalize(article, word, opts);
  } else {
    // Only check the first word. Also, if it's hyphenated, only
    // check the first part. Finally, if it's possessive, ignore
    // the possessive part.
    let first = getFirst(word);
    let isIrregular = checkForIrregulars(first);

    /**
    * If it starts with a vowel and isn't irregular: "an"
    * If it starts with a vowel and IS irregular: "a"
    * If it starts with a consonant and isn't irregular: "a"
    * If it starts with a consonant and IS irregular: "an"
    */
    let article = xor(hasInitialVowel, isIrregular) ? 'an' : 'a';
    return capitalize(article, word, opts);
  }
};

indefinite.irregularWords = irregulars.list;

module.exports = indefinite;
