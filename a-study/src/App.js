import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./scss/app.scss";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import Home from "./routers/Home";
import About from "./routers/About";
import Users from "./routers/Users";
import Topics from "./routers/Topics";

import DataProvider from "./DataProvider";
import Parent from "./InstanceMethods";

const cout = (obj) => {
  console.log(obj);
};
var a = 1;

const ThemeContext = React.createContext("dark");
function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <button theme={this.context}> {this.context} </button>;
  }
}

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    let aaa = {
      a: 100,
      b: 101,
    };
    let bbb = {
      a: 101,
      b: 102,
    };
    let cccc = { b: 102, c: 103 };
    let cc = [];
    let ddd = [...cc, aaa];
    // let bbb = {...aaa, ...cccc}
    // console.log(ddd)
    let dddd = [...cc, aaa];
    // console.log(dddd)
    let ddddd = [...dddd, cccc];
    console.log(ddddd);
    window.name = "fdfdfd";
    cout(window.devicePixelRatio);
    cout(window.innerHeight);
    console.log("componentWillMount...");
    return () => {
      console.log("componentWillUnmount...");
    };
  }, []);
  // let location = useLocation();
  // console.log(location.pathname)
  const clickHandle = (e) => {
    // alert(JSON.stringify(e.SynctheticEvent))
    setTimeout(function () {
      console.log("setTimeout");
    });

    new Promise(function (resolve) {
      console.log("promise111111");
    }).then(function () {
      console.log("then111111");
    });

    console.log("console");
    console.log("hi");
    setTimeout(function cb1() {
      console.log("cb1");
    }, 5000);
    console.log("bye");
    let a = { a: 1 };
    let b = { a: 1 };
    let c = b;
    c.a = 100;
    console.log(b);
    console.log("aaa");
    console.log("aaa" + (a === b));
    e.persist();
    // console.log(e.nativeEvent);
    setTimeout(() => {
      console.log(e.nativeEvent);
    }, 10);

    cout(navigator.cookieEnabled);

    // cout(navigator.userAgent)

    // window.resizeBy(-200, -200)
    // cout(window.isSecureContext)
    // window.confirm('aaaa')
    // cout(window.innerHeight)
    // cout(window.locationbar.visible)
    //   cout(window.menubar.visible)
    //     cout(window.scrollbars.visible)
    //       cout(window.toolbar.visible)
    //         cout(window.statusbar.visible)
    //           cout(window.personalbar.visible)
    //           cout(window.document)
    //           cout(window.location)
    //           cout(window.navigator)
    //           cout(window.history)
    //           window.sessionStorage.setItem('sessionUserId', 'sessionCrifan');
    // alert('clickHandle')
  };
  const onChange = (e) => {
    for (let i = 0; i <= 2000000; i++) {
      JSON.stringify({
        a: "a",
        b: "a",
      });
    }
    setState(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
        <Parent />
        <DataProvider render={(data) => <h1>hello = {data.data.target} </h1>} />
        {/* <img src="http://image.zhangxinxu.com/image/study/s/s128/mm1.jpg" alt='aaa'/>
        
        <div className='anim'>
        
        </div>
        <div className='aline'>
          <span className='alineInline'>
            我是单行文本测试
            我是单行文本测试
            我是单行文本测试1
            换行fdfdsfdsfdsfdsfdsfdsfdsfdsf
            换行fdfdsfdsfdsfdsfdsfdsfdsfdsf
            </span>
        </div> */}
        {/* <template> */}
        {/* <div id='app'> */}
        <div className="box">
          <div className="children-box"></div>
        </div>
        {/* </div> */}
        {/* </template> */}
        <div> 分割线 -----------------</div>
        <div className="content">
          <div className="left">
            <div className="box">B</div>
          </div>
          <div className="right">
            <div className="box">A</div>
          </div>
        </div>

        <div className="nav">test scss</div>

        <div className="cca">test cca</div>
        <button className="button-green">点我一下</button>

        <div className="scssanim"></div>

        <div className="multiBackground" />

        <h1 className="demo01">text shadow test</h1>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React1
        </a>
        <input value={state} onChange={onChange} />
        <button type="button" onClick={(e) => clickHandle(e)}>
          Say hi!
        </button>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact children={Home} />
              <Route path="/about" children={About} />
              <Route path="/users" children={Users} />
              {/* <Route path="/topics"> 
                <Topics />
              </Route> */}
            </Switch>
          </div>
        </Router>
        <Topics />
      </header>
      {/* <body> */}

      {/* </body> */}
    </div>
  );
}

export default App;
