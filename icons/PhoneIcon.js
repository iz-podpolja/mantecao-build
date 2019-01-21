'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhoneIcon = function PhoneIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M13.9 17.9C15.7 19.7 17.8 20.6 17.8 20.6 18 20.7 18.2 20.6 18.4 20.5L21 18.2C21.2 18 21.4 18 21.5 18.2L25.9 22.1C26 22.2 26 22.4 25.9 22.6L23.1 25.7C23 25.9 22.8 26 22.6 26 22.6 26 18.1 25.7 14.7 23.3 11.3 21 8.5 17.1 8.5 17.1M14.1 18.1C12.4 16.3 11.4 14.2 11.4 14.2 11.3 14 11.4 13.8 11.5 13.6L13.8 10.9C14 10.8 14 10.6 13.8 10.5L9.9 6.1C9.8 6 9.6 6 9.4 6.1L6.3 8.9C6.1 9 6 9.2 6 9.4 6 9.4 5.8 13.6 8.7 17.3' })
    )
  );
};

exports.default = PhoneIcon;