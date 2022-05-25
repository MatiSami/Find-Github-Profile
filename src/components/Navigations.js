import React, { Component } from "react";
import NavigationItem from "./NavigationItem";
import styled from 'styled-components';

class Navigation extends Component {
  render() {

    
    const Navigation = styled.nav`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      min-height: 70px;
      align-items: center;
    `

    const navigationLinks = [
      {name: 'App', path: '/', text: 'Strona główna'},
      {name: 'Repos', path: '/repos', text: 'Znajdź projekt'},
      {name: 'Instructions', path: '/instructions', text: 'Zadanie'},
      {name: 'Factorial', path: '/factorial', text: 'Silnia'},
    ]

    const singleNavigationLink = navigationLinks.map((link, index) => <NavigationItem key={index} path={link.path} text={link.text} />);

    return (
        <Navigation>
          {singleNavigationLink}
        </Navigation>
    );
  }
}

export default Navigation;