import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 18px;
    font-weight: 400;
    background: #1198E4;
    border-radius: 10px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-left: 5%;
    transition: 0.2s;
    cursor: pointer;
    :hover{
        background: #0B0F54;
    }
    :active{
        transform: translatex(10px);
    }
`;

const FieldText = styled.p``;

const Line = styled.div`
    width: 1px;
    height: 90%;
    background: #fff;
`;

export default function Debts({dados, HandleOpenModal}){
    return(
        <Container onClick={() => HandleOpenModal()}>
            <FieldText>{dados.valor}</FieldText>
            <Line />
            <FieldText>{dados.idUsuario}</FieldText>
            <FieldText>{dados.motivo}</FieldText>
        </Container>
    )
}