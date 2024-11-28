import * as React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 5.640625 4.296875 C 8.757812 4.296875 11.28125 6.839844 11.28125 9.976562 C 11.28125 13.113281 8.753906 15.65625 5.640625 15.65625 C 2.527344 15.65625 0 13.113281 0 9.976562 C 0 6.839844 2.527344 4.296875 5.640625 4.296875 Z M 14.648438 4.628906 C 16.207031 4.628906 17.46875 7.023438 17.46875 9.976562 C 17.46875 12.929688 16.207031 15.324219 14.648438 15.324219 C 13.089844 15.324219 11.828125 12.929688 11.828125 9.976562 C 11.828125 7.023438 13.089844 4.628906 14.648438 4.628906 Z M 19.007812 5.1875 C 19.554688 5.1875 20 7.332031 20 9.976562 C 20 12.621094 19.554688 14.765625 19.007812 14.765625 C 18.460938 14.765625 18.015625 12.621094 18.015625 9.976562 C 18.015625 7.332031 18.460938 5.1875 19.007812 5.1875 Z M 19.007812 5.1875 "
      />
    </Svg>
  );
};

export default Icon;
