import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2E7D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 19V5m10 1-6 6m0 0 6 6m-6-6h14"
    />
  </Svg>
);
export default SvgBack;
