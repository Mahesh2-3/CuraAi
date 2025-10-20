import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgClose = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={27}
    fill="none"
    {...props}
  >
    <G clipPath="url(#close_svg__a)">
      <Path
        fill="#000"
        d="M2.87 3.87a1.655 1.655 0 0 0-2.36 0 1.705 1.705 0 0 0 0 2.39l7.157 7.24-7.151 7.246a1.705 1.705 0 0 0 0 2.389c.65.659 1.708.659 2.359 0l7.151-7.246 7.156 7.24c.651.66 1.709.66 2.36 0 .65-.659.65-1.73 0-2.389l-7.157-7.24 7.151-7.246c.651-.659.651-1.73 0-2.389a1.655 1.655 0 0 0-2.359 0l-7.151 7.246z"
      />
    </G>
    <Defs>
      <ClipPath id="close_svg__a">
        <Path fill="#fff" d="M0 0h20v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgClose;
