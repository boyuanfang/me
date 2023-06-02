import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import SRWrapper from '@components/SRWrapper';
import defaultTheme from './themes/default';

import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "SF Pro", sans-serif;
    font-size: 16px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.black};
  font-size: 12px;
  align-items: center;
`;

// const Footer

const Layout = (props) => {
  const {
    children, // required
  } = props;

  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        {children}
        <SRWrapper>
          <Footer>
            <p>2023</p>
          </Footer>
        </SRWrapper>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
