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

                <Icon image={basket} size={"40px"}></Icon>
                <BurgerIcon></BurgerIcon>
            </ContentContainer>
        </Container>
    );
};

const Container = styled.div<{ active?: string }>`
    display: flex;
    justify-content: center;

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
    gap: 30px;

    min-width: max-content;
    width: 45%;
`;

const NavbarItem = styled.div<{ active?: string }>`
    font-size: 30px;
    color: ${(props) => (props.active ? "var(--secondary)" : "var(--white)")};
    transition: color 0.1s ease-in;

    &:hover {
        color: var(--secondary);
    }
    @media (max-width:1000px) {
        display:none;
    }
    cursor: pointer;
`;
const BurgerIcon = styled.span`
    width:30px;
    height:2px;

    background-color:var(--white)
`
