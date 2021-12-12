import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    background: #1198E4;
    border-radius: 10px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-left: 5%;
    transition: 0.2s;
    :hover{
        background: #0B0F54;
    }
`;

export default function Debts(){
    return(
        <Container>

        </Container>
    )
}