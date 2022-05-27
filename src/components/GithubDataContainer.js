import React from 'react';
import { connect } from 'react-redux'
import CommitsList from './CommitsList';
import ReposList from './ReposList';

function GithubDataContainer(props) {

    return (
        <>
            <ReposList/>
            {
                props.commits.length > 0 &&  <CommitsList/>   
            }
                
        </>

    );
}

const mapStateToProps =  state  => {
    const { commits } = state
    return { commits }
}


export default connect(mapStateToProps)(GithubDataContainer);