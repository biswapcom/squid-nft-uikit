import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { scales, variants } from "../Button/types";
import { ButtonMenuProps } from "./types";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  autoWidth= false,
  children,
                                                 lineColor,
}) => {
  return (
    <StyledButtonMenu variant={variant} autoWidth={autoWidth}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          lineColor: lineColor || 'primary'
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
