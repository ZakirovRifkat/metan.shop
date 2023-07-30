import React from "react";
import { css, styled } from "styled-components";

export const ProductInfo = () => {
    return (
        <Container>
            <ImageContainer>
                <Image type={"main"}></Image>
                <Image type={"second"}></Image>
                <Image type={"second"}></Image>
                <Image type={"second"}></Image>
                <Image type={"second"}></Image>
            </ImageContainer>
            <InfoContainer>
                <ProductTitle textstyle={"600"} textsize={"26px"}>
                    Наименование товара
                </ProductTitle>
                <ProductTitle textsize={"22px"}>Цена: 1500 р.</ProductTitle>
                <BtnContainer>
                    <SizeBtn>XS</SizeBtn>
                    <SizeBtn>S</SizeBtn>
                    <SizeBtn active="true">M</SizeBtn>
                    <SizeBtn>L</SizeBtn>
                    <SizeBtn>XL</SizeBtn>
                </BtnContainer>
                <BtnContainer>
                    <Button>КУПИТЬ</Button>
                    <Button>В КОРЗИНУ</Button>
                </BtnContainer>
            </InfoContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    max-width: 920px;
    max-height: 1150px;

    width: 36vw;
    height: 48vw;

    border-radius: 20px;
    margin: auto auto;
    padding: 50px 80px;
    background-color: #383838;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 76%;

    display: grid;
    grid-template-columns: 80% 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 12px;
    grid-column-gap: 12px;
`;
const Image = styled.div<{ type: string; image?: string }>`
    background-color: #d9d9d9;
    grid-column: ${(props) => (props.type === "main" ? "1fr" : "2 / 3")};
    grid-row: ${(props) => (props.type === "main" ? "1 / 6" : "1fr")};
    background-image: url(${(props) => props.image});
    border-radius: 20px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    margin-top: 30px;
    gap: 15px;
`;

const ProductTitle = styled.div<{ textstyle?: string; textsize: string }>`
    color: var(--white);
    font-size: ${(props) => props.textsize};
    font-weight: ${(props) => props.textstyle};
    text-align: start;
`;

const BtnContainer = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 15px;
`;

const SizeBtn = styled.div<{ active?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 55px;
    height: 55px;

    background-color: ${(props) =>
        props.active ? "var(--secondary)" : "rgba(255, 255, 255, 0.20)"};
    border-radius: 15px;

    font-size: 24px;
    color: var(--white);

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: var(--secondary);
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

    background-color: transparent;

    border: 3px solid var(--white);
    border-radius: 20px;

    font-size: 24px;
    color: var(--white);
    padding: 10px 10px;

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: var(--secondary);
        border-color: var(--secondary);
    }
`;
