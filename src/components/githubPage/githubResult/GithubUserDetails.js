import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { device } from '../../../assets/styles/devices';

function GithubUserDetails({ repos }) {
    return (
        <GithubUserDetailsBox>
            <div>
                <img src={repos[0].owner.avatar_url} alt="avatar użytkownika Github" />
                <p>{repos[0].owner.login}</p>
            </div>
            <div>
                <p>Udało znaleść się użytkownika {repos[0].owner.login}. Możesz podejrzeć kilka ostatnich projektów. Po więcej szczegółw udaj się na profil użytkownika {repos[0].owner.login}</p>
                <a href={repos[0].owner.html_url}>Skocz do github</a>
            </div>
        </GithubUserDetailsBox>
    );
}

const GithubUserDetailsBox = styled.div`
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    @media ${device.laptop} {
        flex-direction: row;
        max-width: 70%;
    }

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
        margin-top: 20px;
        text-align: center;
        line-height: 25px;

        @media ${device.laptop} {
            text-align: left;
            align-items: flex-start;
            justify-content: space-between;
            padding-left: 40px;
            margin-top: 0;
        }

        p {
            @media ${device.laptop} {
                width: 80%;
            }
        }
        a {
            display: block;
            background-color: transparent;
            color: var(--primary);
            border: 1px solid var(--primary);
            padding: 8px 20px;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            margin-top: 20px;
            letter-spacing: 3px;
        }
    }
`

const mapStateToProps = state => {
    const { repos } = state
    return { repos }
}

export default connect(mapStateToProps)(GithubUserDetails);