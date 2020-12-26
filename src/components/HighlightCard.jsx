import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
// import { graphql } from 'gatsby';

import { media } from '@utils/style';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 16px;
  transition: 0.35s;
  background-color: ${(props) => props.backgroundColor};
  :hover {
    transform: translate3d(2px, -4px, 0);
    box-shadow: 0 4px 8px ${(props) => props.theme.boxshadow};
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
  ${media.MD`
    position: static;
    margin-top: 8px;
  `}
  width: 150px;
  height: 44px;
`;

const TitleText = styled.h3`
  color: ${(props) => props.color};
`;

const SubtitleText = styled.h6`
  color: ${(props) => props.color};
`;

const DateText = styled.h6`
  color: ${(props) => props.color};
`;

const HighlightCard = (props) => {
  const {
    imageData,
    date,
    color = 'black',
    backgroundColor = '#f8f9fa',
    title = 'undefined',
    subtitle,
  } = props;

  return (
    <Container backgroundColor={backgroundColor}>
      <div className="row">
        <TitleText color={color}>{title}</TitleText>
      </div>
      <div className="row">
        <SubtitleText color={color}>{subtitle}</SubtitleText>
      </div>
      <div className="row">
        <DateText color={color}>{date}</DateText>
      </div>
      {imageData !== undefined && (
        <LogoContainer>
          <Img fluid={imageData.childImageSharp.fluid} alt="Logo Image" />
        </LogoContainer>
      )}
    </Container>
  );
};

export default HighlightCard;
