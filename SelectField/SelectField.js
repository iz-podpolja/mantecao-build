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

var defaultStyle = {
  backgroundColor: _variables.colors.white,
  borderRadius: '0.4rem',
  border: '1px solid',
  borderColor: _variables.colors.silver,
  height: '3.3rem',
  width: '100%'
};
var defaultLabelStyle = {
  display: 'block',
  fontWeight: 600,
  marginBottom: '0.5rem',
  maxWidth: '100%'
};
var disabledStyle = {
  cursor: 'not-allowed',
  backgroundColor: _variables.colors.gallery

  /**
   * Can be given options to list in the select dropdown (assigned as optionValues)
   */
};var SelectField = function SelectField(props) {
  var optionValues = props.optionValues,
      options = props.options;

  if (!optionValues) {
    optionValues = options;
  }

  var borderColorStyle = (0, _assign2.default)({}, props.warning ? { borderColor: _variables.colors.goldenTainoi } : {}, props.error ? { borderColor: _variables.colors.amaranth } : {});
  var textColorStyle = (0, _assign2.default)({}, props.disabled ? { color: _variables.colors.dustyGray } : {}, props.warning ? { color: _variables.colors.goldenTainoi } : {}, props.error ? { color: _variables.colors.amaranth } : {});

  var computedInputStyle = (0, _assign2.default)({}, defaultStyle, borderColorStyle, props.disabled ? disabledStyle : {});
  var computedLabelStyle = (0, _assign2.default)({}, defaultLabelStyle, textColorStyle);
  var computedContainerStyle = (0, _assign2.default)({ marginBottom: '1rem' }, props.style);
  var computedHintStyle = (0, _assign2.default)({ marginTop: '0.5rem' }, textColorStyle);

  return _react2.default.createElement(
    'div',
    { style: computedContainerStyle },
    props.label && _react2.default.createElement(
      'label',
      { style: computedLabelStyle },
      props.label
    ),
    _react2.default.createElement(
      'select',
      {
        id: props.id,
        className: props.className,
        disabled: props.disabled,
        onBlur: props.onBlur,
        onChange: props.onChange,
        style: computedInputStyle,
        required: props.required,
        defaultValue: props.defaultValue,
        value: props.value
      },
      props.options.map(function (option, index) {
        return _react2.default.createElement(
          'option',
          { key: index, value: optionValues[index] },
          options[index]
        );
      })
    ),
    props.hint && _react2.default.createElement(
      'div',
      { style: computedHintStyle },
      props.hint
    )
  );
};

SelectField.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  error: _propTypes2.default.bool,
  hint: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  optionValues: _propTypes2.default.array,
  options: _propTypes2.default.array.isRequired,
  required: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
  warning: _propTypes2.default.bool,
  id: _propTypes2.default.string
} : {};

exports.default = SelectField;