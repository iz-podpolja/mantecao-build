'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessIcon = function SuccessIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { strokeWidth: '1.3', transform: 'translate(0, -0.5)' },
      _react2.default.createElement('path', { d: 'M16.5 29C23.4 29 29 23.4 29 16.5 29 9.6 23.4 4 16.5 4 9.6 4 4 9.6 4 16.5 4 23.4 9.6 29 16.5 29ZM10 16.6L13.8 20.4C14.2 20.8 14.8 20.8 15.2 20.4L23.5 12' })
    )
  );
};

exports.default = SuccessIcon;