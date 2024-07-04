import * as React from "react";
import Svg, { Path } from "react-native-svg";
export const Bag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.75}
      d="M10.017 2.319 5.97 6.378M17.15 2.319l4.048 4.059"
    />
    <Path
      stroke="#000"
      strokeWidth={1.75}
      d="M2.403 8.86c0-2.069 1.107-2.237 2.482-2.237h17.397c1.375 0 2.482.168 2.482 2.237 0 2.403-1.107 2.236-2.482 2.236H4.885c-1.375 0-2.482.167-2.482-2.236Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.75}
      d="m4.08 11.264 1.577 6.306c.357 2.169 1.218 3.756 4.416 3.756h6.742c3.477 0 3.991-1.52 4.394-3.622l1.878-6.44"
    />
  </Svg>
);
