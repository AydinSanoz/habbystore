import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHomeVariant(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      stroke="#000"
      {...props}>
      <Path d="M12 3l8 6v12h-5v-7H9v7H4V9l8-6z" />
    </Svg>
  );
}

export default SvgHomeVariant;
