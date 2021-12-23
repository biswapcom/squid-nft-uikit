import React from "react";
import styled, { DefaultTheme } from "styled-components";
import ErrorIcon from "../Svg/Icons/Error";
import InfoIcon from "../Svg/Icons/Info";
import { IconButton } from "../Button";
import {CloseIcon, FailIcon, SuccessIcon} from "../Svg";
import Flex from "../Box/Flex";
import { AlertProps, variants } from "./types";

interface ThemedIconLabel {
  variant: AlertProps["variant"];
  theme: DefaultTheme;
  hasDescription: boolean;
}

const getThemeColor = ({ theme, variant = variants.INFO }: ThemedIconLabel) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure;
    case variants.WARNING:
      return theme.colors.warning;
    case variants.SUCCESS:
      return theme.colors.success;
    case variants.INFO:
    default:
      return theme.colors.gray;
  }
};

const getIcon = (variant: AlertProps["variant"] = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return FailIcon;
    case variants.WARNING:
      return ErrorIcon;
    case variants.SUCCESS:
      return SuccessIcon;
    case variants.INFO:
    default:
      return InfoIcon;
  }
};

// const IconLabel = styled.div<ThemedIconLabel>`
//   /* background-color: ${getThemeColor}; */
//   /* border-radius: 16px 0 0 16px; */
//   /* color: ${({ theme }) => theme.alert.background}; */
//   /* padding: 12px; */

//   svg {
//     fill: ${getThemeColor};
//   }
// `;

const Title = styled.div<ThemedIconLabel>`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 28px;
  margin-bottom: 12px;
  //white-space: nowrap;

  svg {
    margin-right: 8px;
    fill: ${getThemeColor};
  }
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div<{ hasHandler: boolean }>`
  flex: 1;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  padding-top: 16px;
`;

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;

const StyledAlert = styled(Flex)<{ index: number }>`
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 32px -8px rgba(0, 0, 13, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.05);
  
  &:nth-child(n + 1) {
    width: ${({index}) => `calc(100% - ${index * 5}%)`};
  }
`;

const Description = styled.p`
  color: #6b7d98;
  font-size: 16px;
  vertical-align: middle;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
`;

const Alert: React.FC<AlertProps> = ({style, title, children, variant, onClick, index }) => {
  const Icon = getIcon(variant);

  return (
    <StyledAlert index={index}>
      <Details style={style} hasHandler={!!onClick}>
        <Title variant={variant} hasDescription={!!children}>
          <Icon color="currentColor" mr='10px' width="24px" />
          <span>{title}</span>
        </Title>
        {typeof children === "string" ? <Description>{children}</Description> : children}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <CloseIcon width="20px" color="background" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  );
};

export default Alert;
