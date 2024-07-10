import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export const OrderIcon = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M.547.069a1.125 1.125 0 0 1 1 .112l1.578 1.081L4.703.182c.352-.241.871-.241 1.219 0L7.5 1.261 9.078.182a1.12 1.12 0 0 1 1.219 0l1.578 1.08 1.578-1.08c.277-.191.668-.235 1-.113.332.122.547.387.547.68v14.5c0 .295-.215.56-.547.682a1.125 1.125 0 0 1-1-.112l-1.578-1.082-1.578 1.082a1.12 1.12 0 0 1-1.219 0L7.5 14.737 5.922 15.82a1.12 1.12 0 0 1-1.219 0l-1.578-1.082-1.578 1.082c-.277.19-.668.234-1 .112C.215 15.81 0 15.544 0 15.25V.75C0 .456.215.19.547.069Zm3.203 4.43c-.344 0-.625.226-.625.5 0 .276.281.5.625.5h7.5c.344 0 .625-.224.625-.5 0-.274-.281-.5-.625-.5h-7.5ZM3.125 11c0 .276.281.5.625.5h7.5c.344 0 .625-.224.625-.5 0-.274-.281-.5-.625-.5h-7.5c-.344 0-.625.226-.625.5Zm.625-3.5c-.344 0-.625.226-.625.5 0 .276.281.5.625.5h7.5c.344 0 .625-.224.625-.5 0-.274-.281-.5-.625-.5h-7.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color} d="M0 0h15v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);