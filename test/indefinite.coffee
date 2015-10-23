describe 'indefinite', ->
  Given -> @subject = require '../lib/indefinite'

  context 'a noun that starts with a vowel', ->
    Then -> @subject('apple').should.eql 'an apple'

  context 'a noun that starts with a consonant', ->
    Then -> @subject('banana').should.eql 'a banana'

  context 'a noun that starts with a capital vowel', ->
    Then -> @subject('Apple').should.eql 'an Apple'

  context 'a noun that starts with a capital consonant', ->
    Then -> @subject('Banana').should.eql 'a Banana'
