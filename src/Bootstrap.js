import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import configureStore, {history} from './redux/store';
import App from './App';

import "./styles/index.css";
const store =configureStore(history);

const Bootstrap = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Bootstrap;