import React from "react";
import { styled } from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
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
                    <Route path={"/"}>
                        <Route
                            index
                            element={<Navigate to="/main" replace />}
                        />
                        <Route path={"/main/*"} element={<MainPage />} />
                        <Route path={"/delivery"} element={<DeliveryPage />} />
                        <Route path={"/about"} element={<AboutUsPage />} />
                    </Route>
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
const Test = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    background-color: #a30f0f31;
    height: 100vh;
    width: 100vw;
    z-index: 100;
`;

export default App;
