import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/components/Footer";
import { styled } from "styled-components";
import { Delivery } from "./components/Delivery/components/Delivery";

function App() {
  return (
    <Container>
      <Header />
      <Center>
        <Delivery />
      </Center>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
const Center = styled.div`
  width: 100%;
  min-height: calc(100vh - 110px);
`;

export default App;
