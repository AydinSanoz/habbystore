import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHomeVariantOutline(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}>
      <Path d="M9 13h6v6h3v-9l-6-4.5L6 10v9h3v-6m-5 8V9l8-6 8 6v12H4z" />
    </Svg>
  );
}

export default SvgHomeVariantOutline;
