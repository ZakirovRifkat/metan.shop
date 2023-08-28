import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const SelectLabel = () => {
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <FormControl sx={{ minWidth: 120 }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                    borderStyle: "none",
                    width: 250,
                    height: 42,
                    color: "var(--white)",
                    background: "#3a3a3a",
                    borderRadius: 20,
                    paddingLeft: "20px",
                    "& svg": {
                        color: "var(--white)",
                    },
                    "&:hover": {
                        borderColor: "grey",
                    },
                    "&:focus": {
                        borderRadius: "4px",
                        background: "white",
                        borderColor: "red",
                    },
                    "& .MuiSelect-select": {
                        padding: "0",
                    },
                    "& .MuiFormControl-root:hover": {
                        outline: "none",
                        border: "none",
                        backgroundColor: "red",
                    },
                }}
            >
                <MenuItem value="">Тип</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
};
