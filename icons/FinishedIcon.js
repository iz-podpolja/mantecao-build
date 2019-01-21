'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinishedIcon = function FinishedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22.2 7.9C21.2 7.2 20 6.7 18.7 6.3 17.8 6.1 16.9 6 16 6 9.9 6 5 10.9 5 17 5 23.1 9.9 28 16 28L16 28C22.1 28 27 23.1 27 17M14 13.1L18.4 17.6C18.7 17.9 19.4 17.9 19.8 17.6L29.1 8' })
  );
};

exports.default = FinishedIcon;