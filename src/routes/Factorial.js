import React from 'react';
import SectionTitle from '../components/reusable/SectionTitle';
import SectionDescription from '../components/reusable/SectionDescription';
import FactorialResults from '../components/factorialPage/FactorialResults';
import FactorialForm from '../components/factorialPage/FactorialForm';

function Factorial() {

    return (
        <div className='wrapper content'>
            <SectionTitle title="Oblicz silnię" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis viverra mollis. Nam blandit risus nunc, aliquet ultricies mauris fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia." />
            <FactorialForm/>
            <FactorialResults/>
        </div>
    );
};




export default Factorial;