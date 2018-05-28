import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';

import { store } from './services/session/store';
import App from './App';

const rootEl = document.getElementById('root');
render( 
  <Provider store={store}>
    <App/> 
  </Provider>, rootEl );

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

