import React from "react";
import { css, styled } from "styled-components";
import logo from "../assets/logo.svg";

export const AboutUs = () => {
    return (
        <Container>
            <ContainerAboutMe>
                <Title>Metan.Shop</Title>
                <Quote>
                    “От души душевно в душу. Не луивитон, но пацыки оценят”
                </Quote>
                <Gallery></Gallery>
                <Сontacts>
                    <СontactsIcon image={logo} size={"43vw"} />
                    <СontactsContainerInfo size={"43vw"}>
                        <СontactsTitle>СОЦИАЛЬНЫЕ СЕТИ</СontactsTitle>
                        <СontactsContainerText>
                            <СontactsText>Тел: +7 (132) 132-42-56</СontactsText>
                            <СontactsText>Почта: user@gmail.com</СontactsText>
                            <СontactsText href={""}>Группа вк</СontactsText>
                            <СontactsText href={""}>Телеграм-канал</СontactsText>
                            <СontactsText href={""}>Youtube</СontactsText>
                            <СontactsText href={""}>Instagram</СontactsText>
                        </СontactsContainerText>
                    </СontactsContainerInfo>
                </Сontacts>
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

    @media (max-width: 600px) {
        font-size: 27px;
    }
`;

const Gallery = styled.div``;
const Сontacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;
const СontactsIcon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    max-width: 349px;
    max-height: 349px;
`;
const СontactsContainerInfo = styled.div<{ size: string }>`
    width: ${(props) => props.size};
    max-width: 349px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const СontactsContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const textStyle = css`
    width: 100%;
    color: var(--white);
    font-size: 28px;
    font-style: normal;
    line-height: normal;

    @media (max-width: 723px) {
        font-size: 13px;
    }
`;
const СontactsText = styled.a<{ linkB?: string }>`
    ${textStyle}
    font-weight: 500;
    text-decoration: none;
`;
const СontactsTitle = styled.div`
    ${textStyle}
    font-weight: 600;
`;
