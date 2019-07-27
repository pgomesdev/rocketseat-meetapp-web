import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import './config/reactotron';

import Routes from './routes';

import GlobalStyle from './styles/global';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
