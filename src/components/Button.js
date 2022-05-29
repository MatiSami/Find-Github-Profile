import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../assets/styles/devices';

function Button() {
    return (
        <ButtonLink to={{
            pathname: '/repos'
        }}>
            Zaczynajmy
        </ButtonLink>
    );
}

const ButtonLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 4px ;
    padding: 10px 30px;
    max-width: fit-content;
    font-size: 14px;
    margin: 30px auto 0;
    color: var(--gray);
    background-color: var(--primary);

    &:hover {
        font-weight: bold;
    }

    @media ${device.laptop} {
        padding: 17px 40px 17px 40px;
        margin: 40px auto;
        font-size: 16px;
    }
`

export default Button;