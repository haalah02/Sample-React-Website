import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CookiePolicy from "./pages/Cookie-Policy"; // Import your CookiePolicy component

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
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
          <Link className="Cookie-Policy-Link" to="/cookie-policy">
            Cookie Policy
          </Link>
        </footer>
        <Route path="/Cookie-Policy" component={CookiePolicy} />
      </div>
    </Router>
  );
}

export default App;
