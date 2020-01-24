import React from 'react';
import { createGlobalStyle } from 'styled-components'


import './css/bootstrap-grid.css';
import './css/bootstrap-reboot.css';

/* Links */
const SOURCECODE_LINK = 'https://github.com/Priceincoding/me';

/* Socials */
const GITHUB_LINK = 'https://github.com/Priceincoding';
const INS_LINK = 'https://www.instagram.com/garbagedriver/';
const TWITTER_LINK = 'https://twitter.com/trashdrivr';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Nunito Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
`;

const Layout = (props) => {
  const {
    children, // required
  } = props;

  return (
    <>
      <GlobalStyle />
      {/* <header className="header">
      </header> */}

      {children}

      {/* <footer className="footer">
        <div className="sub-footer-container">
          <ul>
            <div className="sub-footer-section-title">
              Links
            </div>
            <li>
              <a href={SOURCECODE_LINK}>
                Source Code
              </a>
            </li>
          </ul>
          <ul>
            <div className="sub-footer-section-title">
              Socials
            </div>
            <li>
              <a href={GITHUB_LINK}>
                Github
              </a>
            </li>
            <li>
              <a href={INS_LINK}>
                Instagram
              </a>
            </li>
            <li>
              <a href={TWITTER_LINK}>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container">
          2020 BF. Unfortunately I do not have a trademark D:
        </div>
      </footer> */}
    </>
  );
};

export default Layout;
