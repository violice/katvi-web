import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    font-size: 14px;
  }
  
  #root {
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  a {
    color: #7D4CDB;
    text-decoration: none;
  }
`;
