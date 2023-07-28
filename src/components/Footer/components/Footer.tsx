import React from "react";
import { styled } from "styled-components";
import logo from "../assets/logo.svg";

export const Footer = () => {
    return (
        <Container>
            <ContentContainer>
                <Icon image={logo} size={"40px"} />
                <ContainerInfo>
                    <ContainerInfoBlock>
                        <ContainerInfoBlockItem>
                            Почта: user@gmail.com
                        </ContainerInfoBlockItem>
                        <ContainerInfoBlockItem>
                            Телефон: +7 123 465 78 90
                        </ContainerInfoBlockItem>
                    </ContainerInfoBlock>
                    <ContainerInfoBlock>
                        <ContainerInfoBlockItem>
                            Подробнее о нас
                        </ContainerInfoBlockItem>
                        <ContainerInfoBlockItem>
                            Политика конфиденциальности
                        </ContainerInfoBlockItem>
                    </ContainerInfoBlock>
                </ContainerInfo>
            </ContentContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;

    background-color: var(--footer);

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px 0 20px 0;

    @media (max-width: 610px) {
        padding: 10px 0 10px 0;
    }
`;

const ContentContainer = styled.div`
    width: var(--container);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    @media (max-width: 610px) {
        gap: 15px;
    }
`;

const Icon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    min-width: ${(props) => props.size};
    min-height: ${(props) => props.size};

    cursor: pointer;
`;

const ContainerInfo = styled.div`
    width: 100%;

    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
`;

const ContainerInfoBlock = styled.div`
    max-width: 550px;
    width: 45%;
    min-width: min-content;

    display: flex;
    justify-content: space-between;
    align-items: center;

    row-gap: 3px;
    column-gap: 10px;
    flex-wrap: wrap;

    @media (max-width: 610px) {
        font-size: 11px;
    }
`;

const ContainerInfoBlockItem = styled.div`
    color: var(--white);
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    text-align: center;

    min-width: max-content;

    @media (max-width: 610px) {
        font-size: 10px;
    }
`;
