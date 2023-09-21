import React from "react";
import { styled } from "styled-components";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { motion } from "framer-motion";

const Variants1 = {
    initial: (custom: number) => ({
        opacity: 0,
        y: custom,
    }),
    enter: {
        opacity: 1,
        y: 0,
    },
};
const Variants2 = {
    initial: (custom: number) => ({
        opacity: 0,
        x: custom,
    }),
    enter: {
        opacity: 1,
        x: 0,
    },
};

const ButtonVar = {
    initial: (custom: number) => ({
        opacity: 0,
        x: custom,
    }),
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "anticipate",
            duration: 0.5,
            delay: 1.5,
        },
    },
};
const ButtonVar2 = {
    initial: (custom: number) => ({
        opacity: 0,
        y: 100,
    }),
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.8,
            delay: 0.9,
        },
    },
};

export const Banner1 = () => {
    return (
        <Container image={image1} nomer={1}>
            <Blackout />
            <ContainerContent>
                <Content>
                    <Title
                        variants={Variants1}
                        custom={-50}
                        initial={"initial"}
                        animate={"enter"}
                        transition={{ type: "spring", delay: 0.4 }}
                    >
                        Metan.Shop
                    </Title>
                    <Quote
                        variants={Variants1}
                        custom={-20}
                        initial={"initial"}
                        animate={"enter"}
                        transition={{ delay: 1 }}
                    >
                        С железом в крови и рифмой в сердце
                    </Quote>
                </Content>
                <Button
                    initial={"initial"}
                    animate={"animate"}
                    whileTap={{ scale: 0.9 }}
                    variants={ButtonVar}
                    custom={100}
                >
                    ПОДРОБНЕЕ
                </Button>
            </ContainerContent>
        </Container>
    );
};
export const Banner2 = () => {
    return (
        <Container image={image2} nomer={2}>
            <Blackout />
            <ContainerContent>
                <ContainerDS>
                    <Button
                        exs="true"
                        variants={ButtonVar2}
                        initial={"initial"}
                        animate={"animate"}
                        style={{ position: "relative", bottom: "0" }}
                        whileTap={{ scale: 0.9 }}
                    >
                        СЛУШАТЬ
                    </Button>
                </ContainerDS>
            </ContainerContent>
        </Container>
    );
};
export const Banner3 = () => {
    return (
        <Container image={image3} nomer={3}>
            <Blackout />
            <ContainerContent left={"1"}>
                <Content left={"1"}>
                    <Title
                        variants={Variants2}
                        initial={"initial"}
                        animate={"enter"}
                        custom={-100}
                        transition={{ type: "spring", delay: 0.4 }}
                    >
                        Концерты
                    </Title>
                    <Quote
                        custom={-100}
                        variants={Variants2}
                        initial={"initial"}
                        animate={"enter"}
                        left={"1"}
                        transition={{ type: "spring", delay: 1 }}
                    >
                        Эмоции. Заряд. Мотивация.
                    </Quote>
                </Content>
                <Button
                    custom={-100}
                    variants={ButtonVar}
                    initial={"initial"}
                    animate={"animate"}
                    left={"0px"}
                    whileTap={{ scale: 0.9 }}
                >
                    КУПИТЬ БИЛЕТЫ
                </Button>
            </ContainerContent>
        </Container>
    );
};
const Container = styled.div<{ image: string; nomer: number }>`
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 700px) {
        background-position: ${(props) =>
            props.nomer == 1 ? "left" : props.nomer == 3 ? "right" : "center"};
        background-position-x: ${(props) =>
            props.nomer == 1 ? "-300px" : props.nomer == 3 ? "-500px" : null};
    }
    @media (max-width: 540px) {
        background-position-x: ${(props) =>
            props.nomer == 3 ? "-600px" : null};
    }
`;
const ContainerContent = styled.div<{ left?: string }>`
    position: relative;
    width: var(--container);
    height: 100vh;
    max-width: 3000px;
    display: flex;
    justify-content: ${(props) => (props.left ? "start" : "end")};
    align-items: center;
`;
const ContainerDS = styled(motion.div)<{ left?: string }>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 150px;
    width: 100%;

    @media (max-width: 1000px) {
        bottom: 200px;
    }
    @media (max-width: 850px) {
        bottom: 220px;
    }
    @media (max-width: 650px) {
        bottom: 250px;
    }
`;
const Blackout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #00000078;
    z-index: 1;
`;

const Button = styled(motion.div)<{
    left?: string;
    center?: string;
    exs?: string;
}>`
    left: ${(props) => props.left};
    transform: translate(${(props) => props.center});

    padding: 15px 30px;
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    bottom: 150px;

    z-index: 1;

    border-radius: 60px;
    border: 3px solid rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    width: max-content;

    height: max-content;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    color: var(--white);

    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 23px;
        padding: 0 30px;
        padding: 10px 20px;

        bottom: 200px;
    }
    @media (max-width: 850px) {
        font-size: ${(props) => (props.exs ? "23px" : "15px")};
        padding: ${(props) => (props.exs ? " 10px 20px" : " 8px 15px")};

        bottom: 220px;
    }
    @media (max-width: 650px) {
        bottom: 250px;
    }
`;

const Title = styled(motion.div)`
    color: var(--secondary);
    font-size: 96px;
    font-weight: 600;

    width: max-content;
    @media (max-width: 1000px) {
        font-size: 60px;
    }
    @media (max-width: 850px) {
        font-size: 50px;
    }
    @media (max-width: 650px) {
        font-size: 40px;
    }
`;
const Quote = styled(motion.div)<{ left?: string }>`
    color: var(--white);
    text-align: ${(props) => (props.left ? "left" : "right")};
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;

    @media (max-width: 1000px) {
        font-size: 50px;
    }
    @media (max-width: 850px) {
        font-size: 40px;
    }
    @media (max-width: 650px) {
        font-size: 30px;
    }
`;
const Content = styled.div<{ left?: string }>`
    position: relative;
    z-index: 2;
    width: 668px;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.left ? "start" : "end")};
    gap: 10px;
    @media (max-width: 850px) {
        max-width: 500px;
        width: 100%;
    }
    @media (max-width: 650px) {
        max-width: 320px;
        width: 100%;
    }
`;
