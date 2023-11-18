import React from "react";
import { Merch } from "../components/Merch/components/Merch";
import { MainBannerAnimation } from "../components/MainBannerAnimation/components/MainBannerAnimation";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RouteMatch } from "react-router-dom";
import { ProductInfo } from "../components/ProductInfo/components/ProductInfo";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MainPage = () => {

const location = useLocation()

    return (
        <Container>
            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/item/*" element={<ProductInfo />} />
            </Routes>
            </AnimatePresence>
            <MainBannerAnimation />
            <Merch />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;
