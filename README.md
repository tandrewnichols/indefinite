[![Build Status](https://travis-ci.org/tandrewnichols/indefinite.png)](https://travis-ci.org/tandrewnichols/indefinite) [![downloads](http://img.shields.io/npm/dm/indefinite.svg)](https://npmjs.org/package/indefinite) [![npm](http://img.shields.io/npm/v/indefinite.svg)](https://npmjs.org/package/indefinite) [![Code Climate](https://codeclimate.com/github/tandrewnichols/indefinite/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/indefinite) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/indefinite/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/indefinite) [![dependencies](https://david-dm.org/tandrewnichols/indefinite.png)](https://david-dm.org/tandrewnichols/indefinite) ![Size](https://img.shields.io/badge/size-187b-brightgreen.svg)

# indefinite

Prefix a noun with an indefinite article - a or an - based on whether it begins with a vowel.

## Installation

`npm install --save indefinite`

## Summary

It's not hard to check whether a noun begins with a vowel and decide whether to prefix with "a" or "an," but I got tired of doing it manually every time. So now there's this. Just pass in the word, and `indefinite` will return the word prefixed with either "a " or "an " depending on the first letter of the word.

## Usage

```js
var a = require('indefinite');

console.log(a('apple')); // "an apple"
console.log(a('banana')); // "a banana"
```

### Browser

Just serve `dist/indefinite.min.js` however you serve javascript, then call `indefinite("noun")`. The `indefinite` function is added to window.

## Contributing

Please see [the contribution guidelines](contributing.md).
