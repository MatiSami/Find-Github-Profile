import React from 'react';
import SectionDescription from '../components/SectionDescription';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';

function Repos(props) {
    return (
        <div className='wrapper'>
            <Navbar />
            <SectionTitle title="Znajdź Repozytorum na Githubie" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor sem, fringilla vitae suscipit vitae, finibus vitae libero. Fusce ut ipsum vel lacus finibus tristique. Nam non leo consectetur, hendrerit magna in, luctus ante. Nullam sagittis porttitor vulputate. Nullam consectetur risus sem, ac placerat metus commodo eget. Morbi in purus. " />
        </div>
    );
}

export default Repos;