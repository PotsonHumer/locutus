XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var gmmktime = require('/Users/kvz/code/phpjs/src/php/datetime/gmmktime.js')

describe('php.datetime.gmmktime.js', function () {
  it('should pass example 1', function (done) {
    gmmktime(14, 10, 2, 2, 1, 2008)
    var expected = 1201875002
    var result = gmmktime(14, 10, 2, 2, 1, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    gmmktime(0, 0, -1, 1, 1, 1970)
    var expected = -1
    var result = gmmktime(0, 0, -1, 1, 1, 1970)
    expect(result).to.deep.equal(expected)
    done()
  })
})