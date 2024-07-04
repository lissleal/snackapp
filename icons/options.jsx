import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Options = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 1h14M1 10h24M6 19h14"
    />
  </Svg>
);
