(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  var indefinite = function (noun) {
    return (/[aeiou]/.test(noun.charAt(0).toLowerCase()) ? 'an ' : 'a ') + noun;
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = indefinite;
  } else {
    window.indefinite = indefinite;
  }
})();
