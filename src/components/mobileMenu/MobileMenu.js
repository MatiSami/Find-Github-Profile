import React from 'react';
import MobileNavigationItem from './MobileNavigationItem';
import styled from 'styled-components';
import uuid from 'react-uuid'

function MobileMenu({ open, setOpen }) {

    const navigationLinks = [
        {name: 'Repos', path: '/repos', text: 'Znajdź projekt'},
        {name: 'Instructions', path: '/instructions', text: 'Zadanie'},
        {name: 'Factorial', path: '/factorial', text: 'Silnia'},
      ]

      const singleMobileNavigationLink = navigationLinks.map((link) => <MobileNavigationItem key={uuid()} path={link.path} text={link.text} setOpen={setOpen}  open={open}/>);
    return (
        <MobileMenuContent open={open}>
            {singleMobileNavigationLink}
        </MobileMenuContent>
    );
}

const MobileMenuContent = styled.nav`
    position: absolute;
    top: 100px;
    left: 0;
    height: 50vh;
    width: 100%;
    background-color: #fff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform .5s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`

export default MobileMenu;