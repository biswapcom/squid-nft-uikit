import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 33 31" {...props}>
          <path d="M16.7174 0L20.5377 11.7579H32.9007L22.8989 19.0247L26.7192 30.7826L16.7174 23.5158L6.7155 30.7826L10.5359 19.0247L0.534004 11.7579H12.897L16.7174 0Z"/>
      </Svg>
  );
};

export default Icon;
