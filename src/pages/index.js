import React from 'react';
import { Link } from 'gatsby';
import VisibilitySensor from 'react-visibility-sensor';

import Layout from '../components/Layout';
import Section from '../components/Section';

const HomePage = () => (
  <Layout>
    <Section header>
      <h1>
        Hello there,
      </h1>
      <h2>
        I'm Boyuan Fang, a student, a fresh career explorer, and a creator.
      </h2>
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

export default HomePage;
