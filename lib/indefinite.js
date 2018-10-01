const irregulars = require('./irregular-words');
const rules = require('./rules');

const indefinite = (word, opts = {}) => {
  let result;

  /**
   * I'd really prefer to use for of here, but babel converts that
   * to something using Symbol.iterator, which PhantomJS chokes on.
   */
  rules.some((rule) => {
    if (rule.check(word, opts)) {
      result = rule.run(word, opts);
      return true;
    }
  });

  return result;
};

indefinite.irregularWords = irregulars.list;

module.exports = indefinite;
