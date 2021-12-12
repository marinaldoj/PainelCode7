import React, { useState } from "react";
import styled from 'styled-components';

import Routes from './routes';
import Aside from "./components/Aside";

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
  function openAside(condition){
    if(condition){
      setWidthAside(20)
    }else{
      setWidthAside(10)
    }
  }

  return (
    <Container>
      <Aside 
        width={widthAside}
        MouseEnter={() => openAside(true)}
        MouseLeave={() => openAside(false)} 
      />
      <ContainerMain>
        <Routes/>
      </ContainerMain>
    </Container>
  );
}

export default App;
