import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/components/Footer";
import { styled } from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Center></Center>
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
