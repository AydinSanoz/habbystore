import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFormatListBulletedSquare(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}>
      <Path d="M3 4h4v4H3V4m6 1v2h12V5H9m-6 5h4v4H3v-4m6 1v2h12v-2H9m-6 5h4v4H3v-4m6 1v2h12v-2H9" />
    </Svg>
  );
}

export default SvgFormatListBulletedSquare;
