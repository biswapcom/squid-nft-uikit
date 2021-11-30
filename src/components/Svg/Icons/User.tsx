import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 24 24" {...props}>
          <path d="M12 13.125C14.445 13.125 16.605 13.71 18.36 14.475C19.98 15.195 21 16.815 21 18.57V19.5C21 20.325 20.325 21 19.5 21H4.5C3.675 21 3 20.325 3 19.5V18.585C3 16.815 4.02 15.195 5.64 14.49C7.395 13.71 9.555 13.125 12 13.125ZM12 3C14.49 3 16.5 5.01 16.5 7.5C16.5 9.99 14.49 12 12 12C9.51 12 7.5 9.99 7.5 7.5C7.5 5.01 9.51 3 12 3Z"/>
      </Svg>
  );
};

export default Icon;
