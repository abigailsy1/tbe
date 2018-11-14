import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './app';
import reducers from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware())));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);