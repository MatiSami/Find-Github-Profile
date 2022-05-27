import React from 'react';
import { connect } from 'react-redux'
import { addCommits as addCommitsAction} from '../actions';
import styled from 'styled-components';

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
        <ListElement data-name={name} data-username={user} >{name} <span onClick={e => {handleClickListElement(e)}}>Szczegóły</span> </ListElement>
    );
}

const ListElement = styled.li`
    list-style: none;
    font-size: 20px;
    padding: 5px 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .5s ease-in-out;
    border: 1px solid var(--black);

    span {
        padding: 10px 20px;
        font-size: 14px;
        margin: 5px 0;
        background-color: var(--gray);
        color: var(--white);
        border-radius: 5px;
        min-width: 150px;
        text-align: center;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
`

const mapDispatchToProps = (dispatch) => ({
    addCommits: (commits) => dispatch(addCommitsAction(commits)),
    })

export default connect(null, mapDispatchToProps)(ReposItemList);