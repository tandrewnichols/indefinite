const irregulars = require('./irregular-words');
const ACRONYM = /^[A-Z]+$/;
const IRREGULAR_ACRONYM = /^[UFHLMNRSX]/;
const STARTS_WITH_VOWEL = /^[aeiouAEIOU]/;
const EXTRAS = /[\s'-]/;

/**
 * Array#indexOf is faster IF the word starts with "a" (for example),
 * but negligibly faster when you have to .toLowerCase() the word, and
 * slower if the word happens to start with (e.g.) "u."
 */
exports.startsWithVowel = word => STARTS_WITH_VOWEL.test(word);

exports.xor = (a, b) => (a || b) && !(a && b);

/**
 * Both = a && b
 * Neither = !a && !b
 * In the case of Booleans, this means
 * either both true or both false, so
 * we can just compare the equality of
 * a and b.
 */
exports.bothOrNeither = (a, b) => a === b;

/**
 * If the entirety of the first word is capital letters
 * and case insensitivity is off, it's an acronym.
 */
exports.isAcronym = (word, caseInsensitive) => caseInsensitive ? false : ACRONYM.test(word.split(' ')[0]);

exports.isIrregularAcronym = word => IRREGULAR_ACRONYM.test(word.charAt(0));

/**
 * Try some variations on the word to determine whether it's irregular.
 * Specifically, try trimming s, then es, then ed because those are common
 * forms of plurals and past tense verbs (which can be used like adjectives).
 */
exports.checkForIrregulars = part => [ null, 's', 'es', 'ed' ].reduce((memo, ending) => memo || irregulars.check(part, ending), false);

exports.capitalize = (article, word, opts) => {
  if (opts.capitalize) {
    article = `${article.charAt(0).toUpperCase()}${article.slice(1)}`;
  }

  return `${article} ${word}`;
};

exports.getFirst = word => word.split(EXTRAS)[0].toLowerCase();
