'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNativeSvg = require('react-native-svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FileText = function FileText(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    _reactNativeSvg.Svg,
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      'class': 'feather feather-file-text',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-file-text'
    }),
    _react2.default.createElement(_reactNativeSvg.Polyline, {
      points: '14 2 14 8 20 8',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-file-text'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '16',
      y1: '13',
      x2: '8',
      y2: '13',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-file-text'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '16',
      y1: '17',
      x2: '8',
      y2: '17',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-file-text'
    }),
    _react2.default.createElement(_reactNativeSvg.Polyline, {
      points: '10 9 9 9 8 9',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-file-text'
    })
  );
};

FileText.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

FileText.defaultProps = {
  color: 'black',
  size: '24'
};

exports.default = FileText;