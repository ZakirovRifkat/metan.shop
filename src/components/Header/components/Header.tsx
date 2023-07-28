import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";
import basket from "./assets/basket.svg";

export const Header = () => {
    return (
        <Container>
            <Icon image={logo} size={"50px"}></Icon>
            <NavbarContainer>
                <NavbarItem isActive="true">Главная</NavbarItem>
                <NavbarItem>Доставка</NavbarItem>
                <NavbarItem>Контакты</NavbarItem>
                <NavbarItem>О нас</NavbarItem>
            </NavbarContainer>
            <Icon image={basket} size={"40px"}></Icon>
        </Container>
    );
};

const Container = styled.div<{ isActive?: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    background-color: ${(props) =>
        props.isActive ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.6)"};

    padding: 30px 40px;
`;

const Icon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: ${(props) => props.size};
    height: ${(props) => props.size};

    cursor: pointer;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    min-width: max-content;
    width: 45%;
`;

const NavbarItem = styled.div<{ isActive?: string }>`
    font-size: 30px;
    color: ${(props) => (props.isActive ? "var(--secondary)" : "var(--white)")};

    cursor: pointer;
`;
