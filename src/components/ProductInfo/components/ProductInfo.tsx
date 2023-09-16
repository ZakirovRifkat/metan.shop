import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { css, styled } from "styled-components";
import { useProduct } from "../lib/hook";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";

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

    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
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
            >
                <ImageContainer>
                    <Image type={"main"} image={store.product?.Picture}></Image>
                    <Image type={"second"}></Image>
                    <Image type={"second"}></Image>
                    <Image type={"second"}></Image>
                    <Image type={"second"}></Image>
                </ImageContainer>
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
                        <Button>КУПИТЬ</Button>
                        <Button>В КОРЗИНУ</Button>
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

const ImageContainer = styled.div`
    width: 100%;
    height: 76%;

    display: grid;
    grid-template-columns: 80% 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 12px;
    grid-column-gap: 12px;
`;
const Image = styled.div<{ type: string; image?: string }>`
    background-color: #d9d9d9;
    grid-column: ${(props) => (props.type === "main" ? "1fr" : "2 / 3")};
    grid-row: ${(props) => (props.type === "main" ? "1 / 6" : "1fr")};
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 20px;
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

const SizeBtn = styled.div<{ active?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;

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

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

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
