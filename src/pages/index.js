import React from 'react';
import { Link, graphql } from 'gatsby';
import VisibilitySensor from 'react-visibility-sensor';

import Layout from '@components/Layout';
import Section from '@components/Section';

const HomePage = ({ location, data }) => (
  <Layout>
    <Section header>
      <h1 dangerouslySetInnerHTML={{ __html: data.introduction.edges[0].node.frontmatter.secret }} />

    </Section>
    <Section>
      <h1>
        Hold on ...
      </h1>
      <h2>
        I'm still developing this site. See you soon.
      </h2>
    </Section>
  </Layout>
);

export const pageQuery = graphql`
  {
    introduction: allMarkdownRemark (
      # filter: { fileAbsolutePath: { regex: "/home/" }}
      filter: { fields: { collection: {eq: "home" }}}
    ) {
      edges {
        node  {
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
