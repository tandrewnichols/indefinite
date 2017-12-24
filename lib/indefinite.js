const checkList = (word, ending) => {
  if (ending) {
    // If the word ends in the ending, remove it.
    let regex = new RegExp(`${ending}$`);
    word = word.replace(regex, '');
  }

  return indefinite.irregularWords.indexOf(word) > -1;
};

const indefinite = (noun, opts = {}) => {
  let isAcronymWithU = opts.caseInsensitive ? false : /^U[A-Z]+$/.test(noun.split(' ')[0]);
  let startsWithVowel = /[aeiou]/.test(noun.charAt(0).toLowerCase());

  // Only check the first word. Also, if it's hyphenated, only
  // check the first part. Finally, if it's possessive, ignore
  // the possessive part.
  let part = noun.split(/[\s'-]/)[0].toLowerCase();

  // Try some variations on the word to determine whether it's irregular.
  // Specifically, try trimming s, then es, then ed because those are common
  // forms of plurals and past tense verbs (which can be used like adjectives).
  let isIrregular = [ null, 's', 'es', 'ed' ].reduce((memo, ending) => {
    return memo || checkList(part, ending);
  }, false);

  /**
   * If it's an acronym that starts with "u," the article should be "a"
   * If it starts with a vowel and isn't irregular, it should be "an"
   * If it starts with a vowel and IS irregular, it should be "a"
   * If it starts with a consonant and isn't irregular, it should be "a"
   * If it starts with a consonant and IS irregular, it should be "an"
   */
  let article = (!isAcronymWithU && (startsWithVowel || isIrregular) && !(startsWithVowel && isIrregular)) ? 'an' : 'a';

  if (opts.capitalize) {
    article = `${article.charAt(0).toUpperCase()}${article.slice(1)}`;
  }

  return `${article} ${noun}`;
};

/**
 * Here follows a List of words that take irregular articles because their
 * first letter is either a consonant pronounced like a vowel (hour) or a
 * vowel proncounced like a consonant (ukelele). Note that this is not only
 * nouns because adjectives and adverbs that start with these letters could
 * also follow an article when they identify a later noun, as in "a useless
 * tool."
 *
 * This is not an attempt at a complete list, but rather a collection of
 * words used in at least moderate frequency. A list of ALL irregular words
 * would be too exhaustive to compile without some sort of tool.
 * http://www.thefreedictionary.com/words-that-start-with-eu says there are
 * over 1800 words starting with "eu" alone.
 *
 * At least for now, this list omits proper names, as they aren't USUALLY
 * used in such a way as to require an _indefinite_ article. I can't think,
 * for example, of a case where you'd want to say "a Eustace."
 */
indefinite.irregularWords = [
  // Nouns: eu like y
  'eunuch', 'eucalyptus', 'eugenics', 'eulogy', 'euphemism', 'euphony', 'euphoria', 'eureka',

  // Adjectives: eu like y
  'european', 'euphemistic', 'euphonic', 'euphoric',

  // Adverbs: eu like y
  'euphemistically', 'euphonically', 'euphorically',

  // Nouns: silent h
  'herb', 'hour', 'heir', 'heiress', 'honesty', 'honor', 'honour',

  // Adjectives: silent h
  'honest', 'honorous',

  // Adverbs: silent h
  'hourly', 'honestly',

  // Nouns: o like w
  'one', 'ouija',

  // Adjectives: o like w
  'once',

  // Adverbs: o like w

  // Nouns: u like y
  'ubiquity', 'udometer', 'ufo', 'uke', 'ukelele', 'ululate', 'unicorn', 'unicycle', 'uniform',
  'unify', 'union', 'unison', 'unit', 'unity', 'universe', 'university', 'upas', 'ural', 'uranium',
  'urea', 'ureter', 'urethra', 'urine', 'urology', 'urus', 'usage', 'use', 'usual', 'usurp',
  'usury', 'utensil', 'uterus', 'utility', 'utopia', 'utricle', 'uvarovite', 'uvea', 'uvula',

  // Adjectives: u like y
  'ubiquitous', 'ugandan', 'ukrainian', 'unanimous', 'unicameral', 'unified', 'unique', 'unisex',
  'universal', 'urinal', 'urological', 'useful', 'useless', 'usurious', 'usurped', 'utilitarian',
  'utopic',

  // Adverbs: u like y
  'ubiquitously', 'unanimously', 'unicamerally', 'uniquely', 'universally', 'urologically', 'usefully', 'uselessly', 'usuriously',

  // Nouns: y like i
  'yttria', 'yggdrasil', 'ylem', 'yperite', 'ytterbia', 'ytterbium', 'yttrium',

  // Adjectives: y like i
  'ytterbous', 'ytterbic', 'yttric'
];

module.exports = indefinite;
