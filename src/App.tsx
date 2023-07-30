import React from "react";
import { Header } from "./components/Header/components/Header";
import { Footer } from "./components/Footer/components/Footer";
import { styled } from "styled-components";
import { Delivery } from "./components/Delivery/components/Delivery";
import { AboutUs } from "./components/AboutUs/components/AboutUs";
import { Merch } from "./components/Merch/components/Merch";
import { ProductInfo } from "./components/ProductInfo/components/ProductInfo";

function App() {
    return (
        <Container>
            <Header />
            <Center>
                <ProductInfo />
            </Center>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

const Center = styled.div`
    width: 100%;
    min-height: calc(100vh - 100px);
`;

export default App;
