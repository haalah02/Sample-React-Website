
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from "./logo.svg";
import CookiePolicy from "../src/pages/Cookie-Policy";
import "./App.css";

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World!</p>
          <a
            className="App-link"
            href="https://www.cookieyes.com/documentation/cookie-policy-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
       
        <footer>
          <CookiePolicy></CookiePolicy>
        {/* <a
            className="Policy"
            src="hello/src/pages/Cookie-Policy.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a> */}
        {/* <Route path="hello/src/pages/Cookie-Policy.js" component={CookiePolicy} />  */}
        </footer>
       
        </div>

  );
}

export default App;
