import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Navbar from '../layouts/nav/Navbar';
import SectionDescription from './../components/SectionDescription';
import styled from 'styled-components';

function Instructions(props) {
    return (
        <div className='wrapper'>
            <Navbar />
            <SectionTitle title="Opis ninejszego zadania" />
            <SectionDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id." />

        <ApplicationRequirements>
            <h3>Założenia aplikacji</h3>

            <ul>
                <li>Wyszukiwarka projektów githubowych</li>
                <li> Założenia całej aplikacji </li>
                <li>Wyliczanie silni </li>
            </ul>

            <h4>Ad 1:</h4>
            <ul>
                <li>Wykorzystane jest publiczne API Githuba; </li>
                <li>Czeka na podanie loginu użytkownika: </li>
                <ul>
                    <li>waliduje poprawność; </li>
                    <li>obsługuje nieistniejące loginy; </li>
                </ul>
                <li>wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego: </li>
                <ul>
                    <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
                </ul>

            </ul>
            <h4>Ad 2:</h4>
            <ul>
                <li>wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;  </li>
                <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
            </ul>

            <h4>Ad 3:</h4>
            <ul>
                <li>input do podania liczby dla której będzie wyliczona silnia;  </li>
                <li>historia poprzednich wyliczeń. </li>
            </ul>

            <h4>Ogólne:</h4>
            <ul>
                <li>korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna; </li>
                <li>wyświetla co drugi element każdej listy wyróżnionym kolorem; </li>
                <li>jest hostowana (github pages, heroku, itd..), a jej kod jest dostępny publicznie;</li>
            </ul>            
        </ApplicationRequirements>


        </div>
    );
}

const ApplicationRequirements = styled.div`
margin-top: 20px;

    ul {
        padding-left: 20px;
        margin: 10px;
    }

    ul:nth-of-type(2) {
        ul {
            padding-left: 20px;
        }
    }
`

export default Instructions;