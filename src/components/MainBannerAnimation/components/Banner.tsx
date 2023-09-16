import React from "react";
import { styled } from "styled-components";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { motion } from "framer-motion";

const Variants = {
    initial: (custom: number) => ({
        opacity: 0,
        y: custom,
    }),
    enter: {
        opacity: 1,
        y: 0,
    },
};

export const Banner1 = () => {
    return (
        <Container image={image1}>
            <Blackout />
            <ContainerContent>
                <Content>
                    <Title
                        variants={Variants}
                        custom={-50}
                        initial={"initial"}
                        animate={"enter"}
                        transition={{ type: "spring", delay: 0.4 }}
                    >
                        Metan.Shop
                    </Title>
                    <Quote
                        variants={Variants}
                        custom={-20}
                        initial={"initial"}
                        animate={"enter"}
                        transition={{ delay: 1 }}
                    >
                        С железом в крови и рифмой в сердце
                    </Quote>
                </Content>
                <Button
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease:"anticipate", duration:0.5, delay: 1.5 }}
                >
                    ПОДРОБНЕЕ
                </Button>
            </ContainerContent>
        </Container>
    );
};
export const Banner2 = () => {
    return (
        <Container image={image2}>
            <Blackout />
            <ContainerContent>
                <Button left={"50%"} center={"-50%"}>
                    СЛУШАТЬ
                </Button>
            </ContainerContent>
        </Container>
    );
};
export const Banner3 = () => {
    return (
        <Container image={image3}>
            <Blackout />
            <ContainerContent left={"1"}>
                <Content left={"1"}>
                    <Title>Концерты</Title>
                    <Quote left={"1"}>Эмоции. Заряд. Мотивация.</Quote>
                </Content>
                <Button left={"0px"}>КУПИТЬ БИЛЕТЫ</Button>
            </ContainerContent>
        </Container>
    );
};
const Container = styled.div<{ image: string }>`
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
}>`
    left: ${(props) => props.left};
    transform: translate(${(props) => props.center});

    padding: 0 30px;
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

    height: 70px;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    color: var(--white);

    cursor: pointer;
`;

const Title = styled(motion.div)`
    color: var(--secondary);
    font-size: 96px;
    font-weight: 600;

    width: max-content;
`;
const Quote = styled(motion.div)<{ left?: string }>`
    color: var(--white);
    text-align: ${(props) => (props.left ? "left" : "right")};
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
`;
const Content = styled.div<{ left?: string }>`
    position: relative;
    z-index: 2;
    width: 668px;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.left ? "start" : "end")};
    gap: 10px;
`;
