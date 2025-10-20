import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGoogle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      fill="#F44336"
      fillRule="evenodd"
      d="M7.66 1.127c.77-.086 1.226-.086 2.053 0a6.98 6.98 0 0 1 3.879 1.934 106 106 0 0 0-2.11 2.05q-1.995-1.689-4.45-.78-1.803.83-2.51 2.687A83 83 0 0 1 2.24 5.256a.28.28 0 0 0-.17-.028Q3.858 1.78 7.659 1.126"
      clipRule="evenodd"
      opacity={0.987}
    />
    <Path
      fill="#FFC107"
      fillRule="evenodd"
      d="M2.068 5.228a.27.27 0 0 1 .17.028q1.127.9 2.283 1.762a8 8 0 0 0-.228 1.471q.039.72.228 1.415L2.125 11.81Q.561 8.54 2.068 5.228"
      clipRule="evenodd"
      opacity={0.997}
    />
    <Path
      fill="#448AFF"
      fillRule="evenodd"
      d="M13.478 14.12a28 28 0 0 0-2.34-1.848q1.223-.862 1.483-2.367H8.63V7.133q3.453-.03 6.903.058.654 3.555-1.512 6.409a7 7 0 0 1-.543.52"
      clipRule="evenodd"
      opacity={0.999}
    />
    <Path
      fill="#43A047"
      fillRule="evenodd"
      d="M4.52 9.905q1.308 3.248 4.793 3.032a4.2 4.2 0 0 0 1.825-.665 28 28 0 0 1 2.34 1.849 7.03 7.03 0 0 1-4.279 1.789q-.541.043-1.084 0-4.056-.478-5.99-4.1z"
      clipRule="evenodd"
      opacity={0.993}
    />
  </Svg>
);
export default SvgGoogle;
