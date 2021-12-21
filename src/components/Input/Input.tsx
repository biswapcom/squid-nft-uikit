import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBorderColor = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.colors.failure;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  return theme.colors.dark;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};
const getFontSize = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "12px";
    case scales.LG:
      return "14px";
    case scales.MD:
    default:
      return "16px";
  }
};

const Input = styled.input<InputProps>`
  background-color: ${({ theme, isLight }) => ( isLight ? 'transparent' : theme.colors.card )};
  border-radius: 8px;
  border-color: ${getBorderColor};
  color: ${({ theme, isLight }) => ( isLight ? theme.colors.light : theme.colors.contrast )};
  border-width: ${({ isLight }) => ( isLight ? '0px' : '1px' )};
  box-shadow: none;
  border-style: solid;
  display: block;
  font-size: ${getFontSize};
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  transition: border-color .3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.gray};
  }
  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.light};
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
  isLight: false,
};

export default Input;
