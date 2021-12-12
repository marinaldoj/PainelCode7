import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: ${props => props.setWidth ? `${props.setWidth}%` : '10%' };
    height: 100%;
    background: #1198E4;
    border-radius: 20px 0 0 20px;
    transition: 0.3s;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
`

const Button = styled.button`
    width: 100%;
    height: 8%;
    margin-bottom: 10px;
    font-size: ${props => props.setWidth <= 10 ? '16px' : '20px' };
    transition: 0.3s;
    font-weight: 400;
    background: #1198E4;
    color: #fff;
    :hover{
        background: #fff;
        color: #1198E4;
    }
`

export default function Aside({
    width,
    MouseEnter,
    MouseLeave
}){
    return(
        
        <Container 
            setWidth={width} 
            onMouseEnter={() => MouseEnter()} 
            onMouseLeave={() => MouseLeave()}
        >
            <Button setWidth={width}>Home</Button>
            <Button setWidth={width}>Dashboard</Button>
        </Container>
    )
}