import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./scss/app.scss";
import Test from './Test'
import singleton from './tools/singleton'

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
import PrimitiveTest from './PrimitiveTest'
import ObjectTest from './ObjectTest'
import UseMemoObjectTest from './UseMemoObjectTest'

import MemoTest from './optidemo/MemoTest'
import TestDefaultProp from './TestDefaultProp'

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

//一下了吃进10000个DIV by 司徒正美
function randomHexColor() { //随机生成十六进制颜色
  return "#" + ("00000" + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}
var root = document.getElementById("root");

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    (function() {
      console.log('Hello, World!');
    //   setTimeout(function () {
    //     var k = 0;
    //     var root = document.getElementById("root");
    //     for (var i = 0; i < 10000; i++) {
    //         k += new Date() - 0;
    //         var el = document.createElement("div");
    //         el.innerHTML = k+ Math.random()
    //         root.appendChild(el);
    //         el.style.cssText = "background:" + randomHexColor() + ";height:30px;";
    //     }
    // }, 3000);
    setTimeout(function () {
      function loop(n) {
          var k = 0;
          for (var i = 0; i < 100; i++) {
              k += new Date() - 0;
              var el = document.createElement("div");
              el.innerHTML = k+Math.random();
              root.appendChild(el);
              el.style.cssText = "background:" + randomHexColor() + ";height:30px;";
          }
          if (n) {
              setTimeout(function () {
                  loop(n - 1);
              }, 40);
          }
      }
      loop(100);
  }, 3000);
  })();
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
    cout(window.getSelection());

    let testObj = {'aaa1bbb': 'cccc'}
    console.log('1111')
    cout(Object.getOwnPropertyNames(testObj))
    cout(testObj['aaa' + 1 + 'bbb'])
    console.log("componentWillMount...");
    const res = {
      foo: 1,
      adddd: 2,
      fdsfdsfdsf:'34324324',
      countRoleConf0fieldNameList:'aaaa1',
      countRoleConfSub0fieldNameList:'bbbb1',
      countRoleConf1fieldNameList:'aaaa2',
      countRoleConfSub1fieldNameList:'bbbb2',
      countRoleConf2fieldNameList:'aaaa3',
      countRoleConfSub2fieldNameList:'bbbb3',
    }
    for(let i = 0;  res[`countRoleConf${i}fieldNameList`]; i++) {
      cout(res[`countRoleConf${i}fieldNameList`])
      cout(res[`countRoleConfSub${i}fieldNameList`])
    }

    // let aaareplic =[2,2,3,4,5]
    // cout(aaareplic)
    // cout(Array.from(new Set(aaareplic)))

    const arr = [1,2,3]
const obj = {...arr}
console.log(obj)

let start = performance.now();
let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += 1;
}
let end = performance.now();
console.log(start);
console.log(end);

let arr1 = [1, [2, 3, [4, [5]]]];
cout(arr1.flat(3)); // [1,2,3,4,5]

const arr2 = [1, 2, 3, 4, 5];
const copyArr = arr2.slice();
const equaArr = arr2;
arr2[2] = 100
cout(copyArr)
cout(arr2)
cout(equaArr)

function foo() {
  var d = 20;
  return function inner(a, b) {
    const c = a + b + d;
    return c;
  };
}
const f = foo();
cout(f(10,10))
cout(f(10,10))
cout(f(10,10))
  //   setInterval(()=>{
  //     var selection=window.getSelection();
  //     console.log(selection)
  // },1000)
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

    // #{x: 1, y: 4} === #{x: 1, y: 4}
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

  const testThunk = (e) => {
    console.log('testThunk ', e)
  }
  const onChange = (e) => {
    for (let i = 0; i <= 2000000; i++) {
      JSON.stringify({
        a: "a",
        b: "a",
      });
    }
    setState(e.target.value);
  };

  const len = 3000

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={testThunk}>点我试试</div>
      </header>
    </div>
  );
}

export default App;
