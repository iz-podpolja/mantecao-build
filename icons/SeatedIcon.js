'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SeatedIcon = function SeatedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6.3 26.5L10.7 26.5M8.5 12.8L8.5 26.2M1.3 12.8L15.7 12.8M15.8 17.1L12.8 26.4M24.8 17.1L27.4 26.5M13 16L24.6 16C25.1 16 25.7 15.5 25.8 15L28.4 3' })
  );
};

exports.default = SeatedIcon;