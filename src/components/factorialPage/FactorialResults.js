import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

function FactorialResult ({ factorialResults }) {

    const lastResults = factorialResults.map((result, index) => {return <li key={index}>Wynik dla {result.number}: {result.result}</li>});

    return (
        <FactorialResultList>
          {lastResults}
        </FactorialResultList>
    );
}

const FactorialResultList = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column-reverse;

    li {
        text-align: center;
        font-size: 16px;
        margin-bottom: 10px;

        &:last-of-type {
            font-size: 24px;
            margin-bottom: 40px;
            font-weight: bold;
        }
    }

`

const mapStateToProps = state => {
    const { factorialResults } = state
    return { factorialResults }
}

export default connect(mapStateToProps, null)(FactorialResult);