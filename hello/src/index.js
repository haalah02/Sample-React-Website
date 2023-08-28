import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App';
import Layout from './pages/Layout';
import cookiePolicy from './pages/Cookie-Policy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App1 />
  // </React.StrictMode>
);
export default function App() {  return (    <BrowserRouter>      <Routes>     
     <Route path="/" element={<Layout />}>             
         <Route path="cookiePolicy" element={<cookiePolicy />} />           </Route>      </Routes>    </BrowserRouter>  ); }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
