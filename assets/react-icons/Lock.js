import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillOpacity={0.16}
      d="M4.4 6.667h7.2c.587 0 1.067.48 1.067 1.066V12.4c0 .88-.72 1.6-1.6 1.6H4.933c-.88 0-1.6-.72-1.6-1.6V7.733c0-.586.48-1.066 1.067-1.066"
    />
    <Path
      stroke="#81C784"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5.333 6.667v-2a2.666 2.666 0 1 1 5.334 0v2M8 10a.667.667 0 1 0 0-1.333A.667.667 0 0 0 8 10m0 0v2M4.4 6.667h7.2c.587 0 1.067.48 1.067 1.066V12.4c0 .88-.72 1.6-1.6 1.6H4.933c-.88 0-1.6-.72-1.6-1.6V7.733c0-.586.48-1.066 1.067-1.066"
    />
  </Svg>
);
export default SvgLock;
