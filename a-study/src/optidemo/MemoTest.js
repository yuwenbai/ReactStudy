// index.js
import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Child from './Child'

function MemoTest() {
  const [title, setTitle] = useState("这是一个 title")
  const [subtitle, setSubtitle] = useState("我是一个副标题");
  const callback = () => {
    setTitle("标题改变了");
  };
  const memoizedCallback = useCallback(callback, [])
  return (
    <div className="App">ß
      <h1>{ title }</h1>
      <h2>{subtitle}</h2>
      <button onClick={() => setSubtitle("副标题改变了")}>改副标题</button>
      <Child onClick={memoizedCallback} name="桃桃"></Child>
    </div>
  );
}
export default MemoTest