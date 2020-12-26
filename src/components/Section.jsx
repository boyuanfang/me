import React from 'react';
import styled from 'styled-components';

import SRWrapper from '@components/SRWrapper';

const Wrapper = styled.div`
  display: flex;
  ${(props) => (props.stretch ? 'min-height: 100vh;' : '')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  margin: 80px 0px;
  border-radius: 24px;
  transition: 0.35s;
`;

const Section = (props) => {
  const {
    children, // required
    stretch,
  } = props;

  return (
    <SRWrapper>
      <Wrapper stretch={stretch}>
        <Container>{children}</Container>
      </Wrapper>
    </SRWrapper>
  );
};

export default Section;
