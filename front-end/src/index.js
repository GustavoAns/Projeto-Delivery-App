import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Provider from './context/Provider';
// import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
       <BrowserRouter>
         <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
