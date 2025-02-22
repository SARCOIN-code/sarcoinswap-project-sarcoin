import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
      <image width="64" height="64" href="/images/logo/logo-round.png"/>
    </Svg>
  );
};

export default Icon;
