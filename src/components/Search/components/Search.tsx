import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import searchIcon from "../assets/search.svg";
import { debounce } from "lodash";

type Props = {
    type?: string;
    keywords: string;
    setKeywords: (key: string) => void;
};
export const SearchInput = ({ ...props }: Props) => {
    const [keywords, setKeywords] = useState(props.keywords);

    const handle = debounce(() => {
        props.setKeywords(keywords);
    }, 600);

    useEffect(() => {
        handle();
        return () => {
            handle.cancel();
        };
    }, [keywords]);

    return (
        <Search mobile={props.type}>
            <Input
                placeholder={"Введите запрос"}
                value={keywords}
                onChange={(e) => {
                    setKeywords(e.target.value);
                }}
            />
            <TouchedWrap size={"40px"} showed={"true"}>
                <Icon image={searchIcon} size={"30px"} />
            </TouchedWrap>
        </Search>
    );
};

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
        width: 90%;
        max-width: none;
    }
`;

const Input = styled.input`
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
