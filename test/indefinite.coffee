describe 'indefinite', ->
  Given -> @subject = require 'lib/indefinite'

  context 'a noun that starts with a vowel', ->
    Then -> @subject('apple').should.eql 'an apple'

  context 'a noun that starts with a consonant', ->
    Then -> @subject('banana').should.eql 'a banana'
