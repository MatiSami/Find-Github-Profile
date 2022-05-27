import React from 'react';
import SectionDescription from '../components/SectionDescription';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import GithubSearchForm from './../components/GithubSearchForm';
import { connect } from 'react-redux';
import GithubDataContainer from '../components/GithubDataContainer';

function Repos(props) {
    return (
        <div className='wrapper'>
            <Navbar />
            <SectionTitle title="Znajdź Repozytorum na Githubie" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor sem, fringilla vitae suscipit vitae, finibus vitae libero. Fusce ut ipsum vel lacus finibus tristique. Nam non leo consectetur, hendrerit magna in, luctus ante. Nullam sagittis porttitor vulputate. Nullam consectetur risus sem, ac placerat metus commodo eget. Morbi in purus. " />
            <GithubSearchForm />
            {
                props.isLoading && <h1>Ładowanie wyników</h1>
            }
            {
                props.repos.length > 0 && !props.isLoading && <GithubDataContainer/>
            }

        </div>
    );
}

const mapStateToProps =  state  => {
    const { repos, isLoading } = state
    return { repos, isLoading }
}

export default connect(mapStateToProps)(Repos);