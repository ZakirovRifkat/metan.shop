import React from "react";
import { styled } from "styled-components";

export const Card = () => {
    return (
        <Container>
            <Image
                image={
                    "https://thetaste.ru/image/cache/catalog/foto_product/0000_Brands/TASTE/3165/31651-1500x1500.jpg"
                }
            />
            <TextContainer>
                <Name>Подвеска “Metan” dsdsd dsdsds dsdss вывывы вывыывы dsdsds dsdsdsd sdsdsds sdsds </Name>
                <Price>1500 p.</Price>
            </TextContainer>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
    border-radius: 20px;
    background: var(--card);
    box-shadow: 0px 4px 4px 0px #2c2c2d;
    padding: 15px;

    @media (max-width: 911px) {
        min-height: 40vw;
        padding: 2vw;
        border-radius: 15px;
    }
`;

const Image = styled.div<{ image?: string }>`
    width: 100%;
    height: 300px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;

    @media (max-width: 911px) {
        height: 30vw;
        border-radius: 15px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextStyle = styled.p`
    width: 100%;
    color: var(--white);
    font-size: 20px;
    font-style: normal;
    line-height: 120%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    @media (max-width: 911px) {
        font-size: 15px;
    }
    @media (max-width: 630px) {
        font-size: 12px;
    }
    @media (max-width: 500px) {
        font-size: 8px;
    }
`;

const Name = styled(TextStyle)`
    font-weight: 700;
    margin-top: 20px;
    -webkit-line-clamp: 2; /* Ограничение количества строк */
 
    @media (max-width: 800px) {
        margin-top: 1vw;
    }
`;

const Price = styled(TextStyle)`
    font-weight: 500;
    -webkit-line-clamp: 1; /* Ограничение количества строк */
`;
