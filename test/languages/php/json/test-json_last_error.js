XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var json_last_error = require('/Users/kvz/code/phpjs/src/php/json/json_last_error.js')

describe('php.json.json_last_error.js', function () {
  it('should pass example 1', function (done) {
    json_last_error()
    var expected = 0
    var result = json_last_error()
    expect(result).to.deep.equal(expected)
    done()
  })
})