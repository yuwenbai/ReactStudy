import React, { Fragment, Component } from "react";
// import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components";

import produce from "immer";

import Counter from "./Couner";
import OtherSnowy from "./memo/MyComponenet";
import Example from "./hooks/Examples";
import ColorContext from "./hooks/ColorContext";
import HookCounter from "./hooks/HookCounter";
import HookReducer from "./hooks/HookReducer";
import HookUseCustomAxios from "./hooks/HookUseCustomAxios";
import UseRef from "./hooks/UseRef";
import MessageThread from "./hooks/MessageThread";
import RequestAnimation from "./hooks/RequestAnimation";
import PassByValue from "./basic/PassByValue";
import PersonInfo from "./PersonInfo";
import Toggle from "./redux/Toggle";
import testGlobal from "./testGolbal";
import Card from "./Card";
import  BaseContext from './hooks/BaseContext'

const { Map, fromJS } = require("immutable");
// import LayoutEffect from './hooks/UseLayoutEffect'
// import SagaCounter from "./saga/SagaCounter";
// console.log('get value is ' + testGlobal.setValue('1000'))

export const AuthContext = React.createContext(); // added this

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// This could be react-router's Link for example
const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const MyComponent = styled.div`
  background-color: green;
`;

const Content = styled.div`
  background: papayawhip;
  height: 3em;
  width: 3em;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`;

const Button = styled.button`
  font-size: ${(props) => (props.primary ? "20em" : "10em")};
`;

class Home extends Component {
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      studentsPeerIds: [],
      inputValue: "jspang", // input中的值
      list: [
        {
          sex: "nan",
          value: 100,
        },
        {
          sex: "nv",
          value: 200,
        },
      ], //服务列表

