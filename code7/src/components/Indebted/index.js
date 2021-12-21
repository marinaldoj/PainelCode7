import React from "react";
import styled from "styled-components";

const Conteiner = styled.button`
    width: 80%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    background: #005687;
    border-radius: 10px;
    color: #ffffff;
    margin-bottom: 20px;
    margin-left: 10%;
    transition: 0.2s;
    :hover{
        background: #0B0F54;
    }
`;

export default function Indebted({children, HandleClick}){
    return(
        <Conteiner onClick={() => HandleClick()}>
            {children}
        </Conteiner>
    )
}