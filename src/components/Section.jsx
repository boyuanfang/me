import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from 'scrollreveal';

import { srconfig } from '@config';
import { media } from '@utils/style';

const Wrapper = styled.div`
  color: #1c1c1e;
  ${(props) => (props.stretch ? 'min-height: 100vh;' : '')};
  padding: 120px 0px;
  ${media.MD`padding: 120px 40px;`};
  ${(props) => props.style};
  ::after {
    content: '';
    display: inline-block;
    width: 24px;
    height: 8px;
    border-radius: 12px;
    background: grey;
  }
`;

const Section = (props) => {
  const {
    children, // required
    stretch,
  } = props;

  // console.log(srconfig);

  const ref = useRef(null);
  useEffect(() => sr().reveal(ref.current, srconfig()));

  return (
    <Wrapper className="container" stretch={stretch} ref={ref}>
      {children}
    </Wrapper>
  );
};

export default Section;
