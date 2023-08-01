import React, { useState, useEffect } from "react";
import { css, styled } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import logo from "../assets/logo.svg";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import "./anim.css";

export const AboutUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [pic1, pic2, pic3, pic4];
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log();

            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [images]);

    console.log(currentImageIndex);

    let currentImage = images[currentImageIndex];
    return (
        <Container>
            <ContainerAboutMe>
                <Title>Metan.Shop</Title>
                <Quote>
                    “От души душевно в душу. Не луивитон, но пацыки оценят”
                </Quote>
                <ComponentsContainer>
                    <TransitionGroup component={null}>
                        <CSSTransition
                            key={currentImageIndex}
                            timeout={1000}
                            classNames="fade"
                        >
                            <GalleryContainer>
                                <Gallery>
                                    <GalleryItem
                                        maxWidth={"542px"}
                                        maxHeight={"724px"}
                                        width={"47vw"}
                                        height={"70vw"}
                                        gridArea={"main"}
                                        image={currentImage}
                                    />
                                    <GalleryItem
                                        image={currentImage}
                                        gridArea={"music"}
                                    />
                                    <GalleryItem
                                        image={currentImage}
                                        gridArea={"quote"}
                                    />
                                </Gallery>
                            </GalleryContainer>
                        </CSSTransition>
                    </TransitionGroup>
                </ComponentsContainer>
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
    position: relative;
    display: flex;
    justify-content: center;

    padding: 200px 0 4vw 0;
`;
const GalleryContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
`;
const ComponentsContainer = styled.div`
    position: relative;
    width: 100%;
    max-height: 724px;
    height: 70vw;
    margin-top: 60px;
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
    font-size: 64px;
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

    margin-top: 30px;

    @media (max-width: 600px) {
        font-size: 27px;
    }
`;

const Gallery = styled.div`
    position: relative;
    display: grid;
    grid-template-areas:
        "main music"
        "main quote";

    grid-template-rows: 3fr 2fr;
    gap: 30px;

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
    image: string;
};

const GalleryItem = styled.div<GalleryType>`
    display: grid;
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "400px")};
    max-height: ${(props) => (props.maxHeight ? props.maxHeight : "")};

    width: ${(props) => (props.width ? props.width : "37vw")};
    height: ${(props) => (props.height ? props.height : "")};

    border-radius: 30px;
    grid-area: ${(props) => props.gridArea};

    background-color: #4d4d4d;

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 600px) {
        border-radius: 20px;
    }
`;

const Сontacts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    margin-top: 80px;
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
