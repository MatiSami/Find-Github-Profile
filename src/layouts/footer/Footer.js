import React from 'react';
import FooterIcons from '../../components/footer/FooterIcons';
import styled from 'styled-components';

function Footer(props) {
    return (
        <FooterSection>
            <FooterIcons/>
        </FooterSection>
    );
}

const FooterSection = styled.footer`
    width: 100%;
    background-color: var(--black);
    margin-top: 40px;
`

export default Footer;