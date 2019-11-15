import React from "react";
import styled from "styled-components";
import { useEventListener } from "../../helpers/hooks/useEventListener";

const Container = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const CloseButton = styled.button`
  border: none;
  opacity: 0.3;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  :hover {
    opacity: 1;
  }
  :focus {
    outline: none;
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

const Modal = ({ children, closeModal }) => {
  const handleKeyDown = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEventListener("keydown", handleKeyDown);
  return (
    <Container>
      <CloseButton onClick={closeModal} />
      <Children>{children}</Children>
    </Container>
  );
};

Modal.defaultProps = {
  children: null,
  closeModal: () => undefined
};

export default Modal;
