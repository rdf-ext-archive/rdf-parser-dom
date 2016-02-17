/* global DOMParser */
var inherits = require('inherits')
var AbstractParser = require('rdf-parser-abstract')

function DomParser (rdf) {
  AbstractParser.call(this, rdf)
}

inherits(DomParser, AbstractParser)

DomParser.prototype.parseHtmlDom = function (toparse, base) {
  var parser = new DOMParser()

  return parser.parseFromString(toparse, 'text/html')
}

DomParser.prototype.parseXmlDom = function (toparse, base) {
  var parser = new DOMParser()

  return parser.parseFromString(toparse, 'application/xml')
}

module.exports = DomParser
