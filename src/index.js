import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App/App';

const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), document.getElementById('root'));

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./containers/App/App', load);
}

load();
