import React from "react";
import {Outlet} from "react-router-dom";
import cookiePolicy from "./Cookie-Policy";

const Layout = () => {  return (    <>      <cookiePolicy />      <Outlet />    </>  ); }; export default Layout;