
import './index.css'; // Add this line if you have a global styles file

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.createRoot((rootElement)).render(
  <Provider store={store}>
      <StrictMode>
      <Router>
      <h1>Shytflabs E-commerceApp</h1>
    <App />
    </Router>
      </StrictMode>
    
  </Provider>
);
