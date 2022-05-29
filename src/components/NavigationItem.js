import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavigationItem(props) {

    return (
        <StyledLink to={props.path} >{props.text}</StyledLink>
    );
}

const StyledLink = styled(NavLink)`
    padding: 0 1rem;
    text-transform: uppercase;
    letter-spacing: .15rem;
    transition: all .75s;
    font-size: 16px;
    display: flex;
    color: var(--white);
    text-decoration: none;
    justify-content: flex-end;
    margin-left: 25px;
    &.active {
        font-weight: bold;
        color: var(--primary)
    }
    :hover {
        font-weight: bold;
    }
`

export default NavigationItem;