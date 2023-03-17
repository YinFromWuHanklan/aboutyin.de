import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: linear-gradient(to right, #d3cae2, #e6c17a);
        --secondary: #f6ede3;
        --background-dark: #404041;
        --gradient-1: #d3cae2;
        --gradient-2: #e6c17a;
    }

    body {
      font-size: 2rem;
      background: var(--background-dark);
      color: var(--secondary);
    }

    h1 {
        background-color: #f3ec78;
    background-image: var(--primary);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    }

    h2,
    h3,
    p {
        color: var(--secondary);
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