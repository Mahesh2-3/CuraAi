import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgEye = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#81C784"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 8.667c2.4-5.334 9.6-5.334 12 0"
    />
    <Path
      stroke="#81C784"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 11.333a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
    />
  </Svg>
);
export default SvgEye;
