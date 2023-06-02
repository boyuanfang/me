import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { media } from '@utils/style';

import Layout from '@components/Layout';
import Section from '@components/Section';
import HighlightCard from '@components/HighlightCard';
import TypingText from '@components/TypingText';

import {
  Instagram, Twitter, Github, Code, Steam,
} from '@assets/icons';

import misuPng from '@assets/photos/misu.png';
import californiaOne from '@assets/photos/california_1.jpg';

/* Links */
const SOURCECODE_LINK = 'https://github.com/boyuanfang/me';

/* Socials */
const GITHUB_LINK = 'https://github.com/boyuanfang';
const INS_LINK = 'https://www.instagram.com/garbagedriver/';
const TWITTER_LINK = 'https://twitter.com/trashdrivr';
const STEAM_LINK = 'https://steamcommunity.com/id/priceishere/';

/* Styled Components */
const BigTitle = styled.h1`
  color: ${(props) => (props.invert ? props.theme.white : props.theme.black)};
  font-size: 56px;
  ${media.MD`font-size:48px;`};
`;

const Title = styled.h1`
  color: ${(props) => (props.invert ? props.theme.white : props.theme.black)};
  font-size: 36px;
  ${media.MD`font-size:48px;`};
`;

const Title2 = styled.h2`
  color: ${(props) => (props.invert ? props.theme.white : props.theme.black)};
  font-size: 28px;
  ${media.MD`font-size:24px;`};
`;

const Title3 = styled.h3`
  color: ${(props) => (props.invert ? props.theme.white : props.theme.black)};
  font-size: 20px;
  ${media.MD`font-size:16px;`};
`;

const P = styled.p`
  color: ${(props) => (props.invert ? props.theme.white : props.theme.black)};
`;

const GradientSpan = styled.span`
  width: fit-content;
  background: linear-gradient(
    120deg,
    rgba(242, 63, 84, 1) 0%,
    rgba(175, 75, 245, 1) 100%
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
  color: ${(props) => props.theme.white};
  transition: 0.5s;
  :hover {
    transform: translate3d(0, -6px, 0);
  }
`;

const CenteredMisuDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const Misu = styled.span`
  color: rgb(109, 73, 62);
`;

const MisuImg = styled.img`
  width: 100px;
  margin: 24px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

/* Core Components */
const HomePage = ({ location, data }) => {
  // const {
  //   html,
  //   frontmatter: {},
  // } = data.introduction.edges[0].node;

  const {
    teslaWordmark, amazonLogo, ucsdLogo,
  } = data;

  return (
    <Layout>
      <Section stretch backgroundImage={californiaOne}>
        <BigTitle invert>
          <TypingText texts={['Boyuan Fang', '方 博远', 'fāng bó yuǎn', '方	博遠', 'ㄈㄤ ㄅㄛˊ ㄩㄢˇ']} />
        </BigTitle>
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

      <Section stretch dark>
        <Title invert>About</Title>
        <P invert>I&apos;m a Software Engineer; I build stuffs with code.</P>

        <HighlightCard
          title="Software Development Engineer"
          subtitle="Factory Software @ GFTX"
          date="Apr 2023 and onwards"
          backgroundColor="#DE2936"
          color="#fafafa"
          imageData={teslaWordmark}
        />

        <HighlightCard
          title="Software Development Engineer"
          subtitle="Amazon Halo & Alexa Smarthome"
          date="Apr 2021 - Jan 2023"
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

        <P invert> Also feel free to peek into my life for a collection of hobbies 👀</P>
        <Title>⛷️🏎️📷🚴‍♂️🐕‍🦺🎮💻🧑‍🍳🔪🏖️🎞️🪛📺🎵</Title>
      </Section>
      <Section stretch>
        <CenteredMisuDiv>
          <Title2>
            <GradientSpan>
              Woof! You found
            </GradientSpan>
            <Misu> Misu!</Misu>
          </Title2>
          <MisuImg src={misuPng} alt="misu.png (didnt load?)" />
          <Title3>
            <Misu>Misu</Misu> wants you to come back soon!
          </Title3>
        </CenteredMisuDiv>
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
    teslaWordmark: file(relativePath: { eq: "logos/tesla_wordmark.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    amazonLogo: file(relativePath: { eq: "logos/amazon_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ucsdLogo: file(relativePath: { eq: "logos/ucsd_logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
