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

    padding: 80px 0 80px 0;
`;

const ContainerContent = styled.div`
    width: var(--container);
    max-width: 3000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerGrid = styled.div`
    width: 100%;
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column-gap: 30px;
    grid-row-gap: 40px;

    @media (max-width: 911px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2.4vw;
        grid-row-gap: 4vw;
    }
`;
