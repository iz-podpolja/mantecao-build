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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ButtonGroupItem = require('./_ButtonGroupItem');

var _ButtonGroupItem2 = _interopRequireDefault(_ButtonGroupItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledDiv = _styledComponents2.default.div(_templateObject);

var ButtonGroup = function (_Component) {
  (0, _inherits3.default)(ButtonGroup, _Component);

  function ButtonGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(ButtonGroup)).call.apply(_ref, [this].concat(args))), _this), _this._toggleOption = function (option) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          selected = _this$props.selected;

      var newArray = selected.slice();
      var index = selected.indexOf(option);
      if (index > -1) {
        newArray.splice(index, 1);
      } else {
        newArray.push(option);
      }
      onChange(newArray);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          optionValues = _props.optionValues,
          disabled = _props.disabled,
          selected = _props.selected;

      return _react2.default.createElement(
        StyledDiv,
        null,
        options.map(function (option, index) {
          return _react2.default.createElement(_ButtonGroupItem2.default, {
            key: index,
            first: index === 0,
            last: index === options.length - 1,
            value: option,
            text: optionValues[index],
            selected: selected.indexOf(option) > -1,
            onSelect: _this2._toggleOption,
            disabled: disabled
          });
        })
      );
    }
  }]);
  return ButtonGroup;
}(_react.Component);

ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  optionValues: _propTypes2.default.array.isRequired,
  options: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.array.isRequired
} : {};

exports.default = ButtonGroup;