import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import GetQuote from './containers/GetQuote/GetQuote';

const load = () => render((
  <AppContainer>
    <GetQuote />
  </AppContainer>
), document.getElementById('root'));

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./containers/GetQuote/GetQuote', load);
}

load();
