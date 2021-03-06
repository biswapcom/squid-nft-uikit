import React from "react";
import styled, {DefaultTheme} from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import getThemeValue from "../../util/getThemeValue";
import {TextProps} from "../../components/Text";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  background?: string
}

const StyledModal = styled.div<{background?: string}>`
  background-color: ${({ theme, background }) => background || theme.colors.tertiary};
  border-radius: 16px 16px 0 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    min-width: 416px;
    max-width: 100%;
    border-radius: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
  }
  
  .closeModal {
    width: 24px;
    height: 24px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 36px;
`;

const ModalBody = styled.div`
  padding: 0 16px 24px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 24px 24px;
  }
`

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  background
}) => (
  <StyledModal background={background}>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="contrast" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" className="closeModal" scale="sm" ml="12px" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon width="24px" color="contrast" />
        </IconButton>
      )}
    </ModalHeader>
    <ModalBody>
      {children}
    </ModalBody>
  </StyledModal>
);

export default Modal;
