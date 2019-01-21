'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  flex: 1 1 30%;\n  font-size: 1em;\n  height: 2.4em;\n  color: ', ';\n  border-color: ', ';\n\n  &:focus {\n    outline-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  flex: 1 1 30%;\n  font-size: 1em;\n  height: 2.4em;\n  color: ', ';\n  border-color: ', ';\n\n  &:focus {\n    outline-color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledSelect = _styledComponents2.default.select(_templateObject, _variables.colors.white, _variables.colors.dustyGray, function (props) {
  return props.hasError ? _variables.colors.amaranth : _variables.colors.silver;
}, function (props) {
  return props.hasError && _variables.colors.amaranth;
});

var Select = function Select(_ref) {
  var id = _ref.id,
      name = _ref.name,
      onOptionChange = _ref.onOptionChange,
      options = _ref.options,
      selected = _ref.selected,
      values = _ref.values,
      hasError = _ref.hasError;
  return _react2.default.createElement(
    StyledSelect,
    {
      hasError: hasError,
      name: name,
      value: selected,
      onChange: onOptionChange,
      id: id
    },
    _react2.default.createElement(
      'option',
      { value: 0 },
      name
    ),
    options.map(function (option, i) {
      return _react2.default.createElement(
        'option',
        { key: i, value: values ? values[i] : option },
        option
      );
    })
  );
};

var arrayOf = _propTypes2.default.arrayOf,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    number = _propTypes2.default.number,
    oneOfType = _propTypes2.default.oneOfType,
    string = _propTypes2.default.string;


Select.propTypes = process.env.NODE_ENV !== "production" ? {
  hasError: bool,
  id: string,
  name: string,
  onOptionChange: func.isRequired,
  options: arrayOf(oneOfType([string, number])).isRequired,
  selected: oneOfType([string, number]),
  values: arrayOf(oneOfType([string, number]))
} : {};

exports.default = Select;