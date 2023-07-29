import React from "react";
import { styled } from "styled-components";

export const Filter = () => {
    return (
        <Container>
            <SexFilter>
                <SexFilterItem>Все</SexFilterItem>
                <SexFilterItem>Пацанам</SexFilterItem>
                <SexFilterItem>Пацанессам</SexFilterItem>
                <ActiveItem left={"100%"} center={"-100%"}></ActiveItem>
            </SexFilter>
        </Container>
    );
};

const Container = styled.div`
    width: var(--container);
`;

const SexFilter = styled.div`
    display: flex;
    position: relative;
    width: max-content;

    color: var(--white);
    background-color: rgba(165, 164, 164, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(28, 28, 28, 0.25);

    padding: 10px 0;
    border-radius: 30px;
`;

const SexFilterItem = styled.div`
    width: 140px;
    text-align: center;
    position: relative;
    z-index: 1;
`;

const ActiveItem = styled.div<{
    left?: string;
    center?: string;
}>`
    position: absolute;
    top: 0;
    border-radius: 30px;
    left: ${(props) => props.left};
    transform: translate(${(props) => props.center});
    background-color: var(--secondary);
    min-width: 140px;
    height: 100%;
    z-index: 0;
`;
