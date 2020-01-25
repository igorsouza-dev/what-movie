import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oleo+Script|Roboto+Mono&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-image: linear-gradient(25deg, #826fe4, #ab90eb, #d1b2f1, #f4d5f7);
    height: 100%;
    overflow: auto;
  }
  body, input, button, textarea {
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
