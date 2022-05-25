import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

class NavigationItem extends Component {
    render() {

        const StyledLink = styled(NavLink)`
            padding: 0 1rem;
            text-transform: uppercase;
            letter-spacing: .15rem;
            transition: all .75s;
            display: flex;
            color: #000;
            justify-content: flex-end;
            &.active {
                font-weight: bold;
                /* letter-spacing: .25rem; */
            }
            :hover {
                font-weight: bold;
                /* letter-spacing: .25rem; */
            }
        `

        return (
            <StyledLink to={ this.props.path } >{this.props.text}</StyledLink>
        );
    }
}

export default NavigationItem;