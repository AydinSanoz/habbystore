import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFormatListCheckbox(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}>
      <Path d="M21 19v-2H8v2h13m0-6v-2H8v2h13M8 7h13V5H8v2M4 5v2h2V5H4M3 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V5m1 6v2h2v-2H4m-1 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2m1 6v2h2v-2H4m-1 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
    </Svg>
  );
}

export default SvgFormatListCheckbox;
