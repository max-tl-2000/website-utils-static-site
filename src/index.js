/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
// import promise from 'redux-promise';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
// import { Auth0Provider } from "./react-auth0-spa";
// import config from "./auth_config.json";
// import history from "./utils/history";

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// A function that routes the user to the right place
// after login
// const onRedirectCallback = appState => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   );
// };

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const contentfulClient = new ContentfulClient({
  accessToken: '{your-contentful-api-token}',
  space: '{your-contentful-space-id',
});

ReactDOM.render(
  // <Auth0Provider
  //   domain={config.domain}
  //   client_id={config.clientId}
  //   redirect_uri={window.location.origin}
  //   onRedirectCallback={onRedirectCallback}
  // >
    <ContentfulProvider client={contentfulClient}>
      <Provider store={store}>
        <App />
      </Provider>,
    </ContentfulProvider>, 
  // </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
