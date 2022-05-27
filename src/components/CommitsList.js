import React from 'react';
import { connect } from 'react-redux';
import CommitItemList from './CommitListItem';
import styled from 'styled-components';

function CommitList({commits}) {

    const singleCommitListElement = commits.slice(0, 5).map((commit) => <CommitItemList key={commit.sha} message={commit.commit.message} author={commit.commit.author.name} date={commit.commit.author.date} />);
    
    return (
        <CommitListBox>
            <h2> Ostatnie commity</h2>
            {singleCommitListElement}
        </CommitListBox>
    );
}

const CommitListBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    width: 50%;

    h2 {
        text-align: center;
        margin-bottom: 15px;
    }
`

const mapStateToProps =  state  => {
    const { commits } = state
    return { commits }
}

export default connect(mapStateToProps)(CommitList);