import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import ToastAction from "./ToastAction";
import { ToastProps, types } from "./types";
import { Button } from "../../components/Button";
import {CloseIcon} from "../../components/Svg";
import OpenInNew from "../../components/Svg/Icons/OpenInNew";

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
};


const ClearAllButton = styled.button`
  position: relative;
  background-color: ${({theme}) => theme.colors.failure};
  border: none;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledToast = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  max-width: calc(100% - 12px);
  transition: all 250ms ease-in;
  width: 100%;
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    transform: none;
    left: auto;
    right: 35px;
    max-width: 270px;
  }
`;

const ProgressWrapper = styled.div`
  background-color: ${({theme})=> theme.colors.contrast}
  bottom: 0;
  min-height: 2px;
`

const ProgressLine = styled.div`
  background-color: ${({theme})=> theme.colors.success};
  height: 2px;
  transition: 100ms all;
  border-radius: 16px;
`

const AlertWrapper = styled.div`
  padding: 0 16px;
`
const LinkWrapper = styled.div`
  margin: 8px 0;
  display: flex;
  align-items: center;
`

const LinkStyles = styled.a`
 color: #1EBB95;
 font-size: 14px;
 font-weight: 700;
 line-height: 20px;
`

const SharingText = styled.div`
  display: flex;
  flex-direction: row;
`

const ActionContainer = styled.div`
`

const Toast: React.FC<ToastProps> = ({
                                       removeButtonPosition=60,
                                       clearAll,
                                       toast,
                                       style,
                                       handleMouseEnter,
                                       handleMouseLeave,
                                       handleRemove,
                                       progress,
                                       index,
                                       ...props
}) => {
  const {
    description,
    type,
    title,
    telegramDescription,
    tweeterDescription,
    hash,
    url,
  } = toast;

  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {
          clearAll && (
            <ClearAllButton
              onClick={() => clearAll()}
            >
              <Text fontSize='10px' color='contrast'>
                Clear All
              </Text>
                <CloseIcon color='contrast' ml='8px' width='10px'/>
            </ClearAllButton>
          )
        }
        <Alert index={index} style={{padding: '16px 0 0 0'}} title={title} variant={alertTypeMap[type]} onClick={handleRemove}>
            <AlertWrapper>
            {description ? <Text color="#6B7D98" fontSize="12px" as="p" dangerouslySetInnerHTML={{__html: description}}/> : <></>}
            {
                hash &&
                <LinkWrapper>
                  <LinkStyles target="_blank" href={`https://bscscan.com/tx/${hash}`}>
                    View on BscScan
                  </LinkStyles>
                  <OpenInNew ml='7px' width='18px' height='18px' color='#1EBB95'/>
                </LinkWrapper>
              }
              {
                telegramDescription && tweeterDescription && (
                  <ActionContainer>
                    <ToastAction telegramDescription={telegramDescription} tweeterDescription={tweeterDescription} title={title} url={url} thx={`https://bscscan.com/tx/${hash}`}/>
                    <Button p="0" scale="sm" variant='text' as='a' href='https://docs.biswap.org/sharing-season' target="_blank">
                      <SharingText>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color='#6b7d98'
                        >
                          *Check
                        </Text>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color="#1263F1"
                          ml="2px"
                        >
                          Sharing Season
                        </Text>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color='#6b7d98'
                          ml="2px"
                        >
                          details
                        </Text>
                      </SharingText>
                    </Button>
                  </ActionContainer>
                )
              }
            </AlertWrapper>
            <div style={{width: '100%'}}>
              <ProgressWrapper  style={{width: '100%'}}>
                {
                  progress ?  <ProgressLine style={{width: `${100 - progress}%`}}/> : null
                }

              </ProgressWrapper>
            </div>
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
