

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    
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
        <a
            className="Policy"
            src="hello/src/pages/Cookie-Policy.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>

        </footer>
       
        </div>

  );
}

export default App;
