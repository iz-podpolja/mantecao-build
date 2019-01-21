'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: ', ';\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n'], ['\n  background-color: ', ';\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ', ';\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  padding-left: 0.75rem;\n'], ['\n  padding-left: 0.75rem;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _CheckIcon = require('../icons/CheckIcon');

var _CheckIcon2 = _interopRequireDefault(_CheckIcon);

var _BlankIcon = require('../icons/BlankIcon');

var _BlankIcon2 = _interopRequireDefault(_BlankIcon);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: get the padding spaces from the theme
var StyledWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.focused ? _variables.colors.alto : 'inherit';
}, _variables.colors.alto);

var PaddedText = _styledComponents2.default.span(_templateObject2);

var checkIconStyles = {
  // <-- inline styles, not styled-components
  strokeWidth: '3px',
  color: _variables.colors.pacificBlue
};

var ComboBoxOption = function (_Component) {
  (0, _inherits3.default)(ComboBoxOption, _Component);

  function ComboBoxOption() {
    (0, _classCallCheck3.default)(this, ComboBoxOption);
    return (0, _possibleConstructorReturn3.default)(this, (ComboBoxOption.__proto__ || (0, _getPrototypeOf2.default)(ComboBoxOption)).apply(this, arguments));
  }

  (0, _createClass3.default)(ComboBoxOption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          selected = _props.selected,
          focused = _props.focused,
          onClick = _props.onClick;

      return _react2.default.createElement(
        StyledWrapper,
        { onClick: onClick, focused: focused },
        selected ? _react2.default.createElement(_CheckIcon2.default, { xsmall: true, style: checkIconStyles }) : _react2.default.createElement(_BlankIcon2.default, { xsmall: true }),
        _react2.default.createElement(
          PaddedText,
          null,
          text
        )
      );
    }
  }]);
  return ComboBoxOption;
}(_react.Component);

ComboBoxOption.propTypes = process.env.NODE_ENV !== "production" ? {
  focused: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  selected: _propTypes2.default.bool,
  text: _propTypes2.default.string.isRequired
} : {};

exports.default = ComboBoxOption;