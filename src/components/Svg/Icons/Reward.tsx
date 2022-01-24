import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg viewBox="0 0 24 24" {...props}>
          <path d="M2 17.832V19.5C2 20.8789 5.35938 22 9.5 22C13.6406 22 17 20.8789 17 19.5V17.832C15.3867 18.9688 12.4375 19.5 9.5 19.5C6.5625 19.5 3.61328 18.9688 2 17.832ZM14.5 7C18.6406 7 22 5.87891 22 4.5C22 3.12109 18.6406 2 14.5 2C10.3594 2 7 3.12109 7 4.5C7 5.87891 10.3594 7 14.5 7ZM2 13.7344V15.75C2 17.1289 5.35938 18.25 9.5 18.25C13.6406 18.25 17 17.1289 17 15.75V13.7344C15.3867 15.0625 12.4336 15.75 9.5 15.75C6.56641 15.75 3.61328 15.0625 2 13.7344ZM18.25 14.1641C20.4883 13.7305 22 12.9258 22 12V10.332C21.0938 10.9727 19.7617 11.4102 18.25 11.6797V14.1641ZM9.5 8.25C5.35938 8.25 2 9.64844 2 11.375C2 13.1016 5.35938 14.5 9.5 14.5C13.6406 14.5 17 13.1016 17 11.375C17 9.64844 13.6406 8.25 9.5 8.25ZM18.0664 10.4492C20.4102 10.0273 22 9.19922 22 8.25V6.58203C20.6133 7.5625 18.2305 8.08984 15.7227 8.21484C16.875 8.77344 17.7227 9.52344 18.0664 10.4492Z" />
      </Svg>
  );
};

export default Icon;
