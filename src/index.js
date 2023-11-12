
import './index.scss'; // Add this line if you have a global styles file

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import Header from './components/header';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';
import App from './App';
import ScrollToTopButton from './components/topScroll';

const rootElement = document.getElementById('root');
ReactDOM.createRoot((rootElement)).render(
  <Provider store={store}>
    <StrictMode>
      <Router>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <ScrollToTopButton />
        <App />
        <ToastContainer />
        </PersistGate>
      </Router>
    </StrictMode>

  </Provider>
);
