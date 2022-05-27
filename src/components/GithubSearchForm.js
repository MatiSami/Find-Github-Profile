import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addReposList as AddRepoListAction } from '../actions';
import { isLoading as isLoadingAction} from './../actions';
import { addCommits as addCommitsAction} from '../actions';
import styled from 'styled-components';
import { showError as showErrorAction } from './../actions';


function GithubSearchForm({ addReposList, isLoading, addCommits, showError }) {
    const [userName, setName] = useState("");
    const [reposList, setReposList] = useState([])
    const [loadingStatus, setloadingStatus] = useState(false)

    useEffect(() => {
        addReposList(reposList);
        isLoading(loadingStatus)
    }, [reposList, loadingStatus]);

    async function handleSubmit(event) {
        event.preventDefault();
        setloadingStatus(true)
        addCommits([])

        fetch(`https://api.github.com/users/${userName}/repos`, {
            sort: 'updated',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        })
            .then(response => response.json()) //Converting the response to a JSON object
            .then(data => {
                // console.log(data)
                setReposList(data)
                setloadingStatus(false)
                if (data.message === "Not Found") {
                   showError(true)  
                }else {
                    showError(false)
                }
            })
            .catch(error => {
                console.error(error)

                setReposList([]);
                setloadingStatus(false)
            });

    }


    return (
        <Form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="userName" placeholder='nazwa użytkownika' onChange={e => setName(e.target.value)} />
            </label>
            <input  type="submit" value="Szukaj"/>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    input {
        padding: 5px 50px 5px 10px;
        margin: 5px 20px;
    }
`

const mapDispatchToProps = (dispatch) => ({
        addReposList: (data) => dispatch(AddRepoListAction(data)),
        isLoading: (loading) => dispatch(isLoadingAction(loading)),
        addCommits: (commits) => dispatch(addCommitsAction(commits)),
        showError: (error) => dispatch(showErrorAction(error)),
        })


export default connect(null, mapDispatchToProps)(GithubSearchForm);