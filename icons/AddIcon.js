'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddIcon = function AddIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', {
      d: 'M8.4 7.4L24.6 23.6M24.2 7.8L8 24',
      transform: 'translate(16, 16) rotate(-315) translate(-16, -16)'
    })
  );
};

exports.default = AddIcon;