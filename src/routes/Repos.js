import React from 'react';
import SectionDescription from '../components/SectionDescription';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import GithubSearchForm from './../components/GithubSearchForm';
import { connect } from 'react-redux';
import GithubDataContainer from '../components/GithubDataContainer';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpiner from '../components/LoadingSpiner';

function Repos( { repos, isLoading, error }) {
    return (
        <div className='wrapper'>
            <Navbar />
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
                error === true && !isLoading && <ErrorMessage/>
            }

        </div>
    );
}

const mapStateToProps =  state  => {
    const { repos, isLoading, error } = state
    return { repos, isLoading, error }
}

export default connect(mapStateToProps)(Repos);