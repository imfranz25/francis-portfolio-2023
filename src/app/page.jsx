'use client';

import Accomplishments from '../components/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import { Layout } from '../layout';
import { Section } from '../components/UI/Section';

import Theme from '../styles/theme';

const Home = () => (
  <Theme>
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
    </Layout>
  </Theme>
);
export default Home;
