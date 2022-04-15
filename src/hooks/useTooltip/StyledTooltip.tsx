import styled from "styled-components";

export const Arrow = styled.div<{isLight?: boolean}>`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme, isLight }) => isLight ? '#FFFFFF' : theme.tooltip.background};
  }
`;

export const StyledTooltip = styled.div<{isLight?: boolean, maxWidth?: string}>`
  padding: 8px 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 8px;
  max-width: ${({maxWidth}) => maxWidth ?? '360px'} ;
  z-index: 101;
  background: ${({ theme, isLight }) => theme.tooltip[isLight ? 'contrast' : 'background']};
  color: ${({ theme }) => theme.tooltip.text};
  box-shadow: ${({ theme, isLight }) => isLight ? 'none' : theme.tooltip.boxShadow};

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
