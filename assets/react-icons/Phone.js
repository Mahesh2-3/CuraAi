import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPhone = (props) => (
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
      d="M13.004 5.307a10.69 10.69 0 0 1-7.697 7.697c-1.428.363-2.64-.864-2.64-2.337V10c0-.368.299-.663.665-.7a6.7 6.7 0 0 0 1.77-.426l1.014 1.013a8.03 8.03 0 0 0 3.771-3.771L8.874 5.103a6.7 6.7 0 0 0 .427-1.771c.036-.367.331-.665.699-.665h.667c1.473 0 2.7 1.212 2.337 2.64"
    />
  </Svg>
);
export default SvgPhone;
