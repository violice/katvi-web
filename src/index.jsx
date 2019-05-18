import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme, { GlobalStyle, ThemeLogger } from 'theme';
import 'fonts.css';

import { App } from 'containers';
import { StoreProvider } from 'store';

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Fragment>
          <App />
          <GlobalStyle />
          <ThemeLogger />
        </Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  MOUNT_NODE,
);
