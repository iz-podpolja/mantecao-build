'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThumbIcon = function ThumbIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5 13.6C5 13 5.4 12.6 6 12.6L9 12.6C9.6 12.6 10 13 10 13.6L10 22.5C10 23.1 9.6 23.5 9 23.5L6 23.5C5.4 23.5 5 23.1 5 22.5L5 13.6ZM10 14.9L11.8 14.9C11.8 14.9 14.1 11.1 14.2 11 15.1 10 15.9 9.6 16.4 8.8 17.6 6.9 17.6 5 18.6 5 19.5 5 19.9 5.8 19.9 8 19.9 10.2 19.7 9.3 19.1 11 18.5 12.7 19.1 12.5 19.1 12.5L23.2 12.7C23.2 12.7 24.6 12.8 24.6 13.7 24.6 14.4 24.4 15.2 24.4 15.3 24.4 15.7 24.9 16.5 24.7 17.3 24.6 18.2 23.9 18.3 24.1 19 24.4 19.8 24 20 23.7 20.7 23.4 21.4 24.1 21.4 23.4 22.2 22.7 23 20.2 22.6 20.2 22.6 20.2 22.6 12.2 22.7 11.8 22.6 11.5 22.4 10 21 10 21' })
  );
};

exports.default = ThumbIcon;