import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function MobileNavigationItem(props) {
    return (
        <MobileLink to={props.path} >{props.text}</MobileLink>
    );
}

const MobileLink = styled(NavLink)`
    padding: 40px 0;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--black);
    font-size: 30px;

    &.active {
        font-weight: bold;
        color: var(--primary)
    }
`

export default MobileNavigationItem;