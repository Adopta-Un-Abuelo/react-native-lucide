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

var AlarmMinus = function AlarmMinus(props) {
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
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, otherProps),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M12 21a8 8 0 100-16 8 8 0 000 16z',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M5 3L2 6',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M22 6l-3-3',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M6 19l-2 2',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M18 19l2 2',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }),
    _react2.default.createElement(_reactNativeSvg.Path, {
      d: 'M9 13h6',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  );
};

AlarmMinus.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

AlarmMinus.defaultProps = {
  color: 'black',
  size: '24'
};

exports.default = AlarmMinus;