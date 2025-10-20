import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgThreeDots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.75 8a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M3 6.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m10 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
    />
  </Svg>
);
export default SvgThreeDots;
