import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMagnifyPlus(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}>
      <Path d="M9 2a7 7 0 017 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6-2 2-6-6v-.59l-.81-.8A6.916 6.916 0 019 16a7 7 0 01-7-7 7 7 0 017-7M8 5v3H5v2h3v3h2v-3h3V8h-3V5H8z" />
    </Svg>
  );
}

export default SvgMagnifyPlus;
