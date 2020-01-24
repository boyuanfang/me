import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';

import { media } from './utils/StyleUtils';

/* CONSTANTS */
const REVEAL_DELAY = 250;
const CASCADE_DURATION = 2000;

const Wrapper = styled.div`
  color: #1c1c1e;
  ${(props) => (props.header ? 'min-height: 100vh;' : '')};
  padding: 120px 40px;
  ${media.MD`padding: 120px 40px;`}
`;

const Section = (props) => {
  const {
    children, // required
    header,
  } = props;

  return (
    <Wrapper className="container" header={header}>
      <Fade
        delay={REVEAL_DELAY}
        duration={CASCADE_DURATION}
      >
        {children}
      </Fade>
    </Wrapper>
  );
};

export default Section;
