import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";

const Container = styled.div`
    display: ${ props => props.active ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    border-radius: 20px;
`;

const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #fff;
    width: 340px;
    height: 400px;
    border-radius: 20px;
`;

const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #1198E4;
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: 15%;
    padding: 0 20px;
    color: #fff;
`

const BodyModal = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 70%;
    padding: 20px;
`

const SideActionsModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:  0 0 20px 20px;
    width: 100%;
    height: 15%;
    padding: 0 20px;
`


const ButtonClose = styled.button`
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    transition: 0.3s;
    :hover{
        background: #0B0F54;
        color:#fff;
    }
`
const Select = styled.select`
    height: 36px;
    border: none;
    border-bottom: 2px solid #0B0F54;
    color: #0B0F54;
    padding-left: 4px;
`

const Input = styled.input`
    height: 36px;
    border: none;
    border-bottom: 2px solid #0B0F54;
    padding-left: 4px;
    ::placeholder{
        color: #0B0F54;
    }
`

const Description = styled.textarea`
    resize: none;
    height: 60px;
    border: 2px solid #0B0F54;
    border-radius: 10px;
    padding: 4px;
    font-size: 14px;
    ::placeholder{
        color: #0B0F54;
    }
`

const Button = styled.button`
    width: 30%;
    height: 36px;
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

export default function Modal({
    modalActive = false, 
    modalDesactive, 
    ModalEdit = false,
    data,
    dataEdit
}){

    const [submit,setSubmit] = useState({indebted: '', describe: '', debtValue: ''})

    useEffect(() => {
        if(dataEdit){
            setSubmit({indebted: dataEdit.idUsuario, describe: dataEdit.motivo, debtValue: dataEdit.valor})
        }else{
            setSubmit({indebted: '', describe: '', debtValue: ''})
        }
    },[dataEdit])

    // function onSubmit(dataSubmit){
    //     if(ModalEdit){
    //         axios.put(`https://provadev.xlab.digital/api/v1/divida/${dataEdit.id}?uuid=ed5869fb-e828-4b05-95b2-75fc2a2a5bec`,{dataSubmit})
    //     }else{
    //         axios.post(`https://provadev.xlab.digital/api/v1/divida?uuid=ed5869fb-e828-4b05-95b2-75fc2a2a5bec`,{dataSubmit})
    //     }
    // }

    return(
        <Container 
            active={modalActive} 
        >
            <ContainerModal>
                <HeaderModal>
                    {ModalEdit ? 'Editar' : 'Cadastrar'}<ButtonClose onClick={() => modalDesactive()}>X</ButtonClose>
                </HeaderModal>
                <BodyModal>
                    <Select 
                        onChange={(event) => {
                            submit.indebted = event.target.value
                            setSubmit(submit)
                        }}
                        value={dataEdit ? dataEdit.idUsuario : 'DEFAULT'}
                    >
                        {
                            ModalEdit ? (
                                <option value="DEFAULT">Selecine um devedor</option>
                            ) : (
                                <option value="DEFAULT">Selecine um devedor</option>
                            )
                        }
                        {/* <option value="" defaultValue>Selecine um devedor</option> */}
                        {data.length > 0 ? (
                            data.map((values, index) =>{
                                return(
                                    <option 
                                        value={values.id} 
                                        key={index}
                                    >{values.name}</option>
                                )
                            })
                        ) : null}
                    </Select>
                    <Description 
                        placeholder="Digite um breve comentário"
                        onChange={(event) => {
                            submit.describe = event.target.value
                            setSubmit(submit)
                        }}
                        value={submit.describe}
                    />
                    <Input 
                        placeholder="Valor da dívida"
                        onChange={(event) => {
                            submit.debtValue = event.target.value
                            setSubmit(submit)
                        }}
                        value={submit.debtValue}
                    />
                </BodyModal>
                <SideActionsModal>
                    <Button onClick={() => console.log(submit)}>{ModalEdit ? 'Editar' : 'Salvar'}</Button>
                </SideActionsModal>
            </ContainerModal>
        </Container>
    )
}