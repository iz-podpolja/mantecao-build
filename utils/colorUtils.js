'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var colorLuminance = exports.colorLuminance = function colorLuminance(hex, lum) {
  // validate hex string or default to white
  hex = String(hex).replace(/[^0-9a-f]/gi, '') || 'FFFFFF';
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;
  // convert to decimal and change luminosity
  var hexColor = '#';
  var c = void 0;
  var i = void 0;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    hexColor += ('00' + c).substr(c.length);
  }

  return hexColor;
};

var hexToRgb = exports.hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : '';
};