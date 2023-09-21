import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import basket from "../assets/basket.svg";
import { NavLink } from "react-router-dom";
import { Burger } from "./Burger";
import { AnimatePresence } from "framer-motion";
export const Header = () => {
    const [burger, setBurger] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 40;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container active={scrolled ? "active" : undefined}>
            <ContentContainer>
                <Icon image={logo} size={"50px"}></Icon>
                <NavbarContainer>
                    <NavLink
                        to={"/main"}
                        className={({ isActive }) =>
                            isActive ? "link__active" : "link"
                        }
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        to={"/delivery"}
                        className={({ isActive }) =>
                            isActive ? "link__active" : "link"
                        }
                    >
                        Доставка
                    </NavLink>

                    <NavLink
                        to={"/about"}
                        className={({ isActive }) =>
                            isActive ? "link__active" : "link"
                        }
                    >
                        О нас
                    </NavLink>
                </NavbarContainer>

                <BurgerWrap>
                    <TouchedWrap size={"55px"} showed="true">
                        <Icon image={basket} size={"40px"}></Icon>
                    </TouchedWrap>
                    <TouchedWrap
                        onClick={() => {
                            setBurger(!burger);
                        }}
                        size={"55px"}
                    >
                        <IconBurger active={burger ? "active" : undefined} />
                    </TouchedWrap>
                </BurgerWrap>
            </ContentContainer>
            <AnimatePresence>
                {burger ? (
                    <Burger burger={burger} setBurger={setBurger} />
                ) : null}
            </AnimatePresence>
        </Container>
    );
};

const Container = styled.div<{ active?: string }>`
    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    width: 100%;
    transition: background-color 0.6s;
    background-color: ${(props) =>
        props.active ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)"};

    padding: 20px 0;

    @media (max-width: 800px) {
        padding: 10px 0;
    }

    @media (max-width: 800px) {
        padding: 10px 0;
    }
`;

const IconBurger = styled.div<{ active?: string }>`
    width: 30px;
    height: 3px;
    background-color: #ffffff;
    position: relative;

    border-radius: 10px;

    transform: rotate(${(props) => (props.active ? 45 : 0)}deg);

    &:before,
    &:after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: #ffffff;
        position: absolute;
        transition: transform 0.1s ease;
        border-radius: 10px;
    }

    &:before {
        top: ${(props) => (props.active ? 0 : -9)}px;
        transform: rotate(${(props) => (props.active ? 90 : 0)}deg);
    }

    &:after {
        bottom: ${(props) => (props.active ? 0 : -9)}px;
        transform: rotate(${(props) => (props.active ? 90 : 0)}deg);
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: var(--container);
    max-width: 3000px;
`;

const Icon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: ${(props) => props.size};
    height: ${(props) => props.size};
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    min-width: max-content;
    width: 45%;

    @media (max-width: 1000px) {
        display: none;
    }
`;

const BurgerWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    @media (max-width: 1000px) {
        gap: 10px;
    }
`;

const TouchedWrap = styled.div<{ size: string; showed?: string }>`
    display: ${(props) => (props.showed ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    cursor: pointer;

    z-index: 12;

    -webkit-tap-highlight-color: transparent;

    &:active {
        background-color: rgba(53, 53, 53, 0.4);
        border-radius: 50%;
        transition: background-color 0.12s ease-out;
    }
    @media (max-width: 1000px) {
        display: flex;
    }
`;