import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { SafeHTML } from '@utils';

import Layout from '@components/Layout';
import Section from '@components/Section';
import { media } from '@utils/style';

import { Instagram, Twitter, Github, Code, Steam } from '@assets/icons';

/* Links */
const SOURCECODE_LINK = 'https://github.com/boyuanfang/me';

/* Socials */
const GITHUB_LINK = 'https://github.com/boyuanfang';
const INS_LINK = 'https://www.instagram.com/garbagedriver/';
const TWITTER_LINK = 'https://twitter.com/trashdrivr';
const STEAM_LINK = 'https://steamcommunity.com/id/priceishere/';

/* Styled Components */
const Title = styled.h1`
  font-size: 72px;
  ${media.MD`font-size:48px;`};
`;
const SubTitle = styled.h1`
  color: ${(props) => props.theme.gray};
  font-size: 36px;
  ${media.MD`font-size:24px;`};
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
  ${media.MD`
    flex-direction: column;
    align-items: flex-end;
  `}
  justify-content: flex-end;
  align-items: center;
`;
const SocialIcon = styled.a`
  margin-left: 24px;
  ${media.MD`margin-top: 12px;`}
  width: ${(props) => props.size}px;
  ${(props) => media.MD`width: ${props.size / 1.2}px;`}
  /* height: ${(props) => props.size}px; */
  height: fit-content;
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
        <SubTitle>
          <p>
            Thank you for your visit to my little home... I am still working on
            it.
          </p>
        </SubTitle>
        <HeaderBody />
        <BottomRowContainer>
          <SocialIcon size={36} href={SOURCECODE_LINK}>
            <Code />
          </SocialIcon>
          <SocialIcon size={36} href={INS_LINK}>
            <Instagram />
          </SocialIcon>
          <SocialIcon size={36} href={TWITTER_LINK}>
            <Twitter />
          </SocialIcon>
          <SocialIcon size={36} href={GITHUB_LINK}>
            <Github />
          </SocialIcon>
          <SocialIcon size={36} href={STEAM_LINK}>
            <Steam />
          </SocialIcon>
        </BottomRowContainer>
      </Section>
      <Section>
        <h1 style={{ marginBottom: 0 }}>I am</h1>
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
        <h1>As a programmer</h1>
        <p>Yes, this will be my career, where I am professional at.</p>
      </Section>
      <Section>
        <h1>As a gamer</h1>
        <p>
          Gaming is a creative way to spend time. It can be competitive,
          relaxing, and aesthetic.
        </p>
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
