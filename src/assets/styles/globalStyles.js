import { createGlobalStyle } from 'styled-components';
import Variables from './variables';
import mainBgImage from '../img/main-bg.png'


const GlobalStyle = createGlobalStyle`
    ${Variables};
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *:focus{outline: none}
    html {
        scroll-behavior: smooth;
        box-sizing: inherit;
        width: 100%;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: var(--black);
    }
    body::-webkit-scrollbar {
        width: 6px;
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--black);
        border-radius: 10px;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'DM Sans', sans-serif;
        position: relative;
        color: var(--white);
        max-width: 100%;
        background-image: url(${mainBgImage}), linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.9724090319721639) 0%);
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
        min-height: 100vh;
    }
    input {
        padding: 10px 10px 10px 20px;
        min-width: 200px;
        margin-bottom: 20px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    li:nth-of-type(odd) {
        color: var(--primary);
    }

    input[type=submit] {
        background-color: var(--primary);
        text-transform: uppercase;
        outline: none;
        border: none;
        padding: 10px;
        margin: 0 20px;
        font-size: 14px;
        letter-spacing: 4px;

        &:hover {
            font-weight: bold;
            cursor: pointer;
        }
    }

    .wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }
`;

export default GlobalStyle;