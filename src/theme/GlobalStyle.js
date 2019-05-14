import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: Montserrat, Roboto, Segoe UI, Arial, sans-serif;
    font-size: 16px;
  }
  
  #root {
    height: 100%;
    width: 100%;
  }

  a {
    color: #7D4CDB;
    text-decoration: none;
    display: inline-flex;
  }
`;
