// import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import cookiePolicy from './cookiePolicy'; // Import your CookiePolicy component
import { Link } from 'react-router-dom';
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
      <Link to="/Cookie-Policy/">Cookie Policy</Link>
      </footer>
    </div>
  );
}

export default App;
