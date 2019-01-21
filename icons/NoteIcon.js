'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoteIcon = function NoteIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11.6 5.2L11.6 8.7M10.4 13.8L20.6 13.8M10.4 17.8L20.6 17.8M10.4 21.8L20.6 21.8M19 5.2L19 8.7M7 7.9C7 7.4 7.5 6.9 8 6.9L23 6.9C23.6 6.9 24 7.4 24 7.9L24 25C24 25.6 23.5 26 23 26L8 26C7.4 26 7 25.5 7 25L7 7.9Z' })
  );
};

exports.default = NoteIcon;