import styled, { createGlobalStyle } from 'styled-components';

const MainContent = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
`;

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        font-family: sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.8rem;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
`;

export { MainContent, GlobalStyles };
