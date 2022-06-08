import React from 'react';
import styled from 'styled-components';

function ErrorMessage(props) {
    return (
        <ErrorMessageBox>
           <p>{props.message}</p> 
        </ErrorMessageBox>
    );
}

const ErrorMessageBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: red;
`

export default ErrorMessage;