import React from 'react';
import PropTypes from 'prop-types';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';

const SkipBack = props => {
  const { color, size, fill, strokeWidth, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Polygon
        points="19 20 9 12 19 4 19 20"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Line
        x1="5"
        y1="19"
        x2="5"
        y2="5"
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

SkipBack.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  strokeWidth: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkipBack.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
  strokeWidth: '2',
};

export default SkipBack;
