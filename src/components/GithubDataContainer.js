import React from 'react';
import { connect } from 'react-redux'
import CommitsList from './CommitsList';
import ReposList from './ReposList';
import styled from 'styled-components';
import GithubUserDetails from './GithubUserDetails';

function GithubDataContainer({ repos, commits }) {

    return (
        <>  
            <GithubUserDetails/>
            <GithubDataRenderBox>
                <ReposList />
                {
                    commits.length > 0 && <CommitsList />
                }
            </GithubDataRenderBox>
        </>


    );
}

const GithubDataRenderBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const mapStateToProps = state => {
    const { repos, commits } = state
    return { repos, commits }
}


export default connect(mapStateToProps)(GithubDataContainer);