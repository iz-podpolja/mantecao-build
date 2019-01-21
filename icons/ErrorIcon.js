'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorIcon = function ErrorIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { strokeWidth: '1.3', transform: 'translate(0, -1)' },
      _react2.default.createElement('path', { d: 'M16 30C23.2 30 29 24.2 29 17 29 9.8 23.2 4 16 4 8.8 4 3 9.8 3 17 3 24.2 8.8 30 16 30ZM21.3 11.7L10.7 22.3M10.7 11.7L21.3 22.3' })
    )
  );
};

exports.default = ErrorIcon;