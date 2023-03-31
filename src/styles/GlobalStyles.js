import { createGlobalStyle } from 'styled-components';
import "@fontsource/bebas-neue"
import "@fontsource/montserrat"

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: linear-gradient(to right, #d3cae2, #e6c17a);
        --secondary: #f6ede3;
        --background-dark: #404041;
        --background-navbar: #4b4b4ced;
        --gradient-1: #d3cae2;
        --gradient-2: #e6c17a;
    }

    *,
    *::before, 
    *::after {
        margin: 0; 
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box; // navbar
    }

    body {
      font-size: 1rem;
      background: var(--background-dark);
      color: var(--secondary);
    }

    nav {
        .navbar-brand {
            font-family: "Bebas Neue";
        }

        .navbar-toggler-icon {
            color: var(--secondary);
        }

        .nav-item {
            font-family: "Montserrat";
        }
    }

    main {
        padding: 1.25em; // 20px
    }

    h1,
    h2,
    h3 {
    background-image: var(--primary);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;

    font-family: "Bebas Neue";
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 3em;
        margin: 3em 0 1em;

        @media (max-width: 412px) {
            font-size: 2.5em;
        }
    }

    h3 {
        font-size: 1.5em;
    }

    p {
        color: var(--secondary);
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


/* Carousel styles */
.carousel-container {
    background: var(--background-dark);
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
}

.carousel-item {
    height: 20rem;
    min-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}


`;

export default GlobalStyles;