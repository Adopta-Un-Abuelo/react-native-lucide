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

var Sunset = function Sunset(props) {
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
      'class': 'feather feather-sunset',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M17 18a5 5 0 0 0-10 0',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '12',
      y1: '9',
      x2: '12',
      y2: '2',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '4.22',
      y1: '10.22',
      x2: '5.64',
      y2: '11.64',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '1',
      y1: '18',
      x2: '3',
      y2: '18',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '21',
      y1: '18',
      x2: '23',
      y2: '18',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '18.36',
      y1: '11.64',
      x2: '19.78',
      y2: '10.22',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Line, {
      x1: '23',
      y1: '22',
      x2: '1',
      y2: '22',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    }),
    _react2.default.createElement(_reactNativeSvg.Polyline, {
      points: '16 5 12 9 8 5',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'class': 'feather feather-sunset'
    })
  );
};

Sunset.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Sunset.defaultProps = {
  color: 'black',
  size: '24'
};

exports.default = Sunset;