import React from 'react';
import { connect } from 'react-redux';
import ReposItemList from './ReposItemList';

function ReposList({repos}) {

    const singleRepoListElement= repos.slice(0, 5).map((repo, index) => <ReposItemList key={repo.id} name={repo.name} user={repo.owner.login} />);
    
    return (
        <ul>
            {singleRepoListElement}
        </ul>
    );
}

const mapStateToProps =  state  => {
    const { repos } = state
    return { repos }
}

export default connect(mapStateToProps)(ReposList);