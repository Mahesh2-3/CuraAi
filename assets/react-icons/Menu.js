import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMenu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#2E7D32" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
  </Svg>
);
export default SvgMenu;
