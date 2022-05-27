import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addReposList as AddRepoListAction } from '../actions';
import { isLoading as isLoadingAction} from './../actions';
// const { Octokit } = require("@octokit/core");


function GithubSearchForm({ addReposList, isLoading }) {
    const [userName, setName] = useState("");
    const [reposList, setReposList] = useState([])
    const [loadingStatus, setloadingStatus] = useState(false)
    // const octokit = new Octokit({ auth: `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` });

    useEffect(() => {
        addReposList(reposList);
        isLoading(loadingStatus)
    }, [reposList, loadingStatus]);

    async function handleSubmit(event) {
        event.preventDefault();
        setloadingStatus(true)

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
            })
            .catch(error => {
                console.error(error)
                setReposList([]);
                setloadingStatus(false)
            });

    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Szukaj:
                <input type="text" name="userName" onChange={e => setName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
            <p>Wyszukujesz: {userName}</p>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
        addReposList: (data) => dispatch(AddRepoListAction(data)),
        isLoading: (loading) => dispatch(isLoadingAction(loading))
        })


export default connect(null, mapDispatchToProps)(GithubSearchForm);