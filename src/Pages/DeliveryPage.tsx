import React from "react";
import { Delivery } from "../components/Delivery/components/Delivery";
import styled from "styled-components";

export const DeliveryPage = () => {
    return (
        <Container>
            <Delivery />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;
