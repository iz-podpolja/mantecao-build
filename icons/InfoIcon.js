'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoIcon = function InfoIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      {
        strokeWidth: '1.3',
        fill: 'currentColor',
        transform: 'scale(0.27, 0.27) translate(0,-2)'
      },
      _react2.default.createElement('path', { d: 'M58.7 113C87.4 113 110.7 89.7 110.7 60.9 110.7 32.1 87.4 8.7 58.7 8.7 30 8.7 6.7 32.1 6.7 60.9 6.7 89.7 30 113 58.7 113L58.7 113ZM58.7 109.2C32.1 109.2 10.5 87.5 10.5 60.9 10.5 34.2 32.1 12.6 58.7 12.6 85.3 12.6 106.8 34.2 106.8 60.9 106.8 87.5 85.3 109.2 58.7 109.2L58.7 109.2ZM65.3 36.9C67.6 36.9 69.4 35 69.4 32.7 69.4 30.4 67.6 28.6 65.3 28.6 63 28.6 61.1 30.4 61.1 32.7 61.1 35 63 36.9 65.3 36.9ZM51.9 49.8L58.4 49 65.7 47.5 58.8 73.5C58.8 73.5 57.6 77.7 56.8 79.8 55.9 81.9 55.4 83.3 56.8 84.1 58.2 84.9 59.5 84.1 59.8 83.8 60.2 83.5 64.5 79.3 65 79 65.4 78.6 65.5 79.4 65.5 79.4 65.5 79.4 61.4 85.1 59.8 86.8 58.2 88.5 57.6 88.9 56.5 89.2 55.4 89.6 52.4 89.6 51.2 88.7 50 87.7 48.4 85.7 48.9 82.8 49.5 79.9 49.7 79.4 49.7 79.4L57.6 51.2 51.9 50.9 51.9 49.8Z' })
    )
  );
};

exports.default = InfoIcon;