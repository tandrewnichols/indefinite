import assert from 'assert';
import indefinite from '../dist/indefinite.cjs';

describe('indefinite', () => {

  context('a word that starts with a vowel', () => {
    it('should be prefixed with an', () => {
      assert(indefinite('apple') === 'an apple');
    })
  })

  context('a word that starts with a consonant', () => {
    it('should be prefixed with a', () => {
      assert(indefinite('banana') === 'a banana');
    })
  })

  context('a word that starts with a capital vowel', () => {
    it('should be maintain capitalization', () => {
      assert(indefinite('Apple') === 'an Apple');
    })
  })

  context('a word that starts with a capital consonant', () => {
    it('should maintain capitalization', () => {
      assert(indefinite('Banana') === 'a Banana');
    })
  })

  context('a word that starts with a vowel when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      assert(indefinite('apple', { capitalize: true }) === 'An apple');
    })
  })

  context('a word that starts with a consonant when capitalize is passed in', () => {
    it('should capitalize the article', () => {
      assert(indefinite('banana', { capitalize: true }) === 'A banana');
    })
  })

  context('an acronym that starts with A, E, I, or O', () => {
    it('should be prefixed with an', () => {
      assert(indefinite('IOU') === 'an IOU');
    })
  })

  context('an acronym that starts with U', () => {
    it('should be prefixed with a', () => {
      assert(indefinite('UFO') === 'a UFO');
    })
  })

  context('an acronym that starts with a consonant', () => {
    it('should still be prefixed with a', () => {
      assert(indefinite('CEO') === 'a CEO');
    })
  })

  context('an acronym that starts with U but with caseInsensitive passed in', () => {
    it('should be prefixed with an', () => {
      assert(indefinite('UNCLE', { caseInsensitive: true }) === 'an UNCLE');
    })
  })

  context('an irregular word beginning with a silent consonant', () => {
    it('should be prefixed with an', () => {
      assert(indefinite('honor') === 'an honor');
    })
  })

  context('an irregular word beginning with a vowel that makes a consonant sound', () => {
    it('should be prefixed with a', () => {
      assert(indefinite('ukelele') === 'a ukelele');
    })
  })

  context('an irregular word when multiple words are passed in', () => {
    it('should be prefixed based on the first word only', () => {
      assert(indefinite('ouija board') === 'a ouija board');
    })
  })

  context('an irregular word that is hyphenated is passed in', () => {
    it('should be prefixed based on the first part of the word only', () => {
      assert(indefinite('honor-bound') === 'an honor-bound');
    })
  })

  context('a plural form of an irregular word is passed in', () => {
    it('should be prefixed based on the singular form', () => {
      assert(indefinite('hours') === 'an hours');
    })
  })

  context('an irregular plural form of an irregular word is passed in', () => {
    it('should be prefixed based on the singular form', () => {
      assert(indefinite('heiresses') === 'an heiresses');
    })
  })

  context('a past tense verb form of an irregular word is passed in', () => {
    it('should be prefixed based on the present tense', () => {
      assert(indefinite('honored') === 'an honored');
    })
  })

  context('a possessive form of an irregular word is passed in', () => {
    it('should be prefixed based on the non-possessive form', () => {
      assert(indefinite('heir\'s') === 'an heir\'s');
    })
  })

  context('an irregular word with some capitalization is passed', () => {
    it('should be treated case-insensitively', () => {
      assert(indefinite('Hour') === 'an Hour');
    })
  })
})
