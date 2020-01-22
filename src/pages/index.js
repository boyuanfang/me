import React from 'react';
import { Link } from 'gatsby';
import { Fade } from 'react-reveal';
import VisibilitySensor from 'react-visibility-sensor';

import '../components/css/bootstrap.css';

import TitleHeader from '../components/TitleHeader';

/* CONSTANTS */
const REVEAL_DELAY = 500;
const CASCADE_DURATION = 2000;

/* Links */
const SOURCECODE_LINK = 'https://github.com/Priceincoding/priceincoding.github.io';

/* Socials */
const GITHUB_LINK = 'https://github.com/Priceincoding';
const INS_LINK = 'https://www.instagram.com/garbagedriver/';
const TWITTER_LINK = 'https://twitter.com/trashdrivr';

const HomePage = () => (
  <div className="container">
    <header className="header">
    </header>

    <body>
      <div className="center-container">
        <TitleHeader title="INTRODUCTION" />
        <Fade
          // bottom
          cascade
          delay={REVEAL_DELAY}
          duration={CASCADE_DURATION}
        >
          <div>
            <div className="sector">
              Hello there.
            </div>
            <div className="sector">
              ...
              nothing quite to see here at this point of time.
            </div>
            <div className="sector black bg-pblue">
              I like things to be simple but good.
              <br />
              So please allow me to spent some time building it.
            </div>
            <div className="sector">
              See you soon.
            </div>
          </div>
        </Fade>
      </div>
    </body>

    <footer className="footer">
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
    </footer>
  </div>
);

export default HomePage;
