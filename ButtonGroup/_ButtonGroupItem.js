'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _polished = require('polished');

var _variables = require('../variables');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroupItem = function ButtonGroupItem(_ref) {
  var text = _ref.text,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      first = _ref.first,
      last = _ref.last,
      selected = _ref.selected,
      value = _ref.value;

  var style = {
    borderTopLeftRadius: first ? '4px' : '0px',
    borderBottomLeftRadius: first ? '4px' : '0px',
    borderTopRightRadius: last ? '4px' : '0px',
    borderBottomRightRadius: last ? '4px' : '0px',
    boxShadow: 'inset 0 1px rgba(0,0,0,.05)',
    padding: '.5em 1.5em',
    borderLeft: '1px solid ' + (selected ? (0, _polished.darken)(0.1, _variables.colors.blueBayoux) : (0, _polished.darken)(0.1, _variables.colors.silver))
  };

  return _react2.default.createElement(
    _Button2.default,
    {
      onClick: function onClick() {
        return onSelect(value);
      },
      color: selected ? _variables.colors.blueBayoux : _variables.colors.silver,
      disabled: disabled,
      style: style
    },
    text
  );
};

var bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    number = _propTypes2.default.number,
    string = _propTypes2.default.string,
    oneOfType = _propTypes2.default.oneOfType;

ButtonGroupItem.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: bool,
  first: bool.isRequired,
  last: bool.isRequired,
  onSelect: func.isRequired,
  selected: bool.isRequired,
  text: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number, func]).isRequired
} : {};

exports.default = ButtonGroupItem;