import React from "react";
import styled from "styled-components";
import { Doughnut } from 'react-chartjs-2';
import { 
    Chart, 
    LineController, 
    LineElement, 
    PointElement, 
    LinearScale, 
    ArcElement,
    Title
 } from 'chart.js'

Chart.register(LineController, LineElement, PointElement, LinearScale, ArcElement, Title);

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const ContainerGrapics = styled.div`
    /* width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around; */
`;

const ContainerTable = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center; 
`;

const DoughnutG = styled.div`
    width: 20%;
`;

export default function Dashboard(){
    const dataDG = {
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }],
      };

    return(
        <Container>
            <ContainerGrapics>
                <DoughnutG>
                    <Doughnut data={dataDG}/>
                </DoughnutG>
               
            </ContainerGrapics>
            <ContainerTable></ContainerTable>
        </Container>
    )
}