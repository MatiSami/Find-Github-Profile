import React from 'react';
import styled from 'styled-components';

function SectionDescription(props) {

    const DescriptionText = styled.p`
        text-align: center;
    `
    return (
        <DescriptionText>
          {props.description}  
        </DescriptionText>
    );
}

export default SectionDescription;