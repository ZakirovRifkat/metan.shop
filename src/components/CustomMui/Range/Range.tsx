import Slider from "@mui/material/Slider";
import { styled } from "styled-components";
type Props = {
    minPrice: number;
    maxPrice: number;
    setMinPrice: (price: number) => void;
    setMaxPrice: (price: number) => void;
};
export const Range = ({ ...props }: Props) => {
    const valuetext = (value: number): string => {
        return `${value}р`;
    };
    // console.log(props.minPrice);
    // console.log(props.maxPrice);
    return (
        <Container>
            <Slider
                getAriaLabel={() => "Filter Price"}
                min={props.minPrice}
                max={10000}
                value={[props.minPrice, props.maxPrice]}
                defaultValue={[props.minPrice, 10000]}
                onChange={(e: any) => {
                    props.setMinPrice(e.target.value[0]);
                    props.setMaxPrice(e.target.value[1]);
                }}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                step={100}
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
        width: 60%;
    }
`;
