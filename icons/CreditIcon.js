'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditIcon = function CreditIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { strokeWidth: '0.65', fill: 'none', transform: 'translate(2.000000, 8.000000)' },
      _react2.default.createElement('path', { d: 'M0 2C0 0.9 0.9 0 2 0L26 0C27.1 0 28 0.9 28 2L28 15.6C28 16.7 27.1 17.6 26 17.6L2 17.6C0.9 17.6 0 16.7 0 15.6L0 2ZM22.3 12.3C22 12.1 21.7 12 21.3 12 20.5 12 19.7 12.7 19.7 13.6 19.7 14.5 20.5 15.2 21.3 15.2 21.7 15.2 22 15.1 22.3 14.9 22.5 15.1 22.9 15.2 23.2 15.2 24.1 15.2 24.8 14.5 24.8 13.6 24.8 12.7 24.1 12 23.2 12 22.9 12 22.5 12.1 22.3 12.3ZM3.2 2.8L7.3 2.8 7.3 6.9 3.2 6.9 3.2 2.8ZM3.4 14.9L12.6 14.9 3.4 14.9ZM8 13.1L12.6 13.1 8 13.1ZM3.4 13.1L6.6 13.1 3.4 13.1ZM3.5 9.3L24.6 9.3 3.5 9.3Z' })
    )
  );
};

exports.default = CreditIcon;