import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

