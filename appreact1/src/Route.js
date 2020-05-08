import React from 'react';
import { createBrowserHistory } from 'history';
// import { Router, Route } from 'react-router'
import {Router, Route} from 'react-router-dom'
// import Home  from '@/Home'
import About  from '@/About'
import Home  from './Home'
// import About  from './About'

const history = createBrowserHistory();
export default () => (
    <div >
        <Router history={history}>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Router>
    </div>
  );