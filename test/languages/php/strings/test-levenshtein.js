XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var levenshtein = require('/Users/kvz/code/phpjs/src/php/strings/levenshtein.js')

describe('php.strings.levenshtein.js', function () {
  it('should pass example 1', function (done) {
    levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld')
    var expected = 3
    var result = levenshtein('Kevin van Zonneveld', 'Kevin van Sommeveld')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    levenshtein("carrrot", "carrots")
    var expected = 2
    var result = levenshtein("carrrot", "carrots")
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    levenshtein("carrrot", "carrots", 2, 3, 4)
    var expected = 6
    var result = levenshtein("carrrot", "carrots", 2, 3, 4)
    expect(result).to.deep.equal(expected)
    done()
  })
})