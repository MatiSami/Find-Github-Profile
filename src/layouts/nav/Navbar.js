import React, { useState } from 'react';
import Navigation from '../../components/navigation/Navigations';
import Logo from '../../components/reusable/Logo';
import styled from 'styled-components';
import MobileMenu from '../../components/mobileMenu/MobileMenu';
import BurgerMenu from '../../components/mobileMenu/BurgerMenu';

function  Navbar () {
  const [open, setOpen] = useState(false);

    return (
      <NavBox className='wrapper'>
        <Logo />
        <Navigation />
        <BurgerMenu open={open} setOpen={setOpen}/>
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