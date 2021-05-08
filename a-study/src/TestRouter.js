import React, { useImperativeHandle, useState, useEffect, createRef, useRef, Component } from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch,
//     Redirect,
//     useLocation,
//   } from "react-router-dom";
  
  import Home from "./routers/Home";
  import About from "./routers/About";
  import Users from "./routers/Users";
  import Topics from "./routers/Topics";
import { 
    BrowserRouter as Router, 
    Route, 
    Link 
} from 'react-router-dom'
const TestRouter = () => {
    return <div>
<Router>
        <Link to="/home/张三/18" className="link">跳转Home页面</Link>
        <Link to="/about" className="link">跳转About页面</Link>
        <Route path="/home/:name/:age" component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
    </div>

}
export default TestRouter