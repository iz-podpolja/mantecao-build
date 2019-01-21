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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: space-between;\n\n  & select:first-of-type + select {\n    margin-right: 0.3em;\n    margin-left: 0.3em;\n  }\n'], ['\n  display: flex;\n  justify-content: space-between;\n\n  & select:first-of-type + select {\n    margin-right: 0.3em;\n    margin-left: 0.3em;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 0.9em;\n  color: ', ';\n'], ['\n  font-size: 0.9em;\n  color: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  color: ', ';\n  padding-top: 0.2em;\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  cursor: pointer;\n  color: ', ';\n  padding-top: 0.2em;\n\n  &:hover {\n    color: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var t = _interopRequireWildcard(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../variables');

var _dates = require('../utils/dates');

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _TrashIcon = require('../icons/TrashIcon');

var _TrashIcon2 = _interopRequireDefault(_TrashIcon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledWrapper = _styledComponents2.default.div(_templateObject);

var StyledError = _styledComponents2.default.div(_templateObject2, _variables.colors.amaranth);

var StyledTrash = _styledComponents2.default.span(_templateObject3, _variables.colors.dustyGray, _variables.colors.emperor);

// Date Generation
var days = [].concat((0, _toConsumableArray3.default)(Array(31 + 1).keys())).slice(1);
var actualYear = (0, _dates.getYearFromDate)(new Date());
var years = (0, _dates.getPastYears)(120, actualYear

// Validation
);var validate = function validate(date) {
  if (date.day === 0 && date.month === 0 && date.year === 0) {
    return {}; // <-- need a way to clear the errors since it is maintained in this component's state - we can fix this somehow later
  }
  var errors = {};
  if (date.day === 0) {
    errors.day = true;
  }
  if (date.month === 0) {
    errors.month = true;
  }
  if (date.year === 0) {
    errors.year = true;
  }
  if (!(0, _dates.isValidDate)(date)) {
    errors.invalid = true;
  }
  return errors;
};

// Component
//  - Props:
//      - date :DateString (date='2017-05-03')
//      - monthBeforeDay :Boolean
//      - onChange :Func

var DateSelector = function (_Component) {
  (0, _inherits3.default)(DateSelector, _Component);

  function DateSelector() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DateSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DateSelector.__proto__ || (0, _getPrototypeOf2.default)(DateSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: {
        day: (0, _dates.getDayFromDate)(_this.props.date),
        // Month is 0 based so we need to add 1 here
        month: (0, _dates.getMonthFromDate)(_this.props.date) + 1,
        year: (0, _dates.getYearFromDate)(_this.props.date)
      },
      errors: {}
    }, _this.handleInputChange = function (evt) {
      var date = _this.state.date;
      date[evt.target.id] = parseInt(evt.target.value, 10);
      var errors = validate(date);
      _this.setState({ date: date, errors: errors }, function () {
        return _this.props.onChange(_this.state);
      });
    }, _this.resetDate = function () {
      _this.setState({
        date: { day: 0, month: 0, year: 0 },
        errors: {}
      }, function () {
        return _this.props.onChange(_this.state);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DateSelector, [{
    key: 'render',


    // doing the onchange in the component lifecycle was causing some strange behavior
    // when the values changed - so we do it with the methods that change the date
    // componentDidUpdate () {
    //   this.props.onChange(this.state)
    // }

    value: function render() {
      var day = _react2.default.createElement(_Select2.default, {
        name: this.props.dayString || 'Day',
        id: 'day',
        options: days,
        selected: this.state.date.day,
        onOptionChange: this.handleInputChange,
        hasError: this.state.errors.day
      });
      var month = _react2.default.createElement(_Select2.default, {
        name: this.props.monthString || 'Month',
        id: 'month',
        options: this.props.monthNames || _dates.MONTH_NAMES,
        values: [].concat((0, _toConsumableArray3.default)(Array(13).keys())).slice(1),
        selected: this.state.date.month,
        onOptionChange: this.handleInputChange,
        hasError: this.state.errors.month
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          StyledWrapper,
          null,
          this.props.monthBeforeDay ? month : day,
          this.props.monthBeforeDay ? day : month,
          _react2.default.createElement(_Select2.default, {
            name: this.props.yearString || 'Year',
            id: 'year',
            options: years,
            selected: this.state.date.year,
            onOptionChange: this.handleInputChange,
            hasError: this.state.errors.year,
            optionsAsValues: true
          }),
          this.props.allowReset && _react2.default.createElement(
            StyledTrash,
            { onClick: this.resetDate },
            _react2.default.createElement(_TrashIcon2.default, { style: { width: '2em', height: '2em' } })
          )
        ),
        this.state.errors.invalid && _react2.default.createElement(
          StyledError,
          null,
          this.props.errorString || 'Please provide a valid date'
        )
      );
    }
  }]);
  return DateSelector;
}(_react.Component);

DateSelector.defaultProps = {
  date: '1999-12-31'
};
DateSelector.propTypes = process.env.NODE_ENV !== "production" ? {
  allowReset: t.bool,
  date: t.string,
  dayString: t.string,
  errorString: t.string,
  monthBeforeDay: t.bool,
  monthNames: t.array,
  monthString: t.string,
  onChange: t.func.isRequired,
  yearString: t.string
} : {};
exports.default = DateSelector;