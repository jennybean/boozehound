import React from "react";
import styled from "styled-components";
import Menu from "./menu/Menu";
import Drinks from "./drinks/Drinks";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const RootComponent = () => (
  <Container>
    <Menu />
    <Drinks />
  </Container>
);

export default RootComponent;
