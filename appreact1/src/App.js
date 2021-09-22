import React, { useEffect } from "react";
import { useState } from "react";
import { Component, lazy, Suspense } from 'react';
// import logo from './logo.svg';
import "./App.css";
import Routes from "./Route";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/RootReducer";
import { addToCart } from "./redux/reducer/cardReducer";
import A from "./hoc/A";
import B from "./hoc/B";

import MemoExample from "./memo";

const middleWare = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleWare));
console.log(
  ' console.log("initial state: ", store.getState()); is ',
  store.getState()
);
let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToCart("Coffee 500gm", 1, 250));
store.dispatch(addToCart("Flour 1kg", 2, 110));
store.dispatch(addToCart("Juice 2L", 1, 250));

unsubscribe();
// function App() {
//   return (
//     <Provider store={store}>
//     <div className="app">
//       <Routes />
//     </div>
//     </Provider>
//   );
// }

// export default App;

// const MemTree = React.memo(ExpensiveTree)

// export default function App() {
//   return (
//     <ColorPicker>
//       <p>Hello, world!</p>
//       <ExpensiveTree />
//     </ColorPicker>
//   );
// }

function ColorPicker({ children }) {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}

function Form() {
  let [color, setColor] = useState("red");
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p>
    </>
  );
}

function ExpensiveTree() {
  useEffect(() => {
    console.log("ExpensiveTree  useEffect");
  });
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.</p>;
}

/** 异步组件使用lazy()函数加载, 传递一个使用import()函数的Promise异步方法, 该方法最终返回import()函数的结果 */
const AsyncComponent = React.lazy(() => {
    return new Promise((resolve, reject) => {
        import('./AsyncComponent').then(AsyncComponent => {
            console.log('加载完毕, 延迟传送');
            setTimeout(() => {
                console.log('传送');
                resolve(AsyncComponent);
            }, 5000);
        });
    });
});

function TestAsync(){
  return <div>
        <Suspense fallback={<h1>加载中</h1>}>
            <AsyncComponent></AsyncComponent>
        </Suspense>
    </div>
}

export default function App() {
  const [count, setCount] = useState(0)
  const [lll, setLLL] = useState(false)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
      console.log(`[] count is ${count}`);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log(`[change] count is ${count}`);
  }, [count]);

  const loadDyamic = () => {
    setLLL(true)
  }

  return (
    <div>
      <p onClick={loadDyamic}>Hello, world! </p>
      {/* <MemoExample/> */}
      {lll? <TestAsync/> : null}
    </div>
  );
}
