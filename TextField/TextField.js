'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultContainerStyle = {
  marginBottom: '1rem'
}; // we should remove the 'type' prop here and make specific fields for other types (like number)
// this component should only be type='text'

var defaultInputStyle = {
  width: '100%',
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: _variables.colors.silver,
  padding: '0.6rem 1.2rem',
  boxSizing: 'border-box'
};
var defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
};
var defaultHintStyle = {
  marginTop: '0.5rem'
};
var disabledStyle = {
  cursor: 'not-allowed',
  backgroundColor: _variables.colors.gallery
};
var iconInputStyle = {
  paddingLeft: '3.5rem'
};
var defaultIconContainerStyle = {
  position: 'relative'
};
var defaultIconStyle = {
  padding: '0.7rem',
  position: 'absolute'
};

var TextField = function TextField(props) {
  var borderColorStyle = (0, _assign2.default)({}, props.warning ? { borderColor: _variables.colors.goldenTainoi } : {}, props.error ? { borderColor: _variables.colors.amaranth } : {});
  var textColorStyle = (0, _assign2.default)({}, props.warning ? { color: _variables.colors.goldenTainoi } : {}, props.error ? { color: _variables.colors.amaranth } : {});

  var computedContainerStyle = (0, _assign2.default)({}, defaultContainerStyle, props.style);
  var computedInputStyle = (0, _assign2.default)({}, defaultInputStyle, borderColorStyle, props.icon ? iconInputStyle : {}, props.disabled ? disabledStyle : {});
  var computedIconContainerStyle = (0, _assign2.default)({}, defaultIconContainerStyle);
  var computedLabelStyle = (0, _assign2.default)({}, defaultLabelStyle, textColorStyle);
  var computedHintStyle = (0, _assign2.default)({}, defaultHintStyle, textColorStyle);

  var inputField = _react2.default.createElement('input', {
    className: props.className,
    defaultValue: props.defaultValue,
    disabled: props.disabled,
    id: props.id,
    max: props.max,
    maxLength: props.maxLength,
    min: props.min,
    minLength: props.minLength,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onClick: props.onClick,
    onFocus: props.onFocus,
    placeholder: props.placeHolder,
    required: props.required,
    step: props.step,
    style: computedInputStyle,
    type: props.type,
    value: props.value
  });
  var textAreaField = _react2.default.createElement('textarea', {
    className: props.className,
    defaultValue: props.defaultValue,
    disabled: props.disabled,
    id: props.id,
    maxLength: props.maxLength,
    minLength: props.minLength,
    onBlur: props.onBlur,
    onChange: props.onChange,
    onClick: props.onClick,
    onFocus: props.onFocus,
    placeholder: props.placeHolder,
    required: props.required,
    rows: props.rows,
    style: computedInputStyle,
    value: props.value
  });
  return _react2.default.createElement(
    'div',
    { style: computedContainerStyle },
    props.label && _react2.default.createElement(
      'label',
      { style: computedLabelStyle },
      props.label
    ),
    _react2.default.createElement(
      'div',
      { style: computedIconContainerStyle },
      props.icon ? _react2.default.createElement(
        'div',
        { style: defaultIconStyle },
        props.icon
      ) : null,
      props.multiLine ? textAreaField : inputField
    ),
    props.hint && _react2.default.createElement(
      'div',
      { style: computedHintStyle },
      props.hint
    )
  );
};
var bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    node = _propTypes2.default.node,
    number = _propTypes2.default.number,
    string = _propTypes2.default.string,
    object = _propTypes2.default.object,
    oneOfType = _propTypes2.default.oneOfType;


TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: string,
  defaultValue: oneOfType([string, number]),
  disabled: bool,
  error: bool,
  hint: string,
  icon: node,
  id: string,
  label: string,
  max: number,
  maxLength: number,
  min: number,
  minLength: number,
  multiLine: bool,
  onBlur: func,
  onChange: func,
  onClick: func,
  onFocus: func,
  placeHolder: string,
  required: bool,
  rows: number,
  step: number,
  style: object,
  type: string,
  value: oneOfType([string, number]),
  warning: bool
} : {};

exports.default = TextField;