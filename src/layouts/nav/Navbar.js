import React, { useState } from 'react';
import Navigation from './../../components/Navigations';
import Logo from './../../components/Logo';
import styled from 'styled-components';
import BurgerMenu from '../../components/BurgerMenu';
import MobileMenu from '../../components/MobileMenu';

function  Navbar () {
  const [open, setOpen] = useState(false);

    return (
      <NavBox>
        <Logo />
        <Navigation className="wrapper" />
        <BurgerMenu  open={open} setOpen={setOpen}/>
        <MobileMenu  open={open} setOpen={setOpen}/>
      </NavBox>
    );
}

const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export default Navbar;