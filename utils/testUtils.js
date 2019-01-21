'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupDOM = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exposedProperties = ['window', 'navigator', 'document'];

var setupDOM = exports.setupDOM = function setupDOM() {
  global.document = _jsdom2.default.jsdom('');
  global.window = document.defaultView;
  (0, _keys2.default)(document.defaultView).forEach(function (property) {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property);
      global[property] = document.defaultView[property];
    }
  });
  global.navigator = { userAgent: 'node.js' };
};