import React from "react";
import { styled } from "styled-components";
import { Card } from "../../Card/components/Card";

export const Merch = () => {
    return (
        <Container>
            <ContainerContent>
                <ContainerGrid>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContainerGrid>
            </ContainerContent>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 40px 0 40px 0;
`;
const ContainerContent = styled.div`
    width: var(--container);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ContainerGrid = styled.div`
    width: 100%;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 911px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1vw;
        grid-row-gap: 1vw;
    }
`;
