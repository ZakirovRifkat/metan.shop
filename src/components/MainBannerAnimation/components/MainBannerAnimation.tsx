import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { styled } from "styled-components";
import { Banner1, Banner2, Banner3 } from "./Banner";
import "./anim.css";

export const MainBannerAnimation = () => {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    const components: any = [Banner1, Banner2, Banner3];

    useEffect(() => {
        setTimeout(() => {
            setCurrentComponentIndex(
                (prevIndex) => (prevIndex + 1) % components.length
            );
        }, 7000);
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
        </ComponentsContainer>
    );
};

const Container = styled.div`
    width: 100%;
`;
const ComponentsContainer = styled.div`
    position: relative;
`;
