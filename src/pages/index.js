import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { SafeHTML } from '@utils';

import Layout from '@components/Layout';
import Section from '@components/Section';
import { media } from '@utils/style';

import { IconInstagram, IconTwitter, IconGithub } from '@assets/icons';

/* Links */
const SOURCECODE_LINK = 'https://github.com/boyuanfang/me';

/* Socials */
const GITHUB_LINK = 'https://github.com/boyuanfang';
const INS_LINK = 'https://www.instagram.com/garbagedriver/';
const TWITTER_LINK = 'https://twitter.com/trashdrivr';

/* Styled Components */
const Title = styled.h1`
  font-size: 72px;
  ${media.MD`font-size:48px;`};
`;
const GradientName = styled.h1`
  width: fit-content;
  background: rgb(236, 125, 138);
  background: linear-gradient(
    90deg,
    rgba(236, 125, 138, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const HeaderBody = styled.div`
  flex: 1;
`;
const BottomRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const SocialIcon = styled.a`
  display: flex;
  align-content: center;
  margin-left: 24px;
  color: ${(props) => props.theme.black};
  transition: 0.5s;
  :hover {
    transform: translate3d(0, -6px, 0);
  }
`;

/* Core Components */
const HomePage = ({ location, data }) => {
  const {
    html,
    frontmatter: {},
  } = data.introduction.edges[0].node;

  return (
    <Layout>
      <Section stretch>
        <Title>Welcome.</Title>
        <p>Feel free to scroll down.</p>
        <HeaderBody />
        <BottomRowContainer>
          <SocialIcon href={INS_LINK}>
            <IconInstagram size={36} />
          </SocialIcon>
          <SocialIcon href={TWITTER_LINK}>
            <IconTwitter size={40} />
          </SocialIcon>
          <SocialIcon href={GITHUB_LINK}>
            <IconGithub size={36} />
          </SocialIcon>
        </BottomRowContainer>
      </Section>
      <Section>
        <h2 style={{ marginBottom: 0 }}>I am</h2>
        <GradientName>Boyuan Fang</GradientName>
        <p>
          Born and raised in China, with
          <span style={{ color: 'maroon' }}> brown</span> eyes and black hairs.
        </p>
        <p>
          Studying for B.S. of Computer Science at University of California, San
          Diego.
        </p>
      </Section>
      <Section>
        <h1>I write code</h1>
      </Section>
      <Section>
        <h1>I play video games</h1>
      </Section>
      {/* TODO photography section */}
      {/* <Section>
        <h1>I took photographs</h1>
        <p>Art is one of my biggest passions.</p>
      </Section> */}
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    introduction: allMarkdownRemark(
      # filter: { fileAbsolutePath: { regex: "/home/" }}
      filter: { fields: { collection: { eq: "home" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            secret
          }
        }
      }
    }
  }
`;

export default HomePage;
