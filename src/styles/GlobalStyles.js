import { createGlobalStyle } from 'styled-components';
import "@fontsource/bebas-neue"
import "@fontsource/montserrat"

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: linear-gradient(to right, #d3cae2, #e6c17a);
        --secondary: #f6ede3;
        --background-dark: #404041;
        --gradient-1: #d3cae2;
        --gradient-2: #e6c17a;
    }

    html {
        scroll-snap-type: y mandatory;
        scroll-padding-top: 60px;
        scroll-padding-bottom: 20px;
    }

    body {
      font-size: 2rem;
      background: var(--background-dark);
      color: var(--secondary);
    }

    main {
        padding: 1.25em; // 20px
    }

    h1 {
        background-color: #f3ec78;
    background-image: var(--primary);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    font-family: "Bebas Neue";
    }

    h2 {
        font-size: 12px;
        font-family: "Bebas Neue";
    }

    h2,
    h3,
    p {
        color: var(--secondary);
    }

    p {
        font-family: "Montserrat";
        font-size: 1rem;
    }

    a {
        background-color: #f3ec78;
    background-image: var(--primary);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    }
`;

export default GlobalStyles;