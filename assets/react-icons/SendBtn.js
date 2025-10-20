import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgSendBtn = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Rect width={33} height={33} fill="#4CAF50" fillOpacity={0.62} rx={16.5} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 24.563V10.125m5.5 4.813-5.5-5.5-5.5 5.5"
    />
  </Svg>
);
export default SvgSendBtn;
