import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';

function FactorialResult ({ factorialResults }) {

    // console.log(factorialResults)
    const lastResults = factorialResults.map((result, index) => {return <li key={index}>Wynik silni dla {result.number}: {result.result}</li>});

    return (
        <FactorialResultList>
          {lastResults}
        </FactorialResultList>
    );
}

const FactorialResultList = styled.ul`
    list-style: none;
`

const mapStateToProps = state => {
    const { factorialResults } = state
    return { factorialResults }
}

export default connect(mapStateToProps, null)(FactorialResult);