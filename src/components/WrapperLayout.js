import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WrapperLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />

      {children}
      <Footer />
    </div>
  );
}
