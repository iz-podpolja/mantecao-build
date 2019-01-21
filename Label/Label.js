'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  display: 'inline',
  padding: '2px 6px 3px',
  fontSize: '75%',
  fontWeight: '700',
  lineHeight: '1px',
  color: _variables.colors.white,
  backgroundColor: _variables.colors.dustyGray,
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem'
};

var defaultAlertColors = {
  alert: _variables.colors.goldenTainoi,
  error: _variables.colors.amaranth,
  info: _variables.colors.pacificBlue,
  success: _variables.colors.java

  /**
  * small label - we can update this later
  */
};var Label = function Label(props) {
  var computedStyle = (0, _assign2.default)({}, defaultStyle, props.type ? { backgroundColor: defaultAlertColors[props.type] } : {});
  return _react2.default.createElement(
    'span',
    { style: computedStyle },
    props.children
  );
};

Label.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.string.isRequired
} : {};

exports.default = Label;