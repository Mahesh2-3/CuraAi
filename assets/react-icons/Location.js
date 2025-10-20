import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLocation = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
    />
  </Svg>
);
export default SvgLocation;
