import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from 'scrollreveal';

import { srconfig } from '@config';
import { media } from '@utils/style';

const Wrapper = styled.div`
  visibility: hidden;
  display: flex;
  ${(props) => (props.stretch ? 'min-height: 100vh;' : '')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  margin: 80px 0px;
  ${media.MD`margin: 80px 20px;`};
  border-radius: 48px;
  transition: 0.35s;
  :hover {
    background: #f7fbfd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  :hover::after {
    width: 48px;
    background: gray;
  }
  ::after {
    transition: 0.35s;
    content: '';
    display: inline-block;
    width: 12px;
    height: 8px;
    border-radius: 12px;
    background: transparent;
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
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Section;
