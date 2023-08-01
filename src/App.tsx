import React from "react";
import { styled } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/components/Header";
import { Footer } from "./components/Footer/components/Footer";
import { MainPage } from "./Pages/MainPage";
import { DeliveryPage } from "./Pages/DeliveryPage";
import { AboutUsPage } from "./Pages/AboutUsPage";

function App() {
    return (
        <Container>
            <Header />
            <Center>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/delivery"} element={<DeliveryPage />} />
                    <Route path={"/about"} element={<AboutUsPage />} />
                </Routes>
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
    min-height: calc(100vh - 80px);
`;

export default App;
