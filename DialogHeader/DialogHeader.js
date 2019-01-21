'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CloseIcon = require('../icons/CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var _UnstyledButton = require('../UnstyledButton');

var _UnstyledButton2 = _interopRequireDefault(_UnstyledButton);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultWrapperStyle = {
  position: 'relative',
  background: _variables.colors.pacificBlue,
  color: _variables.colors.white
};
var defaultContainerStyle = {
  padding: '2rem',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 100
};
var defaultCloseStyle = {
  position: 'absolute',
  top: '1rem',
  right: '1rem'

  /**
   * Header section of a dialog
   */
};var DialogHeader = function DialogHeader(props) {
  var close = _react2.default.createElement(
    'div',
    { style: defaultCloseStyle },
    _react2.default.createElement(
      _UnstyledButton2.default,
      { onClick: props.close },
      _react2.default.createElement(_CloseIcon2.default, null)
    )
  );
  return _react2.default.createElement(
    'div',
    { style: defaultWrapperStyle },
    _react2.default.createElement(
      'div',
      { style: defaultContainerStyle },
      props.children
    ),
    props.close ? close : null
  );
};

DialogHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  close: _propTypes2.default.func
} : {};

exports.default = DialogHeader;