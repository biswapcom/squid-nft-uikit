import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
}

const StyledButton = styled(Button)`
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  padding: 16px 0 8px;
  white-space: nowrap;
  min-height: 100px;
`

const StyledText = styled(Text)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.contrast};
  line-height: 20px;
`

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        localStorage.setItem(walletLocalStorageKey, walletConfig.title);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" />
      <StyledText small>
        {title}
      </StyledText>
    </StyledButton>
  );
};

export default WalletCard;
