import React, { useEffect, useState } from "react";
import { css, styled } from "styled-components";
import { SelectLabel } from "../../CustomMui/Select/SelectLabel";
import { Range } from "../../CustomMui/Range/Range";
import { TagData, Types, GenderType } from "../../Merch/lib/store";
import { debounce } from "lodash";
import iconRub from "../assets/rub.png";

type Props = {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (price: number) => void;
    setMaxPrice: (price: number) => void;
    arrayType: TagData[];
    type: Types[];
    setType: (value: Types[]) => void;
    gender: GenderType;
    setGender: (value: GenderType) => void;
};

export const Filter = ({ ...props }: Props) => {
    const [minPrice, setMinPrice] = useState(props.minPrice);
    const [maxPrice, setMaxPrice] = useState(props.maxPrice);

    const delayMinPrice = debounce(() => {
        props.setMinPrice(minPrice);
    }, 600);

    const delayMaxPrice = debounce(() => {
        props.setMaxPrice(maxPrice);
    }, 600);

    useEffect(() => {
        if (minPrice !== props.minPrice) {
            delayMinPrice();
        }
        if (maxPrice !== props.maxPrice) {
            delayMaxPrice();
        }
        return () => {
            delayMinPrice.cancel();
            delayMaxPrice.cancel();
        };
    }, [minPrice, maxPrice]);

    useEffect(() => {
        if (minPrice !== props.minPrice) {
            setMinPrice(props.minPrice);
        }
        if (maxPrice !== props.maxPrice) {
            setMaxPrice(props.maxPrice);
        }
    }, [props.maxPrice, props.minPrice]);

    const ChangeType = (value: Types) => {
        if (!props.type.includes(value)) {
            props.setType([...props.type, value]);
        } else {
            props.setType(props.type.filter((item) => item !== value));
        }
    };

    const ChangeGender = (value: GenderType) => {
        if (value != props.gender) {
            console.log("1");
            props.setGender(value);
        }
    };
    let style: React.CSSProperties = {};

    if (props.gender == "boy") {
        style = {
            left: "50%",
            transform: "translate(-50%)",
        };
    } else if (props.gender == "girls") {
        style = {
            left: "100%",
            transform: "translate(-100%)",
        };
    } else {
        style = {
            left: "0",
        };
    }

    return (
        <Container>
            <ContentContainer>
                <SexContainer>
                    <SexFilter>
                        <SexFilterItem
                            onClick={() => {
                                ChangeGender("all");
                            }}
                        >
                            Все
                        </SexFilterItem>
                        <SexFilterItem
                            onClick={() => {
                                ChangeGender("boy");
                            }}
                        >
                            Пацанам
                        </SexFilterItem>
                        <SexFilterItem
                            onClick={() => {
                                ChangeGender("girls");
                            }}
                        >
                            Пацанессам
                        </SexFilterItem>
                        <ActiveItem style={style} />
                    </SexFilter>

                    {/* <SelectContainer>
                        <SelectLabel />
                    </SelectContainer> */}

                    <SelectContainer mobile={"true"}>
                        <SelectLabel type={props.type} setType={props.setType} types={props.arrayType}  />
                    </SelectContainer>
                </SexContainer>

                <FilterContainer>
                    <PriceContainer>
                        <PriceTitle>Цена</PriceTitle>
                        <RangeContainer>
                            <Range
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                setMinPrice={setMinPrice}
                                setMaxPrice={setMaxPrice}
                            />
                            <InputContainer>
                                <InputTags
                                    icon={iconRub}
                                    placeholder={"от"}
                                    value={minPrice}
                                    onChange={(e) => {
                                        setMinPrice(Number(e.target.value));
                                    }}
                                />
                                <InputTags
                                    icon={iconRub}
                                    placeholder={"до"}
                                    value={maxPrice}
                                    onChange={(e) => {
                                        setMaxPrice(Number(e.target.value));
                                    }}
                                />
                            </InputContainer>
                        </RangeContainer>
                    </PriceContainer>

                    <TagsContainer>
                        {props.arrayType.map((t, i) => (
                            <CategoryTag
                                active={
                                    props.type.includes(t.type)
                                        ? "true"
                                        : undefined
                                }
                                onClick={() => {
                                    ChangeType(t.type);
                                }}
                                key={i}
                            >
                                {t.name}
                            </CategoryTag>
                        ))}
                    </TagsContainer>
                </FilterContainer>
            </ContentContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: var(--container);
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
    margin-top: 50px;
    gap: 50px;
`;
const SexFilter = styled.div`
    display: flex;
    position: relative;
    width: max-content;
    height: max-content;
    color: var(--white);
    background-color: rgba(165, 164, 164, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(28, 28, 28, 0.25);

    padding: 10px 0;
    border-radius: 30px;
    @media screen and (max-width: 530px) {
        display: none;
    }
`;

const SexFilterItem = styled.div`
    width: 140px;
    text-align: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
`;
const SexContainer = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 780px) {
        flex-direction: column;
        align-items: flex-start;
    }
    @media screen and (max-width: 530px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;
const ActiveItem = styled.div`
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    border-radius: 30px;
    background-color: var(--secondary);
    min-width: 140px;
    height: 100%;
    z-index: 0;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`;

const PriceTitle = styled.div`
    color: var(--white);
    font-size: 24px;
    font-weight: 600;
`;

const tag = css`
    background-color: #3a3a3a;
    border-radius: 30px;
    color: var(--white);
    padding: 5px 10px;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
`;

const InputContainer = styled.div`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 1040px) {
        margin-left: 25px;
    }
    @media screen and (max-width: 655px) {
        margin-left: 0;
    }
`;

const InputTags = styled.input<{ icon?: string }>`
    ${tag}
    color:#777777;
    transition: color 0.2s ease-in;
    outline: none;
    width: 130px;
    height: 40px;
    padding: 0px 20px;
    background-image: url(${(props) => props.icon});
    background-position: right 5% bottom 50%;
    background-repeat: no-repeat;
    background-size: 15px;
    &:focus {
        color: var(--white);
    }
    @media screen and (max-width: 655px) {
        width: 50%;
    }
    @media screen and (max-width: 450px) {
        height: 30px;
        font-size: 14px;
    }
`;

const TagsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 580px;
    @media screen and (max-width: 1040px) {
        display: none;
    }
`;

const CategoryTag = styled.div<{ active?: string }>`
    ${tag}

    height: max-content;
    padding: 8px 15px;
    background-color: ${(props) => (props.active ? "var(--secondary)" : "")};
    cursor: pointer;
`;
const SelectContainer = styled.div<{ mobile?: string }>`
    display: none;
    width: 50%;
    max-width: 250px;
    @media screen and (max-width: 1040px) {
        display: ${(props) => (props.mobile ? "flex" : "none")};
    }
    @media screen and (max-width: 530px) {
        display: flex;
        width: 50%;
    }
`;
const RangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (max-width: 1040px) {
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
    @media screen and (max-width: 655px) {
        flex-direction: column;
        width: 100%;
    }
`;
