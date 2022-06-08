import React from 'react';
import { connect } from 'react-redux';
import CommitItemList from './CommitListItem';
import styled from 'styled-components';
import { device } from '../../../assets/styles/devices';

function CommitList({commits, activeRepo}) {

    const singleCommitListElement = commits.slice(0, 5).map((commit) => <CommitItemList key={commit.sha} message={commit.commit.message} author={commit.commit.author.name} date={commit.commit.author.date} />);
    
    return (
        <CommitListBox>
            <h2> Ostatnie commity repozytorium <br/><span>{activeRepo}</span></h2>
            {singleCommitListElement}
        </CommitListBox>
    );
}

const CommitListBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 0 15px;
    width: 100%;

    @media ${device.laptop} {
        width: 60%;
        margin-top: 0;
    }

    h2 {
        text-align: center;
        margin-bottom: 15px;
    }
`

const mapStateToProps =  state  => {
    const { commits, activeRepo } = state
    return { commits, activeRepo }
}

export default connect(mapStateToProps)(CommitList);