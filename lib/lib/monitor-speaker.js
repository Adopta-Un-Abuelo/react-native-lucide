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

var MonitorSpeaker = function MonitorSpeaker(props) {
  var color = props.color,
      size = props.size,
      fill = props.fill,
      otherProps = _objectWithoutProperties(props, ['color', 'size', 'fill']);

  return _react2.default.createElement(
    _reactNativeSvg.Svg,
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: fill,
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M5.5 20H8',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M17 9h.01',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Rect, {
      x: '12',
      y: '4',
      width: '10',
      height: '16',
      rx: '2',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M8 6H4a2 2 0 00-2 2v6a2 2 0 002 2h4',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Circle, {
      cx: '17',
      cy: '15',
      r: '1',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

MonitorSpeaker.propTypes = {
  color: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

MonitorSpeaker.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none'
};

exports.default = MonitorSpeaker;