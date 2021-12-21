import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";

import Logo from '../../assets/Logo.svg';
import Indebted from "../../components/Indebted";
import Debts from "../../components/Debts";

const ConteinerMain = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`;

const ConteinerIndebted = styled.div`
    padding: 6px 0;
    height: 100%;
    overflow-x: hidden;
    ::-webkit-scrollbar{
        width: 10px;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track{
        background: #0B0F54;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #1198E4;
        border-radius: 50px;
    }
`;

const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConteinerDebts = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const ConteinerListDebts = styled.div`
    width: 100%;
    height: 88%;
    padding: 10px 0;
    border-radius: 10px;
    overflow-x: hidden;
    text-align: center;
    color: #0B0F54;
    ::-webkit-scrollbar{
        width: 10px;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track{
        background: #0B0F54;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #1198E4;
        border-radius: 50px;
    }  
`;


const Conteiner = styled.div`
    display: flex;
    height: 100%;
`;

const Button = styled.button`
    width: 20%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    background: #005687;
    border-radius: 10px;
    color: #ffffff;
    :hover{
        background: #0B0F54;
    }
`;

const ClearFilter = styled.button`
    width: 20%;
    height: 40px;
    border-radius: 10px;
    margin-left: 20px;    
    background: #005687;
    color: #ffffff;
    :hover{
        background: #0B0F54;
    }
`;

export default function Home({HandleModal, data}){

    const mock = [
        {
            'idUsuario': 1,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
        {
            'idUsuario': 3,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
        {
            'idUsuario': 2,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
        {
            'idUsuario': 1,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
        {
            'idUsuario': 5,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
        {
            'idUsuario': 7,
            'motivo': 'Parcelamento do Veiculo',
            'valor': 199.99
        },
    ]

    const [indebted, setIndebted] = useState(data)
    const [debts, setDebts] = useState(mock)
    const [listDebts, setListDebts] = useState(mock)

    function filterDebts(idPlace){
        if(debts.length > 0){
        const filter = debts.filter((retorno) => {
            if(retorno.idUsuario === idPlace){
                return retorno
            }})
        setListDebts(filter)}
    }

    useEffect(() => {
        setIndebted(data)
    }, [data]);

    return(
        <Conteiner>
            <ConteinerMain>
                <ContainerImage>
                    <img src={Logo} alt="Logo Code7"/>
                </ContainerImage>
                <ConteinerIndebted>
                    {indebted.length > 0 ? (indebted.map((user, index) => {
                        return(
                            <Indebted 
                                key={index} 
                                HandleClick={() => filterDebts(user.id)} 
                            >{user.name}</Indebted>
                        )
                    })) : 'Nenhum usuário localizado'}
                </ConteinerIndebted>

            </ConteinerMain>
            <ConteinerDebts>
                <ConteinerListDebts>
                    {listDebts.length > 0 ? (listDebts.map((data, index) => {
                        return <Debts dados={data} key={index} HandleOpenModal={() => HandleModal({isOpen: true, modalType: true, dataEdit: data})} />
                    })) : (
                    <>
                        Nenhum débito cadastrado!
                        { debts.length > 0 ? 
                            (<ClearFilter 
                                onClick={() => setListDebts(debts)}
                            >Limpar filtro</ClearFilter>) : null
                        }
                    </>)}
                    
                </ConteinerListDebts>
                <Button onClick={() => HandleModal({isOpen: true})}>Novo</Button>      
            </ConteinerDebts>            
        </Conteiner>
    )
}