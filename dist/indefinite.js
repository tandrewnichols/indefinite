window["indefinite"] =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var checkList = function checkList(word, strip) {
  if (strip) {
    var regex = new RegExp(strip + '$');
    word = word.replace(regex, '');
  }

  return indefinite.irregularWords.includes(word);
};

var indefinite = function indefinite(noun) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var isAcronymWithU = opts.caseInsensitive ? false : /^U[A-Z]+$/.test(noun.split(' ')[0]);
  var startsWithVowel = /[aeiou]/.test(noun.charAt(0).toLowerCase());

  var part = noun.split(/[\s'-]/)[0];
  var isIrregular = checkList(part);

  if (!isIrregular) {
    isIrregular = checkList(part, 's');
    if (!isIrregular) {
      isIrregular = checkList(part, 'es');
    }
  }

  // logical XOR . . . if it's a or b but not a and b
  var article = !isAcronymWithU && (startsWithVowel || isIrregular) && !(startsWithVowel && isIrregular) ? 'an' : 'a';

  var phrase = article + ' ' + noun;

  if (opts.capitalize) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
  } else {
    return phrase;
  }
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
'hour', 'heir', 'heiress', 'honesty', 'honor', 'honour',

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
'ubiquity', 'udometer', 'ufo', 'uke', 'ukelele', 'ululate', 'unicorn', 'unicycle', 'uniform', 'unify', 'union', 'unison', 'unit', 'unity', 'universe', 'university', 'upas', 'ural', 'uranium', 'urea', 'ureter', 'urethra', 'urine', 'urology', 'urus', 'usage', 'use', 'usual', 'usurp', 'usury', 'utensil', 'uterus', 'utility', 'utopia', 'utricle', 'uvarovite', 'uvea', 'uvula',

// Adjectives: u like y
'ubiquitous', 'ugandan', 'ukrainian', 'unanimous', 'unicameral', 'unified', 'unique', 'unisex', 'universal', 'urinal', 'urological', 'useful', 'useless', 'usurious', 'usurped', 'utilitarian', 'utopic',

// Adverbs: u like y
'ubiquitously', 'unanimously', 'unicamerally', 'uniquely', 'universally', 'urologically', 'usefully', 'uselessly', 'usuriously',

// Nouns: y like i
'yttria', 'yggdrasil', 'ylem', 'yperite', 'ytterbia', 'ytterbium', 'yttrium',

// Adjectives: y like i
'ytterbous', 'ytterbic', 'yttric'];

module.exports = indefinite;

/***/ })
/******/ ]);