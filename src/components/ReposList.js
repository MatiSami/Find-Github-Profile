import React from 'react';
import { connect } from 'react-redux';
import ReposItemList from './ReposItemList';
import styled from 'styled-components';
import { device } from '../assets/styles/devices';

function ReposList({repos}) {

    const singleRepoListElement= repos.slice(0, 5).map((repo) => <ReposItemList key={repo.id} name={repo.name} user={repo.owner.login} />);
    
    return (
        <ReposListBox>
            {singleRepoListElement}
        </ReposListBox>
    );
}

const ReposListBox = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 15px;

    @media ${device.laptop} {
        width: 40%;
    }
`

const mapStateToProps =  state  => {
    const { repos } = state
    return { repos }
}

export default connect(mapStateToProps)(ReposList);