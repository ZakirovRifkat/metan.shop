import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";
import { useProduct } from "../lib/hook";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { ImageContainer } from "./ImageContainer";

export const ProductInfo = observer(() => {
    const url = useLocation();
    const navigate = useNavigate();
    const id = url.pathname.split("/")[3];

    const store = useProduct(id);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    });

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0,
        },
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    const test = [
        "https://img01.flagma.uz/photo/futbolka-chyornaya-odnotonnaya-1851744_big.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
        "https://kartinkof.club/uploads/posts/2022-12/1670401826_kartinkof-club-p-kartinki-neobichnie-so-smislom-1.jpg",
    ];

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
                navigate("/main");
            }}
        >
            <Link
                onClick={() => {
                    navigate("/main");
                }}
            >
                <Cross>
                    <Horizontal angle={"45"}></Horizontal>
                    <Horizontal angle={"-45"}></Horizontal>
                </Cross>
            </Link>
            <ContentContainer
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <ElementContainer>
                    <ImageContainer data={test} />
                    <InfoContainer>
                        <ProductTitle textstyle={"600"} textsize={"26px"}>
                            {store.product?.ItemName}
                        </ProductTitle>
                        <ProductTitle textsize={"22px"}>
                            Цена: {store.product?.Price}
                        </ProductTitle>
                        <SizeContainer>
                            <SizeBtn>XS</SizeBtn>
                            <SizeBtn>S</SizeBtn>
                            <SizeBtn active="true">M</SizeBtn>
                            <SizeBtn>L</SizeBtn>
                            <SizeBtn>XL</SizeBtn>
                        </SizeContainer>
                        <BtnContainer>
                            <Button
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.01 }}
                            >
                                КУПИТЬ
                            </Button>
                            <Button
                                whileTap={{ scale: 0.8 }}
                                transition={{ duration: 0.01 }}
                            >
                                В КОРЗИНУ
                            </Button>
                        </BtnContainer>
                    </InfoContainer>
                </ElementContainer>
            </ContentContainer>
        </Container>
    );
});

const Cross = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Span = css`
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: #ffffff;
`;

const Horizontal = styled.span<{ angle: string }>`
    ${Span}
    transform: rotate(${(props) => props.angle}deg);
`;

const Link = styled.div`
    position: fixed;
    top: 15px;
    right: 15px;
    color: white;
    user-select: none;

    @media (max-width: 600px) {
        top: 2vw;
        right: 2vw;
    }
`;
const Container = styled(motion.div)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #0000009e;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    overflow-x: scroll;
    padding: 2vw 0;
    @media (max-width: 620px) {
        padding: 0px;
    }
`;
const ContentContainer = styled(motion.div)`
    background-color: #383838;
    border-radius: 20px;
    margin: auto auto;
    padding: 45px 55px;

    @media (max-width: 620px) {
        padding: 6vw 6vw;
        width: 100%;
        min-height: 100vh;
        height: max-content;
        border-radius: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    max-width: 450px;
    width: 100%;

    @media (max-width: 620px) {
        justify-content: center;
    } 
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 30%;
    min-height: max-content;
    gap: 15px;
`;

const ProductTitle = styled.div<{ textstyle?: string; textsize: string }>`
    color: var(--white);
    font-size: ${(props) => props.textsize};
    font-weight: ${(props) => props.textstyle};
    text-align: start;
`;

const SizeContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    min-height: 55px;
    overflow-y: scroll;
`;

const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const SizeBtn = styled(motion.div)<{ active?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    min-width: 55px;
    min-height: 55px;

    background-color: ${(props) =>
        props.active ? "var(--secondary)" : "rgba(255, 255, 255, 0.20)"};
    border-radius: 15px;

    font-size: 24px;
    color: var(--white);

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: var(--secondary);
    }
`;

const Button = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    background-color: transparent;

    border: 3px solid var(--white);
    border-radius: 20px;

    font-size: 24px;
    color: var(--white);
    padding: 10px 10px;

    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        background-color: var(--secondary);
        border-color: var(--secondary);
    }
    @media (max-width: 435px) {
        font-size: 18px;
    }
`;
