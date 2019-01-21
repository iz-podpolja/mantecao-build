'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = {
  cursor: 'pointer'

  /**
   * onClick wrapper that takes some styles if needed
   */
};var UnstyledButton = function UnstyledButton(props) {
  return _react2.default.createElement(
    'div',
    { onClick: props.onClick, style: defaultStyle },
    props.children
  );
};

UnstyledButton.propTypes = process.env.NODE_ENV !== "production" ? {
  onClick: _propTypes2.default.func
} : {};

exports.default = UnstyledButton;