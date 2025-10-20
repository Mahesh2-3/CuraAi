import * as React from "react";
import { Path, Svg } from "react-native-svg";

const SvgHeadDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.458 6.375 8.5 11.333 3.542 6.375"
    />
  </Svg>
);
export default SvgHeadDown;
