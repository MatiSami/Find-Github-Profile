import React from 'react';
import styled from 'styled-components';

function SectionTitle(props) {

    return (
        <Title>
           {props.title} 
        </Title>
    );
}

    const Title = styled.h1`
        text-align: center;
        margin: 3rem 0;
    `

export default SectionTitle;