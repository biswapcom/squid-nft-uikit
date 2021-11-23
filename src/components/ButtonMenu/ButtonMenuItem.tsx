import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
  color: "primary" | "text" | "backgroundDisabled" | 'tertiary';
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant="tertiary"
        color={variant === variants.PRIMARY ? "text" : variant === variants.TRANSPARENT ? "backgroundDisabled" : variant === variants.TERTIARY ? 'primary' : "primary"}
        {...props}
      />
    );
  }

  return <Button as={as} variant={variant === variants.TERTIARY ? 'primary' : variant} {...props} />;
};

export default ButtonMenuItem;
