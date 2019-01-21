'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDate = exports.getYearFromDate = exports.getMonthFromDate = exports.getDayFromDate = exports.getPastYears = exports.MONTH_NAMES = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// () : Array<Number>
var MONTH_NAMES = exports.MONTH_NAMES = 'January February March April May June July August September October November December'.split(' '

// (Number, Number) : Array<Number>
);var getPastYears = exports.getPastYears = function getPastYears(yearsBack, startYear) {
  var years = [].concat((0, _toConsumableArray3.default)(Array(yearsBack + 1).keys())).map(function (num) {
    return startYear - num;
  });
  return years;
};

// (String) : Number
var getDayFromDate = exports.getDayFromDate = function getDayFromDate(date) {
  return new Date(date).getUTCDate

  // (String) : Number
  ();
};var getMonthFromDate = exports.getMonthFromDate = function getMonthFromDate(date) {
  return new Date(date).getUTCMonth

  // (String) : Number
  ();
};var getYearFromDate = exports.getYearFromDate = function getYearFromDate(date) {
  return new Date(date).getUTCFullYear

  // ({Number, Number, Number}) : Boolean
  ();
};var isValidDate = exports.isValidDate = function isValidDate(date) {
  var testDate = new Date(date.year, date.month - 1, date.day);
  return testDate.getDate() === date.day && testDate.getMonth() === date.month - 1 && testDate.getFullYear() === date.year;
};