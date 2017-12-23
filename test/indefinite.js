require('should');

describe('indefinite', () => {
  const indefinite = require('../lib/indefinite');

  context('a noun that starts with a vowel', () => {
    it('should be prefixed with an', () => {
      indefinite('apple').should.equal('an apple');
    })
  })

  context('a noun that starts with a consonant', () => {
    it('should be prefixed with a', () => {
      indefinite('banana').should.equal('a banana');
    })
  })

  context('a noun that starts with a capital vowel', () => {
    it('should be maintain capitalization', () => {
      indefinite('Apple').should.equal('an Apple');
    })
  })

  context('a noun that starts with a capital consonant', () => {
    it('should maintain capitalization', () => {
      indefinite('Banana').should.equal('a Banana');
    })
  })

  context('a noun that starts with a vowel when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      indefinite('apple', { capitalize: true }).should.equal('An apple');
    })
  })

  context('a noun that starts with a consonant when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      indefinite('banana', { capitalize: true }).should.equal('A banana');
    })
  })

  context('an acronym that starts with A, E, I, or O', () => {
    it('should be prefixed with an', () => {
      indefinite('IOU').should.equal('an IOU');
    })
  })

  context('an acronym that starts with U', () => {
    it('should be prefixed with a', () => {
      indefinite('UFO').should.equal('a UFO');
    })
  })

  context('an acronym that starts with a consonant', () => {
    it('should still be prefixed with a', () => {
      indefinite('CEO').should.equal('a CEO');
    })
  })

  context('an acronym that starts with U but with caseInsensitive passed in', () => {
    it('should be prefixed with an', () => {
      indefinite('UNCLE', { caseInsensitive: true }).should.equal('an UNCLE');
    })
  })
})
