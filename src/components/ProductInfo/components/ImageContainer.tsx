import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Image } from "./Image";
import { wait } from "@testing-library/user-event/dist/utils";

type Props = {
    data: string[];
};

export const ImageContainer = ({ ...props }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);

    //
    const [image, setImage] = useState(props.data[0]);
    //

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseDown = (e: MouseEvent) => {
            setIsMouseDown(true);
            setStartX(e.clientX - (container?.offsetLeft || 0));
            setStartY(e.clientY - (container?.offsetTop || 0));
            setScrollLeft(container?.scrollLeft || 0);
            setScrollTop(container?.scrollTop || 0);
        };

        const handleMouseUp = () => {
            setIsMouseDown(false);
        };

        const handleMouseLeave = () => {
            setIsMouseDown(false);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isMouseDown || !container) return;
            e.preventDefault();

            const x = e.clientX - (container.offsetLeft || 0);
            const y = e.clientY - (container.offsetTop || 0);
            const walkX = (x - startX) * 1;
            const walkY = (y - startY) * 1;

            container.scrollLeft = scrollLeft - walkX;
            container.scrollTop = scrollTop - walkY;

            setIsScrolling(true);
        };

        const handleClick = (e: MouseEvent) => {
            if (isScrolling) {
                e.preventDefault();
                e.stopPropagation();
            }
            setIsScrolling(false);
        };

        if (container) {
            container.addEventListener("mousedown", handleMouseDown);
            container.addEventListener("mouseup", handleMouseUp);
            container.addEventListener("mouseleave", handleMouseLeave);
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("click", handleClick);
        }

        return () => {
            if (container) {
                container.removeEventListener("mousedown", handleMouseDown);
                container.removeEventListener("mouseup", handleMouseUp);
                container.removeEventListener("mouseleave", handleMouseLeave);
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("click", handleClick);
            }
        };
    }, [
        containerRef,
        isMouseDown,
        isScrolling,
        startX,
        startY,
        scrollLeft,
        scrollTop,
    ]);

    // const moveElementToStart=(i:number)=> {
    //     if (i < 0 || i >= image.length) {
    //       return image;
    //     }

    //     const elementToMove = image[i];
    //     const newArray = [...image];
    //     newArray.splice(i, 1);
    //     newArray.unshift(elementToMove);
    //     setImage(newArray)
    //   }

    return (
        <Container>
            <MainImage>
                <AnimatePresence mode="wait">
                    <Img
                        key={image}
                        src={image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                    />
                </AnimatePresence>
            </MainImage>
            <Slaider ref={containerRef}>
                {props.data.map((a, i) => (
                    <SecondaryImage
                        onClick={() => {
                            setImage(a);
                        }}
                    >
                        <Image
                            type={"secondary"}
                            src={a}
                            delay={0.5 + (i + 1) * 0.2}
                        />
                    </SecondaryImage>
                ))}
            </Slaider>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    gap: 15px;
    @media (max-width:480px) {
        height: 60%;   
    }
    @media (max-width:400px) {
        height: 50%;   
    }
`;
const MainImage = styled(motion.div)`
    width: 80%;
    height: 100%;
`;
const SecondaryImage = styled.div`
    width: 100%;
    min-height: calc(25% - 8.4px);
    padding: 0;
    margin: 0;
`;
const Slaider = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 20%;
    height: 100%;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    cursor: pointer;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;
const Img = styled(motion.img)`
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
    border-radius: 20px;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
`;
