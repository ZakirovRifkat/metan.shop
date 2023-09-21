import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
    burger: boolean;
    setBurger: (a: boolean) => void;
};

export const Burger = ({ ...props }: Props) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const Click = () => {
        props.setBurger(false);
    };
    return (
        <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={Click}
        >
            <BurgerContainer
                initial={{ width: 0 }}
                animate={{ width: "500px" }}
                exit={{ width: 0 }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <LinkContainer>
                    <LinkC Click={Click} text={"Главная"} navigate={"/main"} />
                    <LinkC
                        Click={Click}
                        text={"Доставка"}
                        navigate={"/delivery"}
                    />
                    <LinkC Click={Click} text={"О нас"} navigate={"/about"} />
                </LinkContainer>
            </BurgerContainer>
        </Container>
    );
};
type LinkProps = {
    text: string;
    navigate: string;
    icon?: string | File;
    Click: () => void;
};
const LinkC = ({ text, navigate, icon, Click }: LinkProps) => {
    let nav = useNavigate();
    return (
        <Link
            initial={{ scale: 1}}
            whileTap={{ scale: 0.95}}
            onClick={() => {
                nav(navigate);
                Click();
            }}
        >
            {text}
        </Link>
    );
};

const Container = styled(motion.div)`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 11;
    display: flex;
    background-color: rgba(0, 0, 0, 0.85);
    justify-content: end;
    overflow-x: hidden;
    @media (min-width:1000px) {
        display: none;
    }
`;
const BurgerContainer = styled(motion.div)`
    position: relative;
    max-width: 450px;
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: var(--main); */
    background-color: #252525;
    overflow-x: hidden;
    overflow-y: scroll;
    padding-bottom: 90px;
`;
const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 80%;
`;
const Link = styled(motion.div)`
    padding: 5px 0;
    width: 100%;
    text-align: center;
    font-size: 25px;
    color:#fff;
    border: 1px solid silver;
    border-radius: 20px;

    cursor: pointer;

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
const Icon = styled(motion.img)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #fff;
`;
const Text = styled(motion.div)`
    width: 100%;
    border: 1px solid #fff;
    border-radius: 20px;
`;