import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { SafeHTML } from '@utils';

import Layout from '@components/Layout';
import Section from '@components/Section';
import { media } from '@utils/style';

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

const HomePage = ({ location, data }) => {
  const {
    html,
    frontmatter: {},
  } = data.introduction.edges[0].node;

  return (
    <Layout>
      <Section stretch>
        <Title>I create.</Title>
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
        <p>
          Aged 20, this guy is getting ready for more life challenges.
        </p>
      </Section>
      <Section>
        <h1>I write code</h1>
      </Section>
      <Section>
        <h1>I play video games</h1>
      </Section>
      <Section>
        <h1>I make arts</h1>
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
  }
`;

export default HomePage;
