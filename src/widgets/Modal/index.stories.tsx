import React from "react";
import { Modal, useModal } from ".";
import { InjectedProps } from "./types";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import ModalWithBackground from "./ModalWithBackground";

export default {
  title: "Widgets/Modal",
  component: Modal,
  argTypes: {},
};

interface CustomModalProps extends InjectedProps {
  title: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, onDismiss }) => (
  <Modal title={title} onDismiss={onDismiss}>
    <Heading>{title}</Heading>
    <Button>This button Does nothing</Button>
  </Modal>
);

const CustomModalWithBackground: React.FC<InjectedProps> = ({  onDismiss }) => (
  <ModalWithBackground background='background' backBtnColor='contrast' onDismiss={onDismiss}>
      <div>
        <Button>This button Does nothing</Button>
      </div>
  </ModalWithBackground>

);

export const Default: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
    </div>
  );
};

export const DefaultWithBackground: React.FC = () => {
  const [onPresent1] = useModal(<CustomModalWithBackground />);
  const [onPresent2] = useModal(<CustomModalWithBackground  />);
  return (
    <div>
      <Button onClick={onPresent1}>Open modal 1</Button>
      <Button onClick={onPresent2}>Open modal 2</Button>
    </div>
  );
};

export const DisableOverlayClick: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  );
};

interface BackButtonModalProps extends InjectedProps {
  title: string;
}

const BackButtonModal: React.FC<BackButtonModalProps> = ({ title, onDismiss }) => {
  const handleOnBack = () => {
    return 1;
  };

  return (
    <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
      <Button onClick={onDismiss} variant="text" fullWidth>
        Consumer can still close it.
      </Button>
    </Modal>
  );
};

export const WithBackButton: React.FC = () => {
  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};
