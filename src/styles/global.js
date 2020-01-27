import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

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
    background: ${colors.background};
    height: 100%;
    margin: 0;
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
