import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 0.45 0.45" {...props}>
      <path
        d="M0 0.225a0.225 0.225 0 1 1 0.24 0.225V0.27h0.06V0.24H0.24V0.195A0.045 0.045 0 0 1 0.285 0.15h0.015V0.12h-0.015A0.075 0.075 0 0 0 0.21 0.195V0.24H0.15v0.03h0.06v0.18A0.225 0.225 0 0 1 0 0.225"
        fill="#fff"
      />
    </Svg>
  );
};

export default Icon;
