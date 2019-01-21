'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    @media (min-width: ', ') {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', ') {\n      ', '\n    }\n  ']);

var _styledComponents = require('styled-components');

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var media = exports.media = (0, _keys2.default)(_variables.breakpoints).reduce(function (acc, breakpoint) {
  acc[breakpoint] = function () {
    return (0, _styledComponents.css)(_templateObject, _variables.breakpoints[breakpoint], _styledComponents.css.apply(undefined, arguments));
  };
  return acc;
}, {});