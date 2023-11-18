import React from "react";
import { AboutUs } from "../components/AboutUs/components/AboutUs";
import styled from "styled-components";

export const AboutUsPage = () => {
    return (
        <Container>
            <AboutUs />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;
