import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Header';
    font-display: swap;
    src: url('/fonts/Montserrat-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'primary';
    font-display: swap;
    src: url('/fonts/Montserrat-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: 'primary';
    user-select: none;
    position: relative;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    width: auto;
    height: auto;
    box-sizing: border-box;
  } *:focus{
    outline: none;
  }

  a{
    text-decoration: none;
  } a:hover{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  button:hover{
    cursor: pointer;
  }

  html {
    background-color: #ffaaa1;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyles