import React from 'react';
import { connect } from 'react-redux'
import { addCommits as addCommitsAction} from '../../actions';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { addActiveRepo as addActiveRepoAction } from '../../actions/index';

function ReposItemList({addCommits, addActiveRepo, name, user}) {

    function handleClickListElement (event) {
        const userName = event.currentTarget.dataset.username;
        const repoName = event.currentTarget.dataset.name;
        addActiveRepo(repoName)
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
                addCommits(data)
            })
            .catch(error => {
                console.error(error)
                addCommits([])
            });
    }

    return (
        <ListElement data-name={name} data-username={user} onClick={e => {handleClickListElement(e)}}>{name} <span ><AiOutlineInfoCircle/></span> </ListElement>
    );
}


const ListElement = styled.li`
    list-style: none;
    font-size: 16px;
    margin-bottom: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .5s ease-in-out;
    color: var(--white);
    border-bottom: 1px solid var(--gray);
    padding: 5px 10px;

    &:hover {
        cursor: pointer;
        background-color: var(--gray);
    }

    span {
        padding: 10px 20px;
        font-size: 15px;
        letter-spacing: 3px;
        text-align: center;

        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
`

const mapDispatchToProps = (dispatch) => ({
    addCommits: (commits) => dispatch(addCommitsAction(commits)),
    addActiveRepo: (commits) => dispatch(addActiveRepoAction(commits)),
    })

export default connect(null, mapDispatchToProps)(ReposItemList);