      listBack: [],
      p: {
        x: [2],
        b: "100",
      },
      itemInfo: [],
    };
    // const [count, setCount] = useState(0)
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this)
    this.canvas = React.createRef();
  }

  componentDidMount() {
    let tg = new testGlobal();
    console.log("getvalue is " + tg.getValue());

    let map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set("b", 50);
    map1 = map2;
    console.log("fff " + map1.get("b") + " vs. " + map2.get("b")); // 2 vs. 50


    const mCanvas = this.canvas.current
    if (mCanvas.getContext) {
      var ctx = mCanvas.getContext("2d");
      console.log(ctx);
      console.log(Object.getPrototypeOf(ctx));
      var webgl = mCanvas.getContext('webgl')
      console.log(webgl);
      (function () {
        Object.getPrototypeOf(ctx).Triangle = function (x, y, r) {
            this.save();
            this.translate(x, y);
            this.rotate(r);
            this.beginPath();
            this.moveTo(0, 0);
            this.lineTo(10, 0);
            this.lineTo(0, 10);
            this.lineTo(-10, 0);
            this.closePath();
            this.fill();
            this.restore();
        }
        Object.getPrototypeOf(ctx).line = function (x, y, x1, y1) {
            this.save();
            this.beginPath();
            this.moveTo(x, y);
            this.lineTo(x1, y1);
            this.stroke();
            this.restore();
        }
    })();
    // ctx.strokeStyle = "#7C8B8C";
    // ctx.line(90, 130, 320, 210);
    // ctx.Triangle(320, 210, -Math.PI * .4);
  }
    // item1.init({name: 'laoda', vid: true, uid: null})
    // item2.init({name: 'laoer', fAid: true, fVid: undefined})

    // console.log(' item1 ' + JSON.stringify(item1))
    // console.log(' item2 ' + JSON.stringify(item2))

    // const itemInfo = this.state.itemInfo
    // itemInfo.push(item1)
    // itemInfo.push(item2)
    // this.setState({
    //   itemInfo: [].concat(itemInfo),
    // });

    // item1.uid = 20
    // item2.uid = 30
    // console.log('item1 uid  ' + item1.uid)
    // console.log('item2 uid  ' + item2.uid)
    // const tempPeerIds = this.state.studentsPeerIds;
    // tempPeerIds.push({ init: "1" });
    // tempPeerIds.push({ init: "2" });
    // tempPeerIds.push({ init: "3" });
    // this.setState({
    //   studentsPeerIds: [].concat(tempPeerIds),
    // });

    // console.log("foo2foo2foo2foo2foo2foo2foo2foo2");

    // let ol = this.state.p;
    // // ol.p = 1
    // // ol.c = 1000
    // // ol.p.x = 1
    // setInterval(() => {
    //   console.log(" ol and input " + JSON.stringify(this.state.p));
    // }, 1000);

    let o1 = produce(this.state.p, (draft) => {
      draft.b = "101";
    });
    console.log("o1 is " + JSON.stringify(o1));

    let currentState = {
      a: [],
      p: {
        x: 1,
      },
    };

    let nextState = produce(currentState, (draft) => {
      draft.a.push(2);
    });

    console.log(currentState.a === nextState.a); // false
    console.log(currentState.p === nextState.p); // true
    console.log("a " + JSON.stringify(currentState));
    console.log("b " + JSON.stringify(nextState));

    this.aaa();
  }

  aaa = () => {
    // (function animloop(time){
    //   requestAnimationFrame(animloop);
    // })();
  };
  // var testRequestAnimationFrame = function draw(time){
  //   console.log('requestAnimationFrame '+time)
  //   requestAnimationFrame(testRequestAnimationFrame)
  // }

  onClickTest = () => {
    let item1 = new PersonInfo();
    item1.uid = 100;
    let item2 = item1;
    item2.uid = 200;

    const immuObj = fromJS(item1);
    immuObj.uid = 300;

    console.log("map is " + JSON.stringify(immuObj));
    // console.log(' keys is ' + Object.keys(immuObj.get('body')))
    // console.log('uid is ' + immuObj.get('uid'))

    console.log("fff " + item1.uid + " vs. " + item2.uid); // 2 vs. 50

    // const itemInfo = this.state.itemInfo
    // const tempStudent = itemInfo.find(element => element.uid === 20);
    // tempStudent.uid = 25
    // // this.setState({
    // //   ...this.state,
    // //   itemInfo: itemInfo
    // // })
    // // this.setState({
    // //   itemInfo: itemInfo
    // // })

    // this.setState({
    //   itemInfo: [].concat(itemInfo)
    // })

    //     this.state.studentsPeerIds.forEach(element => {
    //   element.init = 'ffff';
    // });
    // this.setState({
    //   studentsPeerIds: [].concat(this.state.studentsPeerIds)
    // })
    // const tempStudent = this.state.list.find(element => element.value == 100);
    // tempStudent.sex = "nan111";
    // this.state.list.push({ sex: "temp", vlaue: 300 });
    // console.log("1111 onClickSex ");
    // this.setState({ listBack: this.state.list });
  };

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  focusTextInput() {
    console.log("Click on title focus ");
    this.textInput.current.focus();
  }

  handleClickOnTitle(e) {
    // console.log('Click on title. ' + JSON.stringify(e.target))
    e.preventDefault()
    console.log("Click on title. " + e.target.innerHTML);
  }

  render() {
    const isGoodWord = false;
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <div>
              <h1 onClick={this.handleClickOnTitle}>React 小书</h1>
              <Card comment={1000003}>
                <h1>
                  React 小书
                  {isGoodWord ? (
                    <strong> is good</strong>
                  ) : (
                    <span> is not good</span>
                  )}
                </h1>
              </Card>
            </div>
            <PassByValue />
            <Toggle />
            <button onClick={this.onClickTest}> 测试用</button>
            {this.state.itemInfo.map((item, key) => (
              <l2>{item.uid}</l2>
            ))}
            {this.state.list.map((item, key) => (
              <div className="Item-label" key={key}>
                {item.sex}
              </div>
            ))}
            <div> userContext  </div>
            <BaseContext/>
            <div> bellow </div>
            {this.state.studentsPeerIds.map((item, key) => (
              <div>{item.init}</div>
            ))}
            <div> bellow </div>
            {this.state.listBack.map((item, key) => (
              <p> {item.sex}</p>
            ))}
            {/* <LayoutEffect/> */}
            <RequestAnimation />
            <MessageThread />
            <UseRef />
            <ColorContext />
            <OtherSnowy />
            <Example></Example>
            <p> you clicked times</p>
            <button>Click me</button>
            ,
            <HookCounter />
            <Counter></Counter>
            <label>reducer below</label>
            <HookReducer />
            {/* <label> HookUseCustomAxios below </label> */}
            <HookUseCustomAxios />
            <label>加入服务：</label>
            <canvas ref={this.canvas} width="780" height="1800">
              您的浏览器不支持canvas，请更换浏览器.
            </canvas>
            <div>
              <input
                ref={this.textInput}
                value={this.state.inputValue}
                onChange={this.inputChange.bind(this)}
                onClick={this.focusTextInput.bind(this)}
              />{" "}
              <button> 增加服务 </button>
            </div>
            <ul> toubuanmo </ul>
            <ul> jingyoutuibei </ul>
            <Content />
            <Button primary />
            <MyComponent className="red-bg">
              <Title>Hello World, this is my first styled component!</Title>
            </MyComponent>
            {/* <Rotate><span>💅</span>></Rotate> */}
            <Rotate>
              <span role="img" aria-label="donut">
                💅
              </span>
            </Rotate>
            <span role="img" aria-label="donut">
              🍩
            </span>
            <Title>Hello World, this is my first styled component!</Title>
            <h1 className="App-link">i am home, this what!!</h1>
            {/* <Link to="/about">go to About</Link> */}
            <StyledLink>Styled, exciting Link</StyledLink>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default Home;
