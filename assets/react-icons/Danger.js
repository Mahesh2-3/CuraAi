import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDanger = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.968 16.143C12.345 8.38 14.534 4.5 18 4.5s5.655 3.88 10.032 11.643l.546.966c3.637 6.45 5.457 9.675 3.813 12.033S26.679 31.5 18.546 31.5h-1.092c-8.133 0-12.201 0-13.845-2.358s.175-5.583 3.813-12.033zM18 10.875A1.125 1.125 0 0 1 19.125 12v7.5a1.125 1.125 0 1 1-2.25 0V12A1.125 1.125 0 0 1 18 10.875M18 25.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDanger;
