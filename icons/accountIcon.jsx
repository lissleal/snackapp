import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const AccountIcon = ({ color }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none">
      <Path
        fill={color}
        d="M7.5 8a4.446 4.446 0 0 0 3.03-1.172c.804-.75 1.256-1.767 1.256-2.828 0-1.06-.452-2.078-1.255-2.828A4.446 4.446 0 0 0 7.5 0a4.446 4.446 0 0 0-3.03 1.172C3.666 1.922 3.214 2.939 3.214 4c0 1.06.452 2.078 1.256 2.828A4.446 4.446 0 0 0 7.5 8ZM5.97 9.5C2.672 9.5 0 11.994 0 15.072c0 .512.445.928.994.928h13.012c.549 0 .994-.416.994-.928C15 11.994 12.328 9.5 9.03 9.5H5.97Z"
      />
    </Svg>
  );
};
