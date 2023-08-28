import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "styled-components";

export const Range = () => {
    const valuetext = (value: number): string => {
        return `${value}р`;
    };
    return (
        <Container>
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
            ></Slider>
        </Container>
    );
};
const Container = styled.div`
    @media screen and (max-width: 1040px) {
        width: 40%;
    }
    @media screen and (max-width: 655px) {
       width:60%;
    }
`;
