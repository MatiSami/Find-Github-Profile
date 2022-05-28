import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import SectionDescription from './../components/SectionDescription';

function Factorial(props) {
    const [number, setNumber] = useState('');
    const [factorial, setfactorial] = useState('');

    function handleSubmitFactorial (event) {
        event.preventDefault();
        var n = number;
        var i = 1;
        var s = 1;
        while (i <= n) s *= i++;
        setfactorial(s)
    }

    return (
        <div className='wrapper'>
            <Navbar />
            <SectionTitle title="Oblicz silnię" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis viverra mollis. Nam blandit risus nunc, aliquet ultricies mauris fringilla a. Class aptent taciti sociosqu ad litora torquent per conubia." />

            <form onSubmit={handleSubmitFactorial}>
                <label>
                    <input type="text" name="factorial" placeholder='Wpisz Liczbę' onChange={e => setNumber(parseInt(e.target.value))} />
                </label>
                <input type="submit" value="Oblicz" />
            </form>
            <p>Wynik silni: {factorial}</p>
        </div>
    );
}

export default Factorial;