import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import GlobalStyle from './GlobalStyles';

export default function WrapperLayout({ children }) {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />

      {children}
      <Footer />
    </div>
  );
}
