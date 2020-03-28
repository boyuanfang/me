import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import sr from 'scrollreveal';

import { srconfig } from '@config';

import { media } from '@utils/StyleUtils';

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

  console.log(srconfig);

  const ref = useRef(null);
  useEffect(() => sr().reveal(ref.current, srconfig()));

  return (
    <Wrapper className="container" header={header} ref={ref}>
      {children}
    </Wrapper>
  );
};

export default Section;
