import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./anim.css";

type BaseProps = {
    maxWidth?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
    gridArea: "main" | "music" | "quote";
};

type ComponentProps = {
    images: string[];
    timer: number;
} & BaseProps;

export const GalleryItem = ({ ...props }: ComponentProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImageIndex((prev) => (prev + 1) % props.images.length);
        }, props.timer);
        return () => {
            clearTimeout(timer);
        };
    }, [currentImageIndex]);

    let currentImage = props.images[currentImageIndex];
    return (
        <Container props={props}>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={currentImageIndex}
                    timeout={props.timer}
                    classNames="slider"
                >
                    <ItemContainer>
                        <Item props={props} image={currentImage}></Item>
                    </ItemContainer>
                </CSSTransition>
            </TransitionGroup>
        </Container>
    );
};
const Container = styled.div<{ props: BaseProps }>`
    position: relative;
    display: grid;
    max-width: ${(props) =>
        props.props.maxWidth ? props.props.maxWidth : "400px"};
    max-height: ${(props) =>
        props.props.maxHeight ? props.props.maxHeight : ""};

    width: ${(props) => (props.props.width ? props.props.width : "37vw")};
    height: ${(props) => (props.props.height ? props.props.height : "")};

    grid-area: ${(props) => props.props.gridArea};
    overflow: hidden;
`;

const ItemContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    left: 0;
    top: 0;
`;

const Item = styled.div<{ props: BaseProps; image: string }>`
    width: 100%;
    height: 100%;
    border-radius: 30px;

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 600px) {
        border-radius: 20px;
    }
`;
