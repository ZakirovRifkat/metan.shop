import React from "react";
import { styled } from "styled-components";
import wallet from "../assets/wallet.svg";
import delivery from "../assets/delivery.svg";
import time from "../assets/time.svg";
import worldDelivery from "../assets/worldDelivery.svg";

export const Delivery = () => {
    return (
        <Container>
            <ContainerDelivery>
                <Title>
                    ДОСТАВКА ОСУЩЕСТВЛЯЕТСЯ ТОЛЬКО ПО РОССИИ, КАЗАХСТАНУ И
                    БЕЛОРУССИИ.
                </Title>
                <ContainerItems>
                    <Item>
                        <Icon size={"200px"} image={wallet} />
                        <Text>Минимальная сумма заказа 666р</Text>
                    </Item>
                    <Item>
                        <Icon size={"200px"} image={delivery} />
                        <Text>Доставка по России от 300р</Text>
                    </Item>

                    <Item>
                        <Icon size={"200px"} image={worldDelivery} />
                        <Text>Доставка по миру от 1000р</Text>
                    </Item>
                    <Item>
                        <Icon size={"200px"} image={time} />
                        <Text>Отправка заказа в течении 2-х дней</Text>
                    </Item>
                </ContainerItems>
            </ContainerDelivery>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 200px 0 100px 0;
`;
const ContainerDelivery = styled.div`
    width: var(--container);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;
const TextStyle = styled.div`
    color: var(--white);
    text-align: center;
    font-weight: 600;
    letter-spacing: 1.6px;
    font-size: 32px;
`;

const Title = styled(TextStyle)`
    width: 100%;
    font-size: 32px;
    line-height: 180%;

    @media (max-width: 615px) {
        font-size: 18px;
    }
`;

const Text = styled(TextStyle)`
    max-width: 406px;
    width: 100%;
    line-height: 120%;

    @media (max-width: 615px) {
        font-size: 25px;
    }
`;

const ContainerItems = styled.div`
    max-width: 1100px;
    width: 100%;
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(auto-fit, minmax(406px, 1fr));
    row-gap: 50px;
    @media (max-width: 615px) {
        grid-template-columns: 1fr;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 38px;

    @media (max-width: 615px) {
        gap: 20px;
    }
`;

const Icon = styled.div<{ image: string; size: string }>`
    background-image: url(${(props) => props.image});
    /* background-size: ${(props) => props.size}; */
    background-repeat: no-repeat;
    background-position: center;

    background-color: var(--secondary);

    border-radius: 50%;

    min-width: ${(props) => props.size};
    min-height: ${(props) => props.size};
`;
