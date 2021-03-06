import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'

function LoadingSpiner(props) {
    return (
        <SpinnerContainer>
            <LoadingSpinner />
        </SpinnerContainer>
    );
}

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `
const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    width: 100%;
    height: auto;
`

const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid var(--primary); 
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
`



export default LoadingSpiner;