import React from "react";
import { Merch } from "../components/Merch/components/Merch";
import { MainBannerAnimation } from "../components/MainBannerAnimation/components/MainBannerAnimation";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RouteMatch } from "react-router-dom";
import { ProductInfo } from "../components/ProductInfo/components/ProductInfo";

export const MainPage = () => {
    return (
        <Container>
            <Routes>
                <Route path="/item/*" element={<ProductInfo></ProductInfo>} />
            </Routes>
            <MainBannerAnimation />
            <Merch />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;

