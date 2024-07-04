import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Arrow = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={23}
      fill="none"
      {...props}
    >
      <Path
        fill="#000"
        stroke="#000"
        strokeWidth={0.2}
        d="m12.855 2.79.005-.006a1.152 1.152 0 0 0-.118-1.54 1.248 1.248 0 0 0-1.722 0l-9.762 9.42-.005.005-.108.122-.005.005a1.152 1.152 0 0 0 .118 1.54l9.762 9.42.005.004.126.105.005.005a1.25 1.25 0 0 0 1.586-.114l.005-.006.108-.12.005-.007a1.153 1.153 0 0 0-.118-1.54L3.846 11.5l8.896-8.584.005-.005.108-.121Z"
      />
    </Svg>
  );
};
