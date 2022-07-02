import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './variables.css';
import './styles/index.css';
import store from './store/store';
import './store/save-reduxState-to-localStorage';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Provider store={store}>
    {/* <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    > */}
    <App />
    {/* </Auth0Provider> */}
  </Provider>,
  document.getElementById('root')
);
