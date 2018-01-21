require('should');

describe('indefinite', () => {
  const indefinite = require('../lib/indefinite');

  context('a word that starts with a vowel', () => {
    it('should be prefixed with an', () => {
      indefinite('apple').should.equal('an apple');
    })
  })

  context('a word that starts with a consonant', () => {
    it('should be prefixed with a', () => {
      indefinite('banana').should.equal('a banana');
    })
  })

  context('a word that starts with a capital vowel', () => {
    it('should be maintain capitalization', () => {
      indefinite('Apple').should.equal('an Apple');
    })
  })

  context('a word that starts with a capital consonant', () => {
    it('should maintain capitalization', () => {
      indefinite('Banana').should.equal('a Banana');
    })
  })

  context('a word that starts with a capital that would be a irregular if it were an acronym', () => {
    it('should be prefixed with the regular article', () => {
      indefinite('Umbrella').should.equal('an Umbrella');
    })
  })

  context('a word that starts with a vowel when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      indefinite('apple', { capitalize: true }).should.equal('An apple');
    })
  })

  context('a word that starts with a consonant when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      indefinite('banana', { capitalize: true }).should.equal('A banana');
    })
  })

  context('an acronym that starts with a regular vowel', () => {
    it('should be prefixed with an', () => {
      indefinite('IOU').should.equal('an IOU');
    })
  })

  context('an acronym that starts with an irregular vowel', () => {
    it('should be prefixed with a', () => {
      indefinite('UFO').should.equal('a UFO');
    })
  })

  context('an acronym that starts with a consonant', () => {
    it('should still be prefixed with a', () => {
      indefinite('CEO').should.equal('a CEO');
    })
  })

  context('an acronym that starts with an irregular consonant', () => {
    it('should be prefixed with an', () => {
      indefinite('FFA prodigy').should.equal('an FFA prodigy');
    })
  })

  context('an acronym that starts with U but with caseInsensitive passed in', () => {
    it('should be prefixed with an', () => {
      indefinite('UNCLE', { caseInsensitive: true }).should.equal('an UNCLE');
    })
  })

  context('an irregular word beginning with a silent consonant', () => {
    it('should be prefixed with an', () => {
      indefinite('honor').should.equal('an honor');
    })
  })

  context('an irregular word beginning with a vowel that makes a consonant sound', () => {
    it('should be prefixed with a', () => {
      indefinite('ukelele').should.equal('a ukelele');
    })
  })

  context('an irregular word when multiple words are passed in', () => {
    it('should be prefixed based on the first word only', () => {
      indefinite('ouija board').should.equal('a ouija board');
    })
  })

  context('an irregular word that is hyphenated is passed in', () => {
    it('should be prefixed based on the first part of the word only', () => {
      indefinite('honor-bound').should.equal('an honor-bound');
    })
  })

  context('a plural form of an irregular word is passed in', () => {
    it('should be prefixed based on the singular form', () => {
      indefinite('hours').should.equal('an hours');
    })
  })

  context('an irregular plural form of an irregular word is passed in', () => {
    it('should be prefixed based on the singular form', () => {
      indefinite('heiresses').should.equal('an heiresses');
    })
  })

  context('a past tense verb form of an irregular word is passed in', () => {
    it('should be prefixed based on the present tense', () => {
      indefinite('honored').should.equal('an honored');
    })
  })

  context('a possessive form of an irregular word is passed in', () => {
    it('should be prefixed based on the non-possessive form', () => {
      indefinite('heir\'s').should.equal('an heir\'s');
    })
  })

  context('an irregular word with some capitalization is passed', () => {
    it('should be treated case-insensitively', () => {
      indefinite('Hour').should.equal('an Hour');
    })
  })
})
