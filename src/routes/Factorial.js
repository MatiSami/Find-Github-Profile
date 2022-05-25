import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import SectionDescription from './../components/SectionDescription';

function Factorial(props) {
    return (
        <div className='wrapper'>
            <Navbar />
            <SectionTitle title="Oblicz silnię" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis viverra mollis. Nam blandit risus nunc, aliquet ultricies mauris fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia." />
        </div>
    );
}

export default Factorial;