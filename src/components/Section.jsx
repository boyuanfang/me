import React from 'react';
import styled from 'styled-components';

import SRWrapper from '@components/SRWrapper';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => (props.stretch ? 'min-height: 100vh;' : '')};
  ${(props) => (props.backgroundImage
    ? `background-image: url(${props.backgroundImage});background-size: cover;background-position: center;`
    : '')}
  ${(props) => (props.dark ? `background-color: ${props.theme.black}` : '')};
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin: 80px 0px;
  transition: 0.35s;
`;

const Section = (props) => {
  const {
    children, // required
    stretch,
    dark,
    backgroundImage,
  } = props;

  return (
    <SRWrapper>
      <Wrapper stretch={stretch} dark={dark} backgroundImage={backgroundImage}>
        <Container className="container">{children}</Container>
      </Wrapper>
    </SRWrapper>
  );
};

export default Section;
