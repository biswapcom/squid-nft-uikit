import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { useWalletModal } from "./index";
import {useMatchBreakpoints} from "../../hooks";

interface Props {
  account: string;
  logout: () => void;
  login: any;
  onDismiss?: () => void;
  recentTransaction?: any;
  rowStatus?: any
  chainId?: any;
  clearTransaction?: any;
  isSwap?: any,
  transactionsForUIKit?: any
}

const ConnectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TransactionWrapper = styled.div`
  border-radius: 16px;
  padding: 24px;
  background-color: #F2F6FC;
`

const Line = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  width: 100%;
  height: 2px;
`

const CopyText = styled(Text)`
  
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.success};
  }
`

const AccountModal: React.FC<Props> = ({transactionsForUIKit, isSwap, account, logout, onDismiss = () => null, login,recentTransaction,chainId,clearTransaction}) =>{

  const { onPresentConnectModal } = useWalletModal(login, logout, account,recentTransaction,chainId);
  const {isXs, isSm} = useMatchBreakpoints()
  const isMobile = isXs || isSm

  const changeWalletHandler = async () => {
    await onDismiss();
    await logout();
    onPresentConnectModal();
  }

  const ClearAndDismiss = () => {
    clearTransaction();
    onDismiss();
  }

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      {/*<ConnectedWrapper>*/}
      {/*  <Text fontSize='14px' fontWeight='400' lineHeight='21px' color='#1DC872'>Connected</Text>*/}
      {/*  <Button onClick={changeWalletHandler} scale='sm' variant='primary'>Change</Button>*/}
      {/*</ConnectedWrapper>*/}
        <Line />
      <Text
        fontSize="14px"
        fontWeight='600'
        color='contrast'
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "16px",
          marginTop: '24px'
        }}
      >
        {account}
      </Text>
      <Flex>
        <LinkExternal mr='24px' small href={`https://bscscan.com/address/${account}`}>
            <Text color='success' lineHeight='20px' small bold>View on BscScan</Text>
        </LinkExternal>
        <CopyToClipboard toCopy={account}>
            <CopyText color='success' lineHeight='20px' small bold>Copy Address</CopyText>
        </CopyToClipboard>
      </Flex>
        {
          isSwap && (
            <TransactionWrapper>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize='14px' fontWeight='600' lineHeight='21px' color='#07162D'>
                  Recent transactions
                </Text>
                <Button m={0} p={0} scale='sm' variant='text' onClick={ClearAndDismiss}>
                  Clear All
                </Button>
              </Flex>
              <>
                {transactionsForUIKit()}
              </>
            </TransactionWrapper>
          )
        }
      <Flex mb={isMobile ? '64px' : '0'}>
        <Button
          style={{ width: '100%' }}
          mt='24px'
          variant="primary"
          onClick={() => {
            logout();
            onDismiss();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );

}

export default AccountModal;
