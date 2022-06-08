import React from 'react';
import styled from 'styled-components';

function SectionDescription(props) {

    return (
        <DescriptionText>
          {props.description}  
        </DescriptionText>
    );
}

    const DescriptionText = styled.p`
        text-align: center;
    `
export default SectionDescription;