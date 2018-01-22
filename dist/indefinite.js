(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["indefinite"] = factory();
	else
		root["indefinite"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

exports.check = function (word, ending) {
  if (ending) {
    // If the word ends in the ending, remove it.
    var regex = new RegExp(ending + '$');
    word = word.replace(regex, '');
  }

  return exports.list.indexOf(word) > -1;
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
exports.list = [
// Nouns: eu like y
'eunuch', 'eucalyptus', 'eugenics', 'eulogy', 'euphemism', 'euphony', 'euphoria', 'eureka',

// Adjectives: eu like y
'european', 'euphemistic', 'euphonic', 'euphoric',

// Adverbs: eu like y
'euphemistically', 'euphonically', 'euphorically',

// Nouns: silent h
'heir', 'heiress', 'herb', 'homage', 'honesty', 'honor', 'honour', 'hour',

// Adjectives: silent h
'honest', 'honorous',

// Adverbs: silent h
'honestly', 'hourly',

// Nouns: o like w
'one', 'ouija',

// Adjectives: o like w
'once',

// Adverbs: o like w

// Nouns: u like y
'ubiquity', 'udometer', 'ufo', 'uke', 'ukelele', 'ululate', 'unicorn', 'unicycle', 'uniform', 'unify', 'union', 'unison', 'unit', 'unity', 'universe', 'university', 'upas', 'ural', 'uranium', 'urea', 'ureter', 'urethra', 'urine', 'urology', 'urus', 'usage', 'use', 'usual', 'usurp', 'usury', 'utensil', 'uterus', 'utility', 'utopia', 'utricle', 'uvarovite', 'uvea', 'uvula',

// Adjectives: u like y
'ubiquitous', 'ugandan', 'ukrainian', 'unanimous', 'unicameral', 'unified', 'unique', 'unisex', 'universal', 'urinal', 'urological', 'useful', 'useless', 'usurious', 'usurped', 'utilitarian', 'utopic',

// Adverbs: u like y
'ubiquitously', 'unanimously', 'unicamerally', 'uniquely', 'universally', 'urologically', 'usefully', 'uselessly', 'usuriously',

// Nouns: y like i
'yttria', 'yggdrasil', 'ylem', 'yperite', 'ytterbia', 'ytterbium', 'yttrium',

// Adjectives: y like i
'ytterbous', 'ytterbic', 'yttric'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var irregulars = __webpack_require__(0);

var _require = __webpack_require__(2),
    startsWithVowel = _require.startsWithVowel,
    xor = _require.xor,
    bothOrNeither = _require.bothOrNeither,
    isAcronym = _require.isAcronym,
    isIrregularAcronym = _require.isIrregularAcronym,
    checkForIrregulars = _require.checkForIrregulars,
    capitalize = _require.capitalize,
    getFirst = _require.getFirst;

var indefinite = function indefinite(word) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var hasInitialVowel = startsWithVowel(word);

  // If it's an acronym, make different checks.
  if (isAcronym(word, opts.caseInsensitive)) {
    var isIrregular = isIrregularAcronym(word);
    /*
     * If it starts with U: "a"
     * If it starts with any other vowel: "an"
     * If it starts with F, H, L, M, N, R, S, or X: "an"
     * If it starts with any other consonant: "a"
     */
    var article = bothOrNeither(hasInitialVowel, isIrregular) ? 'a' : 'an';
    return capitalize(article, word, opts);
  } else {
    // Only check the first word. Also, if it's hyphenated, only
    // check the first part. Finally, if it's possessive, ignore
    // the possessive part.
    var first = getFirst(word);
    var _isIrregular = checkForIrregulars(first);

    /**
    * If it starts with a vowel and isn't irregular: "an"
    * If it starts with a vowel and IS irregular: "a"
    * If it starts with a consonant and isn't irregular: "a"
    * If it starts with a consonant and IS irregular: "an"
    */
    var _article = xor(hasInitialVowel, _isIrregular) ? 'an' : 'a';
    return capitalize(_article, word, opts);
  }
};

indefinite.irregularWords = irregulars.list;

module.exports = indefinite;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var irregulars = __webpack_require__(0);
var ACRONYM = /^[A-Z]+$/;
var IRREGULAR_ACRONYM = /^[UFHLMNRSX]/;
var STARTS_WITH_VOWEL = /^[aeiouAEIOU]/;
var EXTRAS = /[\s'-]/;

/**
 * Array#indexOf is faster IF the word starts with "a" (for example),
 * but negligibly faster when you have to .toLowerCase() the word, and
 * slower if the word happens to start with (e.g.) "u."
 */
exports.startsWithVowel = function (word) {
  return STARTS_WITH_VOWEL.test(word);
};

exports.xor = function (a, b) {
  return (a || b) && !(a && b);
};

/**
 * Both = a && b
 * Neither = !a && !b
 * In the case of Booleans, this means
 * either both true or both false, so
 * we can just compare the equality of
 * a and b.
 */
exports.bothOrNeither = function (a, b) {
  return a === b;
};

/**
 * If the entirety of the first word is capital letters
 * and case insensitivity is off, it's an acronym.
 */
exports.isAcronym = function (word, caseInsensitive) {
  return caseInsensitive ? false : ACRONYM.test(word.split(' ')[0]);
};

exports.isIrregularAcronym = function (word) {
  return IRREGULAR_ACRONYM.test(word.charAt(0));
};

/**
 * Try some variations on the word to determine whether it's irregular.
 * Specifically, try trimming s, then es, then ed because those are common
 * forms of plurals and past tense verbs (which can be used like adjectives).
 */
exports.checkForIrregulars = function (part) {
  return [null, 's', 'es', 'ed'].reduce(function (memo, ending) {
    return memo || irregulars.check(part, ending);
  }, false);
};

exports.capitalize = function (article, word, opts) {
  if (opts.capitalize) {
    article = '' + article.charAt(0).toUpperCase() + article.slice(1);
  }

  return article + ' ' + word;
};

exports.getFirst = function (word) {
  return word.split(EXTRAS)[0].toLowerCase();
};

/***/ })
/******/ ]);
});