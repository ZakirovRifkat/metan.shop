import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TagData, Types } from "../../Merch/lib/store";

type Props = {
    types: TagData[];
    type: Types[];
    setType: (a: Types[]) => void;
};

export const SelectLabel = ({ ...props }: Props) => {

    const handleChange = (event:any) => {
      props.setType(event.target.value)
    };

    return (
        <FormControl sx={{ width: "100%" }}>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={props.type}
                placeholder="Типы"
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                    borderStyle: "none",
                    width: "100%",
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
                {props.types.map((a, i) => (
                    <MenuItem value={a.type} key={i}>
                        {a.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
