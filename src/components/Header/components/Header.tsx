import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import basket from "../assets/basket.svg";

export const Header = () => {
    return (
        <Container>
            <ContentContainer>
                <Icon image={logo} size={"50px"}></Icon>
                <NavbarContainer>
                    <NavbarItem active="true">Главная</NavbarItem>
                    <NavbarItem>Доставка</NavbarItem>
                    <NavbarItem>Контакты</NavbarItem>
                    <NavbarItem>О нас</NavbarItem>
                </NavbarContainer>

                <BurgerWrap>
                    <TouchedWrap showed="true">
                        <Icon image={basket} size={"40px"}></Icon>
                    </TouchedWrap>
                    <TouchedWrap>
                        <BurgerIcon>
                            <BurgerSpan position={"0%"}></BurgerSpan>
                            <BurgerSpan position={"50%"}></BurgerSpan>
                            <BurgerSpan position={"100%"}></BurgerSpan>
                        </BurgerIcon>
                    </TouchedWrap>
                </BurgerWrap>
            </ContentContainer>
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
    background-color: ${(props) =>
        props.active ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)"};

    padding: 20px 0;
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

const NavbarItem = styled.div<{ active?: string }>`
    font-size: 30px;
    color: ${(props) => (props.active ? "var(--secondary)" : "var(--white)")};
    transition: color 0.2s ease-out;

    &:hover {
        color: var(--secondary);
    }

    cursor: pointer;
`;

const BurgerIcon = styled.div`
    display: none;

    width: 30px;
    height: 20px;
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
    position: relative;

    &:active {
        background-color: rgba(100, 7, 7, 0.4);
        border-radius: 50%;
        transition: background-color 0.12s ease-out;
    }

    @media (max-width: 1000px) {
        display: block;
    }
`;

const BurgerSpan = styled.span<{ position: string }>`
    display: block;
    width: 30px;
    height: 3px;

    background-color: var(--white);
    transition-duration: 0.25s;

    position: absolute;
    top: ${(props) => props.position};
`;

const BurgerWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

const TouchedWrap = styled.div<{ showed?: string }>`
    display: ${(props) => (props.showed ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    cursor: pointer;

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
