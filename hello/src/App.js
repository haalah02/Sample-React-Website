// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import cookiePolicy from './cookiePolicy'; // Import your CookiePolicy component

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer> 
      <a
          className="Cookie-Policy-Link"
          href="./Cookie-Policy.js"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Cookie Policy
        </a>
      </footer>
    </div>
  );
}

export default App;
