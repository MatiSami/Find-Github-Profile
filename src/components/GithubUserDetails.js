import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

function GithubUserDetails({ repos }) {
    return (
        <GithubUserDetailsBox>
            <div>
                <img src={repos[0].owner.avatar_url} alt="avatar użytkownika Github" />
                <p>{repos[0].owner.login}</p>
            </div>
            <div>
                <p>Świetnie!</p>
                <p>Udało znaleść się użytkownika {repos[0].owner.login}. Możesz podejrzeć kilka ostatnich projektów. Po więcej szczegółw udaj się na profil użytkownika {repos[0].owner.login}</p>
                <a href={repos[0].owner.html_url}>Skocz do github</a>
            </div>
        </GithubUserDetailsBox>
    );
}

const GithubUserDetailsBox = styled.div`
    max-width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 60px;

    img {
        max-width: 100px;
        height: auto;
        border-radius: 50%;
        margin-bottom: 15px;
    }

    div:first-of-type {
        p:first-of-type {
            font-size: 16px;
            font-weight: bold;
        }
    }

    div:first-of-type, div:last-of-type {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div:last-of-type {
        text-align: center;
        line-height: 25px;

        p:first-of-type {
            font-size: 25px;
            font-weight: bold;
        }

        a {
            display: block;
            background-color: var(--black);
            color: var(--white);
            padding: 10px 20px;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            margin-top: 20px;
            font-weight: bold;

        }
    }
`

const mapStateToProps = state => {
    const { repos } = state
    return { repos }
}

export default connect(mapStateToProps)(GithubUserDetails);