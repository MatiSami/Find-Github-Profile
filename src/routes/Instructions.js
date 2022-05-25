import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import SectionDescription from './../components/SectionDescription';

function Instructions(props) {
    return (
        <div className='wrapper'>
            <Navbar/>
            <SectionTitle title="Opis ninejszego zadania"/>
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id."/>
        </div>
    );
}

export default Instructions;