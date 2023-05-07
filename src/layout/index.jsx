import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from './styles';

export const Layout = ({ children }) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Footer />
  </Container>
);
