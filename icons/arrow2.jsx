import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Arrow2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M27.5 7H1M27.5 7l-6-6M27.5 7l-6 6"
    />
  </Svg>
);
