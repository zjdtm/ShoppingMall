import React from 'react'
import styled from 'styled-components'
import loadingImage from "../../../public/assets/loading.gif"

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top : 0;
    left : 0;
    background: white;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Loading = styled.div`
    font: 1rem;
    text-align: center;
`;

export const loading = () => {
  return (
    <Container>
        <Loading>Loading.....</Loading>
        <img src={loadingImage} alt="로딩화면" width="10%"></img>
    </Container>
  )
}
