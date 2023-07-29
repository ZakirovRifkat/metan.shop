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
                <Gallery>
                    <GalleryItem
                        maxWidth={"542px"}
                        maxHeight={"724px"}
                        width={"47vw"}
                        height={"70vw"}
                        gridArea={"main"}
                    />
                    <GalleryItem gridArea={"music"} />
                    <GalleryItem gridArea={"quote"} />
                </Gallery>
                <Сontacts>
                    <СontactsIcon image={logo} size={"43vw"} />
                    <СontactsContainerInfo size={"43vw"}>
                        <СontactsTitle>СОЦИАЛЬНЫЕ СЕТИ</СontactsTitle>
                        <СontactsContainerText>
                            <СontactsText>Тел: +7 (132) 132-42-56</СontactsText>
                            <СontactsText>Почта: user@gmail.com</СontactsText>
                            <СontactsText href={""}>Группа вк</СontactsText>
                            <СontactsText href={""}>
                                Телеграм-канал
                            </СontactsText>
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

    padding: 4vw 0 4vw 0;
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

    margin-top: 20px;

    @media (max-width: 600px) {
        font-size: 27px;
    }
`;

const Gallery = styled.div`
    display: grid;
    grid-template-areas:
        "main music"
        "main quote";
    gap: 30px;
    margin-top: 50px;
    
    @media (max-width: 1200px) {
        gap: 2vw;
    }
`;

type GalleryType = {
    maxWidth?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
    gridArea: "main" | "music" | "quote";
};

const GalleryItem = styled.div<GalleryType>`
    display: grid;
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "400px")};
    max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};

    width: ${(props) => (props.width ? props.width : "37vw")};
    height: ${(props) => (props.height ? props.height : "")};

    border-radius: 30px;
    grid-area: ${(props) => props.gridArea};

    background-color: red;

    @media (max-width: 600px) {
        border-radius: 20px;
    }
`;
const GalleryItem1 = styled.div<GalleryType>`
    display: grid;
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "400px")};

    width: ${(props) => (props.width ? props.width : "37vw")};

    border-radius: 30px;
    grid-area: ${(props) => props.gridArea};

    background-color: red;

    @media (max-width: 600px) {
        border-radius: 20px;
    }
`;

const Сontacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    margin-top: 50px;
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
