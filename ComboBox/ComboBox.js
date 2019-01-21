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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Dropdown = require('../Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _KeyCodeListener = require('../KeyCodeListener');

var _KeyCodeListener2 = _interopRequireDefault(_KeyCodeListener);

var _options = require('./_options');

var _options2 = _interopRequireDefault(_options);

var _empty = require('./_empty');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComboBox = function (_Component) {
  (0, _inherits3.default)(ComboBox, _Component);

  function ComboBox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ComboBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ComboBox.__proto__ || (0, _getPrototypeOf2.default)(ComboBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filterText: '',
      isOpen: false,
      openDropdown: function openDropdown() {
        return _this.setState({ isOpen: true });
      },
      closeDropdown: function closeDropdown() {
        return _this.setState({ isOpen: false, focusedIndex: -1 });
      },
      focusedIndex: -1
    }, _this._shouldShowEmptyResults = function () {
      var filteredOptions = _this._getFilteredOptions();
      var options = _this.props.options;

      return filteredOptions.length === 0 && options.length !== 0;
    }, _this._incFocusedIndex = function () {
      var filteredOptions = _this._getFilteredOptions();
      if (_this.state.focusedIndex < filteredOptions.length - 1) {
        _this.setState({ focusedIndex: _this.state.focusedIndex + 1 });
      }
    }, _this._decFocusedIndex = function () {
      if (_this.state.focusedIndex > 0) {
        _this.setState({ focusedIndex: _this.state.focusedIndex - 1 });
      }
    }, _this._selectFocusedOption = function () {
      var onSelect = _this.props.onSelect;
      var focusedIndex = _this.state.focusedIndex;

      var filteredOptions = _this._getFilteredOptions();
      onSelect(filteredOptions[focusedIndex]);
    }, _this._scrollFocusedIntoView = function () {
      var focusedIndex = _this.state.focusedIndex;

      var options = _this.refs.comboBoxOptions;
      var optionsNode = ReactDOM.findDOMNode(options);
      var node = options && ReactDOM.findDOMNode(options.refs[focusedIndex]);
      if (node && optionsNode) {
        var optionPos = node.offsetTop + node.clientHeight;
        var height = optionsNode.clientHeight;
        var scrollHeight = optionsNode.scrollHeight;
        if (optionPos > height) {
          optionsNode.scrollTop = optionPos - height;
        } else if (scrollHeight > height) {
          optionsNode.scrollTop = 0;
        }
      }
    }, _this._getFilteredOptions = function () {
      var options = _this.props.options;
      var filterText = _this.state.filterText;

      var filteredOptions = options.filter(function (option) {
        return option.toLowerCase().includes(filterText.toLowerCase());
      });
      return filteredOptions.length ? filteredOptions : [];
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ComboBox, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var focusedIndex = this.state.focusedIndex;
      // only scroll into view if the focusedItem item changed last render

      if (focusedIndex !== prevState.focusedIndex) {
        this._scrollFocusedIntoView();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selectedOptions = _props.selectedOptions,
          onSelect = _props.onSelect,
          placeHolder = _props.placeHolder,
          emptyResultString = _props.emptyResultString;
      var _state = this.state,
          isOpen = _state.isOpen,
          openDropdown = _state.openDropdown,
          closeDropdown = _state.closeDropdown,
          focusedIndex = _state.focusedIndex;

      var TriggerNode = _react2.default.createElement(_TextField2.default, {
        style: { margin: '0rem' },
        placeHolder: placeHolder,
        onChange: function onChange(e) {
          return _this2.setState({ filterText: e.target.value });
        },
        onFocus: openDropdown,
        value: this.state.filterText
      });
      var Listener = _react2.default.createElement(_KeyCodeListener2.default, {
        onEsc: closeDropdown,
        onTab: closeDropdown,
        onUp: this._decFocusedIndex,
        onDown: this._incFocusedIndex,
        onEnter: this._selectFocusedOption
      });
      var filteredOptions = this._getFilteredOptions();
      return _react2.default.createElement(
        _Dropdown2.default,
        {
          fullWidth: true,
          triggerNode: TriggerNode,
          isOpen: isOpen,
          closeDropdown: closeDropdown,
          openDropdown: openDropdown,
          lockWidth: true
        },
        isOpen && Listener,
        this._shouldShowEmptyResults() ? _react2.default.createElement(_empty2.default, { emptyResultString: emptyResultString }) : _react2.default.createElement(_options2.default, {
          ref: 'comboBoxOptions',
          emptyResultString: emptyResultString,
          options: filteredOptions,
          selectedOptions: selectedOptions,
          focusedIndex: focusedIndex,
          onSelect: onSelect
        })
      );
    }
  }]);
  return ComboBox;
}(_react.Component);

ComboBox.propTypes = process.env.NODE_ENV !== "production" ? {
  emptyResultString: _propTypes2.default.string,
  onSelect: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.array.isRequired,
  placeHolder: _propTypes2.default.string,
  selectedOptions: _propTypes2.default.array.isRequired
} : {};

exports.default = ComboBox;