import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --primary: linear-gradient(right, #d3cae2, #e6c17a);
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
        color: var(--primary);
    }
`;

export default GlobalStyles;