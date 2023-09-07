import React, { useState, useEffect, useContext } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "styled-components";

type Props = {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (price: number) => void;
    setMaxPrice: (price: number) => void;
};
function valuetext(value: number) {
    return `${value}р`;
}
export const Range = ({ ...props }: Props) => {


    return (
        <Container>
            <Slider
                min={0}
                max={100000}
                getAriaLabel={() => "Filter Price"}
                value={[props.minPrice, props.maxPrice]}
                onChange={(e:any)=>{
                    console.log(e.target.value)
                    props.setMinPrice(e.target.value[0])
                    props.setMaxPrice(e.target.value[1])
                }}
                defaultValue={[0, 100000]}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={1000}
                sx={{
                    margin: "0 12px",
                    color: "#fff", 
                    "& .MuiSlider-thumb": {
                        backgroundColor: "#fff", 
                    },
                    "& .MuiSlider-track": {
                        color: "#fff", 
                    },
                }}
            />
        </Container>
    );
};

const Container = styled.div`
    @media screen and (max-width: 1040px) {
        width: 40%;
    }
    @media screen and (max-width: 655px) {
        width: 60%;
    }
`;