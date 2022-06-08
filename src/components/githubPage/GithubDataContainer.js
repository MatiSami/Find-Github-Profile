import React from 'react';
import { connect } from 'react-redux'
import CommitsList from './githubResult/CommitsList';
import ReposList from './githubResult/ReposList';
import styled from 'styled-components';
import GithubUserDetails from './githubResult/GithubUserDetails';
import { device } from '../../assets/styles/devices';

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
    flex-direction: column;
    justify-content: space-between;

    @media ${device.laptop} {
        flex-direction: row;
        max-width: 70%;
        margin: 0 auto;
        padding: 0 15px;
    }
`

const mapStateToProps = state => {
    const { repos, commits } = state
    return { repos, commits }
}


export default connect(mapStateToProps)(GithubDataContainer);