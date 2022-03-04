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

const BookOpen = props => {
  const { color, size, fill, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path
        d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

BookOpen.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookOpen.defaultProps = {
  color: 'black',
  size: '24',
  fill: 'none',
};

export default BookOpen;
