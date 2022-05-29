import React from "react";
import NavigationItem from "./NavigationItem";
import styled from 'styled-components';
import { device } from "../assets/styles/devices";
import uuid from 'react-uuid'

function  Navigation () {
    
  const navigationLinks = [
      {name: 'Repos', path: '/repos', text: 'Znajdź projekt'},
      {name: 'Instructions', path: '/instructions', text: 'Zadanie'},
      {name: 'Factorial', path: '/factorial', text: 'Silnia'},
    ]

    const singleNavigationLink = navigationLinks.map((link) => <NavigationItem key={uuid()} path={link.path} text={link.text} />);

    return (
        <MainNavigation>
          {singleNavigationLink}
        </MainNavigation>
    );
}

const MainNavigation = styled.nav`
  display: none;

  @media ${device.tablet} {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      min-height: 70px;
      align-items: center;
    }
`

export default Navigation;