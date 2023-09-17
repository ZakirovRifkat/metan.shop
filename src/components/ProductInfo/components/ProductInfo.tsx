import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "./Image";
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
        "https://img3.akspic.ru/previews/6/4/2/8/6/168246/168246-skazhi_igru-lyudo_king-kosti-igra_v_kosti-azartnaya_igra-500x.jpg",
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
                {/* <ImageContainer1>
                    <Image type={'main'} delay={0.5} />
                    <Image type={'second'} delay={0.7} />
                    <Image type={'second'} delay={0.9} />
                    <Image type={'second'} delay={1.1} />
                    <Image type={'second'} delay={1.3} />
                    <Image type={'second'} delay={1.5} />
                </ImageContainer1> */}
                <ImageContainer data={test} />
                <InfoContainer>
                    <ProductTitle textstyle={"600"} textsize={"26px"}>
                        {store.product?.ItemName}
                    </ProductTitle>
                    <ProductTitle textsize={"22px"}>
                        Цена: {store.product?.Price}
                    </ProductTitle>
                    <BtnContainer>
                        <SizeBtn>XS</SizeBtn>
                        <SizeBtn>S</SizeBtn>
                        <SizeBtn active="true">M</SizeBtn>
                        <SizeBtn>L</SizeBtn>
                        <SizeBtn>XL</SizeBtn>
                    </BtnContainer>
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
    top: 40px;
    right: 50px;
    color: white;
    user-select: none;
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
    padding: 2vw 0;
    overflow: scroll;
`;
const ContentContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    max-width: 560px;
    max-height: 740px;

    width: 36vw;
    height: 48vw;

    border-radius: 20px;
    margin: auto auto;
    padding: 50px 80px;
    background-color: #383838;
`;

const ImageContainer1 = styled.div`
    width: 100%;
    height: 76%;

    display: grid;
    grid-template-columns: 80% 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 12px;
    grid-column-gap: 12px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    margin-top: 30px;
    gap: 15px;
`;

const ProductTitle = styled.div<{ textstyle?: string; textsize: string }>`
    color: var(--white);
    font-size: ${(props) => props.textsize};
    font-weight: ${(props) => props.textstyle};
    text-align: start;
`;

const BtnContainer = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 15px;
`;

const SizeBtn = styled(motion.div)<{ active?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    width: 55px;
    height: 55px;

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
`;
