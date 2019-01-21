'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScheduledIcon = function ScheduledIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      'g',
      { transform: 'translate(0, -1)' },
      _react2.default.createElement('path', { d: 'M7.8 6.2L7.8 9.7M5.5 12.8L26.5 12.8M23.8 6.2L23.8 9.7M3 9C3 8.4 3.5 7.9 4 7.9L28 7.9C28.6 7.9 29 8.4 29 9L29 28C29 28.6 28.5 29 28 29L4 29C3.4 29 3 28.6 3 28L3 9ZM12 21.1L14.3 23.5C14.7 23.9 15.4 23.9 15.7 23.5L21.1 18' })
    )
  );
};

exports.default = ScheduledIcon;