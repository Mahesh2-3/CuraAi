import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgHospital = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      clipPath="url(#hospital_svg__a)"
    >
      <Path d="M17.768 34.443V7.478H1.331v26.965zm0 0h12.039V22.586h-12.04zM7.34 19.29v-6.634m4.42 0v6.631m-4.42-3.591h4.42m22.908-8.625c0 3.051-5.514 10.416-5.514 10.416S23.64 10.122 23.64 7.071a5.514 5.514 0 0 1 11.028 0" />
      <Path d="M29.156 7.776a.652.652 0 1 1 0-1.305" />
      <Path d="M29.154 7.776a.652.652 0 1 0 0-1.305M9.551 34.443v-4.659" />
    </G>
    <Defs>
      <ClipPath id="hospital_svg__a">
        <Path fill="#fff" d="M0 0h36v36H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgHospital;
