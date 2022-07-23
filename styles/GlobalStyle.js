import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style-type: none;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --body-height: 100%;
  }

  html {
    overflow: auto;
    scroll-behavior: smooth;
  }

  body {
    background-color: #fbfbfb;
    max-height: var(--body-height);
    position: relative;
  }

  .bg-orange {
    background-color: #FFFBEF;
  }

  .bg-white {
    background-color: #fbfbfb;
  }
`;

export default GlobalStyle;
