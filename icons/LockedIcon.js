'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LockedIcon = function LockedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement('path', { d: 'M9.323 13.94S8.103 4 15.653 4c7.547 0 6.143 9.94 6.143 9.94m-16.296 1c0-.552.447-1 1.003-1h18.494c.554 0 1.003.446 1.003 1v12.367c0 .552-.447 1-1.003 1H6.503c-.554 0-1.003-.447-1.003-1V14.94zm10.15 3.56v5' })
  );
};

exports.default = LockedIcon;