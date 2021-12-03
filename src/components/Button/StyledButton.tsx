import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import {BaseButtonProps, scales, variants} from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

const getDisabledStyles = ({ isLoading, theme }: ThemedButtonProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.biswap-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.biswap-button--disabled {
      opacity: 0.32;
      cursor: not-allowed;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  align-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.3s, opacity 0.3s, box-shadow 0.3s ease;

  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {
    //opacity: 0.65;
  }

  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {
    opacity: 0.85;
  }

  ${getDisabledStyles}
  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
  
  &:after {
    display: ${({ variant }) => variant === variants.UNDERLINE ? 'block' : 'none'};
    content: "";
    position: absolute;
    bottom: 0;
    height: 4px;
    border-radius: 4px;
    width: calc(100% - ${({ scale }) => scale === scales.XS ? '12px' : scale === scales.SM ? '28px' : scale === scales.MD ? '16px' : '24px'});
    background-color: ${({ theme, lineColor }) => lineColor ? theme.colors[lineColor] : theme.colors.primary};
  }
`;

export default StyledButton;
