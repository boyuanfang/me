import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { srconfig } from '@config';
import sr from 'scrollreveal';

const Wrapper = styled.div`
  visibility: hidden;
`;

const SRWrapper = (props) => {
  const {
    children, // required
  } = props;

  const ref = useRef(null);
  useEffect(() => sr().reveal(ref.current, srconfig()));

  return <Wrapper ref={ref}>{children}</Wrapper>;
};

export default SRWrapper;
