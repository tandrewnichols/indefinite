const irregulars = require('./irregular-words');
const ACRONYM = /^U[A-Z]+$/;
const STARTS_WITH_VOWEL = /^[aeiou]/;
const EXTRAS = /[\s'-]/;

const xor = (a, b) => (a || b) && !(a && b);
const checkForAcronyms = (word, caseInsensitive) => caseInsensitive ? false : ACRONYM.test(word.split(' ')[0]);
const cap = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Try some variations on the word to determine whether it's irregular.
// Specifically, try trimming s, then es, then ed because those are common
// forms of plurals and past tense verbs (which can be used like adjectives).
const checkForIrregulars = part => [ null, 's', 'es', 'ed' ].reduce((memo, ending) => memo || irregulars.check(part, ending), false);

const indefinite = (word, opts = {}) => {
  let isAcronymWithU = checkForAcronyms(word, opts.caseInsensitive);
  let startsWithVowel = STARTS_WITH_VOWEL.test(word.toLowerCase());

  // Only check the first word. Also, if it's hyphenated, only
  // check the first part. Finally, if it's possessive, ignore
  // the possessive part.
  let part = word.split(EXTRAS)[0].toLowerCase();

  let isIrregular = checkForIrregulars(part);

  /**
   * If it's an acronym that starts with "u," the article should be "a"
   * If it starts with a vowel and isn't irregular, it should be "an"
   * If it starts with a vowel and IS irregular, it should be "a"
   * If it starts with a consonant and isn't irregular, it should be "a"
   * If it starts with a consonant and IS irregular, it should be "an"
   */
  let article = !isAcronymWithU && xor(startsWithVowel, isIrregular) ? 'an' : 'a';

  return opts.capitalize ? `${cap(article)} ${word}` : `${article} ${word}`;
};

indefinite.irregularWords = irregulars.list;

module.exports = indefinite;
