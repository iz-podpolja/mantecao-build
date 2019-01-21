'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  font-style: italic;\n  color: ', ';\n'], ['\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  font-style: italic;\n  color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: get the padding spaces from the theme
var Empty = _styledComponents2.default.div(_templateObject, _variables.colors.silver);

var ComboBoxEmpty = function ComboBoxEmpty(_ref) {
  var emptyResultString = _ref.emptyResultString;
  return _react2.default.createElement(
    Empty,
    null,
    emptyResultString || 'Nothing matches'
  );
};

ComboBoxEmpty.propTypes = process.env.NODE_ENV !== "production" ? {
  emptyResultString: _propTypes2.default.string
} : {};

exports.default = ComboBoxEmpty;