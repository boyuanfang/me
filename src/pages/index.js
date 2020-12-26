import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { SafeHTML } from '@utils';
import { media } from '@utils/style';

import Layout from '@components/Layout';
import Section from '@components/Section';
import HighlightCard from '@components/HighlightCard';

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
  font-size: 64px;
  ${media.MD`font-size:48px;`};
`;

const Subtitle = styled.h1`
  color: ${(props) => props.theme.gray};
  font-size: 32px;
  ${media.MD`font-size:24px;`};
`;

const GradientParagraph = styled.p`
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
  // const {
  //   html,
  //   frontmatter: {},
  // } = data.introduction.edges[0].node;

  const { amazonLogo, ucsdLogo } = data;

  return (
    <Layout>
      <Section stretch>
        <Title>Boyuan Fang</Title>
        <Subtitle>
          <GradientParagraph>Software Development Engineer</GradientParagraph>
        </Subtitle>
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

      <Section stretch>
        <h1>👨‍🦱 About me</h1>
        <p>
          I'm Boyuan Fang, and I work as a Software Development Engineer. Here
          is a brief overview of my career path.
        </p>
        <HighlightCard
          title="Software Development Engineer I"
          subtitle="Upcoming"
          date="Apr 2021 - future"
          backgroundColor="#232f3e"
          color="white"
          imageData={amazonLogo}
        />

        <HighlightCard
          title="Bachelor of Science"
          subtitle="Computer Science Engineering"
          date="Sep 2017 - Dec 2020"
          imageData={ucsdLogo}
        />
      </Section>
      <Section stretch>
        <h1>Well.. It looks empty here..</h1>
        <h2>I'm still working on the content, visit me again a bit later!</h2>
      </Section>
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
    amazonLogo: file(relativePath: { eq: "logos/amazon_logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ucsdLogo: file(relativePath: { eq: "logos/ucsd_logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
