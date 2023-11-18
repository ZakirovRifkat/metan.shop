import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import { Card } from "../../Card/components/Card";
import { Filter } from "../../Filter/components/Filter";
import { SearchInput } from "../../Search/components/Search";
import { useMerch, useSearchParamSync } from "../lib/hook";
import { observer } from "mobx-react-lite";
import filterIcon from "../assets/filterIcon.svg";
import { Types, GenderType } from "../lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Merch = observer(() => {
    const store = useMerch();
    useSearchParamSync();
    const [filter, setFilter] = useState(false);

    const setMinPrice = (value: number) => {
        store.setMinprice(value);
    };
    const setMaxPrice = (value: number) => {
        store.setMaxprice(value);
    };
    const setKeywords = (value: string) => {
        store.setKeywords(value);
    };
    const setType = (value: Types[]) => {
        store.setType(value);
    };
    const setGender = (value: GenderType) => {
        store.setGender(value);
    };
    return (
        <Container>
            <ContainerContent>
                <TitleContainer>
                    <Title>Мерч</Title>
                    <SearchContainer>
                        <SearchInput
                            keywords={store.keywords}
                            setKeywords={setKeywords}
                        />
                        <TouchedWrap size={"55px"} showed={"true"}>
                            <Icon
                                image={filterIcon}
                                size={"45px"}
                                onClick={() => {
                                    setFilter(!filter);
                                }}
                            />
                        </TouchedWrap>
                    </SearchContainer>
                </TitleContainer>
                <SearchInput
                    type="mobile"
                    keywords={store.keywords}
                    setKeywords={setKeywords}
                />
                <AnimatePresence>
                    {filter && (
                        <motion.div
                            style={{ width: "100%" }}
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <Filter
                                minPrice={store.minprice}
                                maxPrice={store.maxprice}
                                setMinPrice={setMinPrice}
                                setMaxPrice={setMaxPrice}
                                type={store.type}
                                arrayType={store.arrayType}
                                setType={setType}
                                gender={store.gender}
                                setGender={setGender}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <ContainerGrid>
                    {store.productList.map((elementOfArray, index) => (
                        <Card
                            id={elementOfArray.Id}
                            key={index}
                            name={elementOfArray.ItemName}
                            price={elementOfArray.Price}
                        />
                    ))}
                </ContainerGrid>
            </ContainerContent>
        </Container>
    );
});

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
    @media screen and (max-width: 700px) {
        padding-right: 0;
        width: var(--container);
    }
`;

const Title = styled.div`
    color: var(--secondary);
    font-size: 64px;
    font-weight: 600;
    @media screen and (max-width: 550px) {
        font-size: 48px;
    }
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
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
