import React from 'react';
import { createBrowserHistory } from 'history';
// import { Router, Route } from 'react-router'
import {Router, Route} from 'react-router-dom'
// import Home  from '@/Home'
import About  from '@/About'
import Home  from './Home'
import Page2 from './Page2'
import Page1 from './Page1'

// import { useHistory } from "react-router-dom";
export const history = createBrowserHistory();
// const history = createBrowserHistory();
export default () => (
    <div >
        <Router history={history}>
            <Route exact path="/" component={Page2}/>
            <Route path="/about" component={About}/>
            {/* <Route exact path="/" component={About}/> */}
            <Route path="/page1" component={Page1}/>
            <Route path="/page1" component={Page2}/>
        </Router>
    </div>
  );