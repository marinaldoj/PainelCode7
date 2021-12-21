import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Routes from './routes';
import Aside from "./components/Aside";
import Modal from "./components/Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ContainerMain = styled.div`
  width: 90%;
  margin-left: 10%;
  padding: 20px;
`;



function App() {

  const [widthAside, setWidthAside] = useState(10);
  const [openModal, setOpenModal] = useState({isOpen: false, modalType: false});
  const [indebted, setIndebted] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        setIndebted(response.data)
    })
  }, []);

  function openAside(condition){
    if(condition){
      setWidthAside(20)
    }else{
      setWidthAside(10)
    }
  }

  return (
    <Container>
      <Modal 
        modalActive={openModal.isOpen} 
        modalDesactive={() => setOpenModal({isOpen: false})} 
        ModalEdit={openModal.modalType}
        dataEdit={openModal.dataEdit}
        data={indebted}
      />
      <Aside 
        width={widthAside}
        MouseEnter={() => openAside(true)}
        MouseLeave={() => openAside(false)} 
      />
      <ContainerMain>
        <Routes 
          propsModal={(e) => setOpenModal(e)}
          Indebteds={indebted}
        />
      </ContainerMain>
    </Container>
  );
}

export default App;
