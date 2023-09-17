import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
    src?: string;
    type: string;
    delay: number;
};

const Variants = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
    },
};

export const Image = ({ ...props }: Props) => {
    return (
        <Img
            src={props.src ? props.src : ""}
            type={props.type}
            variants={Variants}
            initial={"initial"}
            animate={"animate"}
            transition={{ delay: props.delay }}
            draggable={false}
        />
    );
};
const Img = styled(motion.img)<{ type: string }>`
    width: 100%;
    height: 100%;
    background-color: #d9d9d9;
    grid-column: ${(props) => (props.type === "main" ? "1fr" : "2 / 4")};
    grid-row: ${(props) => (props.type === "main" ? "1 / 6" : "1fr")};
    border-radius: ${(props) => (props.type === "main" ? 20 : 10)}px;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
`;
