import React, { useState } from 'react';
const { Octokit } = require("@octokit/core");



function GithubSearchForm() {

    const [userName, setName] = useState("");
    const octokit = new Octokit({ auth: `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` });

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await octokit.request(`GET /users/${userName}/repos`, {
            sort: "updated"
        });
        console.log(response.data)
        
        findCommits()
    }

    
   async  function findCommits () {

        const commits = await octokit.request(`GET /repos/${userName}/{repo}/commits`, {
            repo: 'MalinaLayout'
          })
          console.log(commits)
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

export default GithubSearchForm;