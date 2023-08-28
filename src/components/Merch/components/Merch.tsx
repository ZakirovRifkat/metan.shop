import React from "react";
import { styled } from "styled-components";
import { Card } from "../../Card/components/Card";
import { Filter } from "../../Filter/components/Filter";
import filterIcon from "../assets/filterIcon.svg";
import searchIcon from "../assets/search.svg";

export const Merch = () => {
    return (
        <Container>
            <ContainerContent>
                <TitleContainer>
                    <Title>Мерч</Title>
                    <SearchContainer>
                        <Search>
                            <SearchInput
                                placeholder={"Введите запрос"}
                            ></SearchInput>
                            <TouchedWrap size={"40px"} showed={"true"}>
                                <Icon image={searchIcon} size={"30px"}></Icon>
                            </TouchedWrap>
                        </Search>
                        <TouchedWrap size={"55px"} showed={"true"}>
                            <Icon image={filterIcon} size={"45px"}></Icon>
                        </TouchedWrap>
                    </SearchContainer>
                </TitleContainer>
                <Search mobile={"true"}>
                    <SearchInput placeholder={"Введите запрос"}></SearchInput>
                    <TouchedWrap size={"40px"} showed={"true"}>
                        <Icon image={searchIcon} size={"30px"}></Icon>
                    </TouchedWrap>
                </Search>
                <Filter></Filter>
                <ContainerGrid>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ContainerGrid>
            </ContainerContent>
        </Container>
    );
};

const Container = styled.div`
    background: var(--main);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 80px 0 80px 0;
`;

const ContainerContent = styled.div`
    width: var(--container);
    max-width: 3000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 40px;

    margin-top: 50px;

    @media (max-width: 911px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 2.4vw;
        grid-row-gap: 4vw;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    width: 100%;

    padding-right: 45px;
    @media screen and (max-width:700px){
        padding-right: 0;
    }
`;

const Title = styled.div`
    color: var(--secondary);
    font-size: 64px;
    font-weight: 600;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;

const Search = styled.div<{ mobile?: string }>`
    display: ${(props) => (props.mobile ? "none" : "flex")};
    align-items: center;
    justify-content: space-between;

    padding: 0 18px 0 28px;

    max-width: 450px;
    width: 40vw;
    height: 45px;
    border-radius: 30px;
    background-color: rgba(165, 164, 164, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(28, 28, 28, 0.25);
    @media screen and (max-width: 700px) {
        display: ${(props) => (props.mobile ? "flex" : "none")};
        margin-top: 20px;
        width: 100%;
        max-width: none;
    }
`;

const SearchInput = styled.input`
    outline: none;
    background: none;
    color: #777777;

    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.2s ease-in;

    &:focus {
        color: var(--white);
    }
`;

const Icon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    width: ${(props) => props.size};
    height: ${(props) => props.size};
`;

const TouchedWrap = styled.div<{ size: string; showed?: string }>`
    display: ${(props) => (props.showed ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
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
