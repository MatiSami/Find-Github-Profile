import React from 'react';
import { connect } from 'react-redux';
import CommitItemList from './CommitListItem';

function CommitList({commits}) {

    const singleCommitListElement = commits.slice(0, 5).map((commit, index) => <CommitItemList key={commit.sha} message={commit.commit.message} />);
    
    return (
        <ul>
            {singleCommitListElement}
        </ul>
    );
}

const mapStateToProps =  state  => {
    const { commits } = state
    return { commits }
}

export default connect(mapStateToProps)(CommitList);