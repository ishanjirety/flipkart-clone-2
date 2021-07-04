import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { User } from './Context'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <User>
        <App />
      </User>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
