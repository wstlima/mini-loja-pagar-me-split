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

  .col-form-label {
    font-size: 14px !important;
  }

  .carrinho {
    width: 120px;
    margin: 3px 0px 3px 0px !important;
  }

  .component-margin {
    margin: 50px auto 150px auto !important;
  }

  .alinhar-direita {
    text-align: right !important;
  }
  
  .linha-cart {
    padding-top: 10px;
  }
  .alinhar-centro {
    text-align: center !important;
  }

  .titulo-wrapper {
    width: 100% !important;
  }

  .btn-invisible{
    display:none !important;
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
    width: 100%;
  }
  .btn-finalizar:hover {
    background-color:#5cbf2a;
  }
  .btn-finalizar:active {
    position:relative;
    top:1px;
  }

  .hide-comp {
    display:none;
  }

  
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

  
`;

export default GlobalStyle;
