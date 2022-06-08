import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

function Logo(props) {
    return (
        <LogoImage to={{
            pathname: "/"
        }}/>
    );
}

const LogoImage = styled(Link)`
    display: block;
    width: 250px;
    height: 100px;
    background-image: url(${LogoImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

export default Logo;