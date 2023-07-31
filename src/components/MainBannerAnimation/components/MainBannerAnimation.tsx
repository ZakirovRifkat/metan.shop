import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { styled } from "styled-components";
import { Banner1, Banner2, Banner3 } from "./Banner";
import spider from "../assets/spiderweb.svg";
import spiderActive from "../assets/spiderwebActive.svg";
import "./anim.css";

export const MainBannerAnimation = () => {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const components: any = [Banner1, Banner2, Banner3];

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentComponentIndex(
                (prevIndex) => (prevIndex + 1) % components.length
            );
        }, 7000);

        return () => {
            clearTimeout(timer);
        };
    }, [components]);

    const CurrentComponent = components[currentComponentIndex];

    return (
        <ComponentsContainer>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={currentComponentIndex}
                    timeout={1000}
                    classNames="fade"
                >
                    <Container>{CurrentComponent()}</Container>
                </CSSTransition>
            </TransitionGroup>
            <SpiderContainer>
                <Spider
                    image={
                        currentComponentIndex == 0 ? spiderActive : undefined
                    }
                    onClick={() => {
                        setCurrentComponentIndex(0);
                    }}
                />
                <Spider
                    image={
                        currentComponentIndex == 1 ? spiderActive : undefined
                    }
                    onClick={() => {
                        setCurrentComponentIndex(1);
                    }}
                />
                <Spider
                    image={
                        currentComponentIndex == 2 ? spiderActive : undefined
                    }
                    onClick={() => {
                        setCurrentComponentIndex(2);
                    }}
                />
            </SpiderContainer>
        </ComponentsContainer>
    );
};

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;
const ComponentsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const SpiderContainer = styled.div`
    display: flex;
    gap: 45px;

    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);

    z-index: 4;
`;
const Spider = styled.div<{ image?: string }>`
    width: 33px;
    height: 33px;

    background-image: url(${(props) => (props.image ? props.image : spider)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s linear;
    cursor: pointer;
`;
