import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 10px;
    font-family: sans-serif;
    background-color: #f1f3f6;
    margin: 0;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  .alinhar-direita {
    text-align: right !important;
  }

  .alinhar-centro {
    text-align: center !important;
  }
  
  .btn-finalizar {
    background-color:#44c767;
    border-radius:28px;
    border:1px solid #18ab29;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    padding:16px 31px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
    margin: 10px;
    outline:0;
    min-width: 30%;
  }
  .btn-finalizar:hover {
    background-color:#5cbf2a;
  }
  .btn-finalizar:active {
    position:relative;
    top:1px;
  }
  
`;

export default GlobalStyle;
