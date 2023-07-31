import React from "react";
import { Merch } from "../components/Merch/components/Merch";
import { MainBannerAnimation } from "../components/MainBannerAnimation/components/MainBannerAnimation";
import styled from "styled-components";

export const MainPage = () => {
    return (
        <Container>
            <MainBannerAnimation />
            <Merch />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;
