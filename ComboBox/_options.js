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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  max-height: 16rem;\n  overflow-x: hidden;\n  overflow-y: scroll;\n'], ['\n  max-height: 16rem;\n  overflow-x: hidden;\n  overflow-y: scroll;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _option = require('./_option');

var _option2 = _interopRequireDefault(_option);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledWrapper = _styledComponents2.default.div(_templateObject);

var ComboBoxOptions = function (_Component) {
  (0, _inherits3.default)(ComboBoxOptions, _Component);

  function ComboBoxOptions() {
    (0, _classCallCheck3.default)(this, ComboBoxOptions);
    return (0, _possibleConstructorReturn3.default)(this, (ComboBoxOptions.__proto__ || (0, _getPrototypeOf2.default)(ComboBoxOptions)).apply(this, arguments));
  }

  (0, _createClass3.default)(ComboBoxOptions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          selectedOptions = _props.selectedOptions,
          focusedIndex = _props.focusedIndex,
          onSelect = _props.onSelect;

      return _react2.default.createElement(
        StyledWrapper,
        null,
        options.map(function (option, i) {
          return _react2.default.createElement(_option2.default, {
            key: i,
            ref: i,
            selected: selectedOptions.includes(option),
            onClick: function onClick() {
              return onSelect(option);
            },
            focused: i === focusedIndex,
            text: option
          });
        })
      );
    }
  }]);
  return ComboBoxOptions;
}(_react.Component);

ComboBoxOptions.propTypes = process.env.NODE_ENV !== "production" ? {
  focusedIndex: _propTypes2.default.number,
  onSelect: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.array.isRequired,
  selectedOptions: _propTypes2.default.array.isRequired
} : {};

exports.default = ComboBoxOptions;