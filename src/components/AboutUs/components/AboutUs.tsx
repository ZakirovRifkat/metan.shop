import React from "react";
import { styled } from "styled-components";

export const AboutUs = () => {
    return (
        <Container>
            <ContainerAboutMe>
                <Title>Metan.Shop</Title>
                <Quote>
                    “От души душевно в душу. Не луивитон, но пацыки оценят”
                </Quote>
                <Gallery></Gallery>
            </ContainerAboutMe>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContainerAboutMe = styled.div`
    width: var(--container);
    background-color: red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    color: var(--secondary);
    text-align: center;
    font-size: 44px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Quote = styled.div`
    max-width: 885px;
    width: 100%;
    color: var(--white);
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const Gallery = styled.div``;
