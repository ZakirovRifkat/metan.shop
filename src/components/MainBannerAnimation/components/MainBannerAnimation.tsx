import React, { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { styled } from "styled-components";
import { Banner1, Banner2, Banner3 } from "./Banner";

export const MainBannerAnimation = () => {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
    let components: any = [Banner1, Banner2, Banner3];

    useEffect(() => {
        console.log("Заработало");

        const timer = setInterval(() => {
            setCurrentComponentIndex(
                (prevIndex) => (prevIndex + 1) % components.length
            );
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [components]);

    const CurrentComponent = components[currentComponentIndex];
    return (
        <Container>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={currentComponentIndex}
                    timeout={1000}
                    classNames="fade"
                >
                    <Container>{CurrentComponent()}</Container>
                </CSSTransition>
            </TransitionGroup>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;
