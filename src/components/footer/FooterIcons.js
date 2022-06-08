import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function FooterIcons(props) {
    return (
        <FooterIconsBox className='wrapper'>
            <a href='https://github.com/MatiSami'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/mateusz-samu%C5%82a/'><FaLinkedin/></a>            
        </FooterIconsBox>
    );
}

const FooterIconsBox = styled.div`
    display: flex;
    min-height: 70px;
    align-items: center;
    a {
        display: block;
        color: var(--white);
        margin-right: 20px;
        font-size: 24px;
    }
`

export default FooterIcons;