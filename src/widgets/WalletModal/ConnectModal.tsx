import React, {useMemo} from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import {Config, ConnectorNames, Login} from "./types";
import Flex from "../../components/Box/Flex";
import {useMatchBreakpoints} from "../../hooks";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.success};
`

const Wrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 0;
  }
`

const WalletCardsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`

const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => {

  const { isMobile } = useMatchBreakpoints()
  const sortedConfig = useMemo(() => getPreferredConfig(isMobile ? config.map(item => item.title === 'TrustWallet' ? { ...item, connectorId: ConnectorNames.Injected } : item) : config), [isMobile]);

  return (
      <Modal title="Connect to a wallet" onDismiss={onDismiss}>
        <Wrapper>
          <WalletCardsWrapper>
            {sortedConfig.map((entry) => (
              <WalletCard
                key={entry.title}
                login={login}
                walletConfig={entry}
                onDismiss={onDismiss}
              />
            ))}
          </WalletCardsWrapper>
          <HelpLink
            href="https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap"
            external
          >
            <HelpIcon color="success" mr="6px" />
            Learn how to connect
          </HelpLink>
        </Wrapper>
      </Modal>
    )
};

export default ConnectModal;