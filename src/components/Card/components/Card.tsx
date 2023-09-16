import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

type Props = {
    id: string;
    name: string;
    price: number;
    image?: string;
};

export const Card = ({ ...props }: Props) => {
    return (
        <Container>
            <TextContainer>
                <NavLink to={`/main/item/${props.id}`}>
                    <Image image={props.image} draggable={false} />
                </NavLink>
                <Name>{props.name} </Name>
                <Price>{props.price} </Price>
            </TextContainer>
        </Container>
    );
};

const Container = styled.div`
    border-radius: 20px;
    background: var(--card);
    box-shadow: 0px 4px 4px 0px #0000003d;
    padding: 20px 20px;
    max-width: 310px;
    @media (max-width: 911px) {
        padding: 2.3vw;
        border-radius: 12px;
    }
`;

const Image = styled.div<{ image?: string }>`
    height: 266px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    background-color: silver;
    
    @media (min-width: 1900px) {
        height: 230px;
    }

    @media (max-width: 915px) {
        height: 26vw;
        border-radius: 12px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    @media (max-width: 800px) {
        margin-left: 1vw;
    }
`;

const TextStyle = styled.p`
    width: 100%;
    color: var(--white);
    font-size: 20px;
    font-style: normal;
    line-height: 120%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    @media (max-width: 911px) {
        font-size: 15px;
    }
    @media (max-width: 630px) {
        font-size: 12px;
    }
    @media (max-width: 500px) {
        font-size: 8px;
    }
`;

const Name = styled(TextStyle)`
    font-weight: 700;
    margin-top: 20px;
    -webkit-line-clamp: 2; /* Ограничение количества строк */

    @media (max-width: 800px) {
        margin-top: 2vw;
    }
`;

const Price = styled(TextStyle)`
    font-weight: 500;
    -webkit-line-clamp: 1; /* Ограничение количества строк */
`;
