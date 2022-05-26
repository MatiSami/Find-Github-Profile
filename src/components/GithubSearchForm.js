import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addReposList as AddRepoListAction} from '../actions';
const { Octokit } = require("@octokit/core");


function GithubSearchForm({ addReposList }) {
    const [userName, setName] = useState("");
    const [reposList, setReposList] = useState([])
    const octokit = new Octokit({ auth: `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` });

    useEffect(() => {
        addReposList(reposList)
    }, [reposList]);

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await octokit.request(`GET /users/${userName}/repos`, {
            sort: "updated"
        });
        
        console.log(response.data)
        setReposList(response.data)
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

const mapDispatchToProps = (dispatch) => {
    return {
        addReposList: (data) => {
            dispatch(AddRepoListAction(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(GithubSearchForm);