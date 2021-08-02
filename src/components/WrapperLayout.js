import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import GlobalStyle from './GlobalStyles';
import styled from "styled-components";

export default function WrapperLayout({ children }) {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />

      <Container>
          {children}
      </Container>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  padding-top: 66px;
`;
