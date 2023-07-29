import React from "react";
import { css, styled } from "styled-components";
import Slider from "@mui/material/Slider";

export const Filter = () => {
    const valuetext = (value: number): string => {
        return `${value}°C`;
    };

    return (
        <Container>
            <ContentContainer>
                <SexFilter>
                    <SexFilterItem>Все</SexFilterItem>
                    <SexFilterItem>Пацанам</SexFilterItem>
                    <SexFilterItem>Пацанессам</SexFilterItem>
                    <ActiveItem></ActiveItem>
                </SexFilter>

                <FilterContainer>
                    <PriceContainer>
                        <PriceTitle>Цена</PriceTitle>
                        <Slider
                            getAriaLabel={() => "Minimum distance"}
                            value={[0, 1000]}
                            // onChange={handleChange1}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            disableSwap
                            sx={{
                                margin: "0 12px",
                                color: "#fff", // set the color to white (#fff)
                                "& .MuiSlider-thumb": {
                                    backgroundColor: "#fff", // set the thumb color to white
                                },
                                "& .MuiSlider-track": {
                                    color: "#fff", // set the track color to white
                                },
                            }}
                        />
                        <InputContainer>
                            <InputTags placeholder={"от"}></InputTags>
                            <InputTags placeholder={"до"}></InputTags>
                        </InputContainer>
                    </PriceContainer>

                    <TagsContainer>
                        <CategoryTag>Худи</CategoryTag>
                        <CategoryTag>Майки</CategoryTag>
                        <CategoryTag>Футболки</CategoryTag>
                        <CategoryTag active={"true"}>Толстовки</CategoryTag>
                        <CategoryTag>Кепки</CategoryTag>
                        <CategoryTag>Аксессуары</CategoryTag>
                        <CategoryTag>Балаклавы</CategoryTag>
                        <CategoryTag>Керамбиты</CategoryTag>
                    </TagsContainer>
                </FilterContainer>
                <SelectContainer>
                    <CategoryTag active={"true"}>Худи</CategoryTag>
                    <CategoryTag active={"true"}>Пацанам</CategoryTag>
                    <CategoryTag active={"true"}>От 250р до 5000р</CategoryTag>
                </SelectContainer>
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
    align-items: flex-end;
    margin-top: 50px;
`;
const SexFilter = styled.div`
    display: flex;
    position: relative;
    width: max-content;

    color: var(--white);
    background-color: rgba(165, 164, 164, 0.2);
    box-shadow: 0px 4px 4px 0px rgba(28, 28, 28, 0.25);

    padding: 10px 0;
    border-radius: 30px;
    margin-top: 50px;
`;

const SexFilterItem = styled.div`
    width: 140px;
    text-align: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
`;

const ActiveItem = styled.div<{ left?: string; center?: string }>`
    position: absolute;
    top: 0;
    border-radius: 30px;
    left: ${(props) => props.left};
    transform: translate(${(props) => props.center});
    background-color: var(--secondary);
    min-width: 140px;
    height: 100%;
    z-index: 0;
`;

const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
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
`;

const InputContainer = styled.div`
    display: flex;
    gap: 15px;
`;

const InputTags = styled.input`
    ${tag}
    color:#777777;
    transition: color 0.2s ease-in;
    outline: none;
    width: 130px;
    &:focus {
        color: var(--white);
    }
`;

const TagsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;

    width: 50%;
`;

const CategoryTag = styled.div<{ active?: string }>`
    ${tag}

    height: max-content;
    padding: 8px 15px;
    background-color: ${(props) => (props.active ? "var(--secondary)" : "")};
    cursor: pointer;
`;
const SelectContainer = styled.div`
    display: flex;

    margin-top: 50px;
    gap: 30px;
`;
