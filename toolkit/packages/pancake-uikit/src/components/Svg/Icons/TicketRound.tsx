import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <image width="80" height="80" href="/images/logo/ticket-round.png"/>
    </Svg>
  );
};

export default Icon;
