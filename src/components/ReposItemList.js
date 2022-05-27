import React from 'react';
import { connect } from 'react-redux'
import { addCommits as addCommitsAction} from '../actions';

function ReposItemList({addCommits, name, user}) {

    function handleClickListElement (event) {
        const userName = event.currentTarget.parentNode.dataset.username;
        const repoName = event.currentTarget.parentNode.dataset.name;
        fetchCommitsForRepo(userName, repoName)
    }

    function fetchCommitsForRepo (repoUserName, repoListElementName) {
        fetch(`https://api.github.com/repos/${repoUserName}/${repoListElementName}/commits`, {
            sort: 'updated',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        })
            .then(response => response.json()) 
            .then(data => {
                // console.log(data)
                addCommits(data)
            })
            .catch(error => {
                console.error(error)
                addCommits([])
            });
    }

    return (
        <li data-name={name} data-username={user} >{name} <span onClick={e => {handleClickListElement(e)}}>Szczegóły</span> </li>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addCommits: (commits) => dispatch(addCommitsAction(commits)),
    })

export default connect(null, mapDispatchToProps)(ReposItemList);