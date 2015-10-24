(function() {
  var isNode = (typeof module !== 'undefined' && this.module !== module);

  var indefinite = function (noun, capitalize) {
    var phrase = (/[aeiou]/.test(noun.charAt(0).toLowerCase()) ? 'an ' : 'a ') + noun;
    if (capitalize) {
      return phrase.charAt(0).toUpperCase() + phrase.slice(1);
    } else {
      return phrase;
    }
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = indefinite;
  } else {
    window.indefinite = indefinite;
  }
})();
