import React from 'react';
import SectionDescription from '../components/reusable/SectionDescription';
import SectionTitle from '../components/reusable/SectionTitle';
import GithubSearchForm from '../components/githubPage/GithubSearchForm';
import { connect } from 'react-redux';
import GithubDataContainer from '../components/githubPage/GithubDataContainer';
import ErrorMessage from '../components/reusable/ErrorMessage';
import LoadingSpiner from '../components/reusable/LoadingSpiner';

function Repos( { repos, isLoading, error }) {
    return (
        <div className='wrapper content'>
            <SectionTitle title="Znajdź Repozytorium na Githubie" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor sem, fringilla vitae suscipit vitae, finibus vitae libero. Fusce ut ipsum vel lacus finibus tristique. Nam non leo consectetur, hendrerit magna in, luctus ante. Nullam sagittis porttitor vulputate. Nullam consectetur risus sem, ac placerat metus commodo eget. Morbi in purus. " />
            <GithubSearchForm />
            {
                isLoading && <LoadingSpiner/>
            }
            {
                repos.length > 0 && !isLoading && <GithubDataContainer/>
            }
            {
                error === true && !isLoading && <ErrorMessage message="Niestety nie znaleziono żadnych wyników. Spróbuj ponownie"/>
            }

        </div>
    );
}

const mapStateToProps =  state  => {
    const { repos, isLoading, error } = state
    return { repos, isLoading, error }
}

export default connect(mapStateToProps)(Repos);