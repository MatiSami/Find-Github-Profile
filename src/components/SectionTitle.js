import React from 'react';
import styled from 'styled-components';

function SectionTitle(props) {

    const Title = styled.h1`
        text-align: center;
        margin: 3rem 0;
    `

    return (
        <Title>
           {props.title} 
        </Title>
    );
}

export default SectionTitle;