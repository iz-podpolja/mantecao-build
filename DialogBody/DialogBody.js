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
  width: '80%',
  margin: '0rem auto',
  padding: '3rem 0rem'
};
var defaultBgColor = _variables.colors.white;

/**
 * Body section of a dialog
 */
var DialogBody = function DialogBody(props) {
  var addedStyle = { textAlign: props.right ? 'right' : 'left' };
  var style = (0, _assign2.default)({}, defaultStyle, addedStyle, props.style);
  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: props.bgColor || defaultBgColor } },
    _react2.default.createElement(
      'div',
      { style: style },
      props.children
    )
  );
};

DialogBody.propTypes = process.env.NODE_ENV !== "production" ? {
  bgColor: _propTypes2.default.string,
  right: _propTypes2.default.bool,
  style: _propTypes2.default.object
} : {};

exports.default = DialogBody;