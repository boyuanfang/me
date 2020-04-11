import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '@utils/themes';

import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Nunito Sans", sans-serif;
    font-size: 20px;
  }
`;

const Layout = (props) => {
  const {
    children, // required
  } = props;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default Layout;
