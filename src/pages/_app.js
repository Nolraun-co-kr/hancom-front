import React from 'react';
import PropTypes from 'prop-types';
import { wrapper } from '../store';

import GlobalStyle from './_globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default wrapper.withRedux(MyApp);
