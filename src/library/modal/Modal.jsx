import React from "react";
import styled from "styled-components";
import { useEventListener } from "../../helpers/hooks/useEventListener";
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

const Container = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

/* Graciously borrowed from https://codepen.io/brissmyr/pen/egidw */
const CloseButton = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const Children = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Modal = ({ children, closeModal, isLoading }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEventListener("keydown", handleKeyDown);
  return (
    <Container>
      <CloseButton onClick={closeModal} />
      <Children>{isLoading ? <LoadingIndicator /> : children}</Children>
    </Container>
  );
};

Modal.defaultProps = {
  children: null,
  closeModal: () => undefined,
  isLoading: true
};

export default Modal;
