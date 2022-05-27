import React from 'react';
import { connect } from 'react-redux';
import ReposItemList from './ReposItemList';
import styled from 'styled-components';

function ReposList({repos}) {

    const singleRepoListElement= repos.slice(0, 5).map((repo, index) => <ReposItemList key={repo.id} name={repo.name} user={repo.owner.login} />);
    
    return (
        <ReposListBox>
            {singleRepoListElement}
        </ReposListBox>
    );
}

const ReposListBox = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const mapStateToProps =  state  => {
    const { repos } = state
    return { repos }
}

export default connect(mapStateToProps)(ReposList);