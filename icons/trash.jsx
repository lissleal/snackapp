import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
export const Trash = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M4.527.553c.18-.34.552-.553.957-.553h4.032c.405 0 .776.212.957.553l.241.447h3.215C14.52 1 15 1.447 15 2c0 .553-.479 1-1.071 1H1.07C.48 3 0 2.553 0 2c0-.553.479-1 1.071-1h3.215l.24-.447ZM1.07 4H13.93v10c0 1.103-.961 2-2.143 2H3.214c-1.182 0-2.143-.897-2.143-2V4Zm3.215 2c-.295 0-.536.225-.536.5v7c0 .275.241.5.536.5.294 0 .535-.225.535-.5v-7c0-.275-.24-.5-.535-.5ZM7.5 6c-.295 0-.536.225-.536.5v7c0 .275.241.5.536.5.295 0 .536-.225.536-.5v-7c0-.275-.241-.5-.536-.5Zm3.214 0c-.294 0-.535.225-.535.5v7c0 .275.24.5.535.5.295 0 .536-.225.536-.5v-7c0-.275-.241-.5-.536-.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);