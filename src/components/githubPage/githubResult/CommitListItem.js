import React from 'react';
import styled from 'styled-components';


function CommitItemList({ message, author, date }) {

    return (
        <CommitsListElement>
            <p>Autor: {author}</p>
            <p>Treść: {message}</p>
            <p>Data utworzenia: {(date).slice(0, 10)}</p>
        </CommitsListElement>
    );
}

const CommitsListElement = styled.div`
    font-size: 18px;
    padding: 5px 15px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    p:first-of-type {
        font-size: 12px;
        display: flex;
        justify-content: flex-start;
    }
    p:nth-of-type(2) {
        display: flex;
        margin: 10px 0;
        padding: 0 20px;
        text-align: center;
        justify-content: center;
    }

    p:last-of-type{
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
    }
`


export default CommitItemList;