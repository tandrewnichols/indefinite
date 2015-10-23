(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  if (isNode) {
    module.exports = {};
  } else {
    window.indefinite = {};
  }
})();
