import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUpload = (props) => (
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
      d="M6 7.91V16a6 6 0 1 0 12 0V6a4 4 0 1 0-8 0v9.182a2 2 0 1 0 4 0V8"
    />
  </Svg>
);
export default SvgUpload;
