'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EyeClosedIcon = function EyeClosedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { transform: 'translate(1 8)' },
      _react2.default.createElement('path', {
        stroke: 'currentColor',
        strokeWidth: '1.3',
        d: 'M14.806 16.59c8.686 0 14.133-6.603 14.133-6.603.37-.403.375-1.06-.014-1.467 0 0-5.434-6.54-14.12-6.54C6.12 1.98.674 8.532.674 8.532c-.372.4-.376 1.06 0 1.454 0 0 5.447 6.602 14.132 6.602zm.194-.026c4.01 0 7.258-3.272 7.258-7.308S19.008 1.95 15 1.95c-4.01 0-7.258 3.27-7.258 7.306s3.25 7.308 7.258 7.308zm-9.92 2.192L24.92.244'
      }),
      _react2.default.createElement('ellipse', { fill: 'currentColor', cx: '14.758', cy: '9.5', rx: '3.629', ry: '3.654' })
    )
  );
};

exports.default = EyeClosedIcon;