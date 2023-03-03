import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/globalSytles';
import { Home } from './templates/App/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);