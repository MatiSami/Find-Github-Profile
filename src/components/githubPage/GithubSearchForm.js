import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addReposList as AddRepoListAction } from '../../actions';
import { isLoading as isLoadingAction } from '../../actions';
import { addCommits as addCommitsAction } from '../../actions';
import styled from 'styled-components';
import { showError as showErrorAction } from '../../actions';
import { device } from '../../assets/styles/devices';


function GithubSearchForm({ addReposList, isLoading, addCommits, showError }) {
    const [userName, setName] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        isLoading(true)
        addCommits([])

        fetch(`https://api.github.com/users/${userName}/repos?sort=pushed`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        })
            .then(response => response.json())
            .then(data => {
                addReposList(data);
                isLoading(false)
                if ((data.message === "Not Found") || (data.length === 0)) {
                    showError(true)
                } else {
                    showError(false)
                }
            })
            .catch(error => {
                addReposList([]);
                isLoading(false)
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem>
                <Input type="text" name="userName" id="userName" autocomplete="off" required onChange={e => setName(e.target.value)} />
                <Label htmlFor="username">Nazwa użytkownika</Label>
            </FormItem>
            <input type="submit" value="Szukaj" />
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    @media ${device.laptop} {
        flex-direction: row;
        max-width: 70%;
        margin: 40px auto;
        justify-content: space-between;
        padding: 0 50px 0 30px;
    }
`

const FormItem = styled.div`
    position: relative;
`

const Input = styled.input`
        display: block;
        height: 40px;
        width: 200px;
        background: var(--black);
        border: solid 1px var(--gray);
        transition: all .3s ease;
        padding: 14px;
        color: var(--white);

        @media ${device.laptop} {
            margin-bottom: 0;
        }

        &:focus {
        border-color: var(--primary)
        }

        ${FormItem} &:focus + label,
        ${FormItem} &:valid + label{
        font-size: 11px;
        top: -5px;
        }
        @media ${device.laptop} {
            width: 500px;
        }
`

const Label = styled.label`
        position: absolute;
        cursor: text;
        z-index: 2;
        top: 11px;
        left: 10px;
        font-size: 14px;
        background: var(--black);
        padding: 0 10px;
        color: var(--gray);
        transition: all .3s ease
`

const mapDispatchToProps = (dispatch) => ({
    addReposList: (data) => dispatch(AddRepoListAction(data)),
    isLoading: (loading) => dispatch(isLoadingAction(loading)),
    addCommits: (commits) => dispatch(addCommitsAction(commits)),
    showError: (error) => dispatch(showErrorAction(error)),
})


export default connect(null, mapDispatchToProps)(GithubSearchForm);