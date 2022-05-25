import { createGlobalStyle } from 'styled-components';
import Variables from './variables';


const GlobalStyle = createGlobalStyle`
    ${Variables};
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
        box-sizing: inherit;
        width: 100%;
    }
    // Scrollbar styles 
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
        font-family: Open-Sans, Helvetica, Sans-Serif;
        position: relative;
        max-width: 100%;
    }
    .wrapper {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;