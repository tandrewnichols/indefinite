module.exports = (noun, opts = {}) => {
  let isAcronymWithU = opts.caseInsensitive ? false : /^U[A-Z]+$/.test(noun.split(' ')[0]);
  let startsWithVowel = /[aeiou]/.test(noun.charAt(0).toLowerCase());
  let article = !isAcronymWithU && startsWithVowel ? 'an ' : 'a ';
  let phrase = article + noun;
  if (opts.capitalize) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  } else {
    return phrase;
  }
};
