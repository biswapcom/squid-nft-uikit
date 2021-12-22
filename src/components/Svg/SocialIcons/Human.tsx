import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z"
        fill="#0E3382"
      />
      <path
        d="M16 17.125C18.445 17.125 20.605 17.71 22.36 18.475C23.98 19.195 25 20.815 25 22.57V23.5C25 24.325 24.325 25 23.5 25H8.5C7.675 25 7 24.325 7 23.5V22.585C7 20.815 8.02 19.195 9.64 18.49C11.395 17.71 13.555 17.125 16 17.125ZM16 7C18.49 7 20.5 9.01 20.5 11.5C20.5 13.99 18.49 16 16 16C13.51 16 11.5 13.99 11.5 11.5C11.5 9.01 13.51 7 16 7Z"
        fill="#749BD8"
      />
    </Svg>
  )
}

export default Icon
