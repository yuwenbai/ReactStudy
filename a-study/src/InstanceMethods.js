import React, { useImperativeHandle, useState, useEffect, createRef, useRef, Component } from "react";
import ReactDOM from "react-dom";

// export default function Home() {
//   return <h2>Home</h2>;
// }

// function Child(){
const ChildEx = React.forwardRef((props, ref) => {
  const inputElement = useRef()
  useImperativeHandle(ref, () => ({
    myFunc : () => {
      return "helloChild";
    }
  }));
  const handleClick = () => {
    console.log("handleClick");
    // React.findDOMNode(this.refs.myTextInput).focus();
    // ReactDOM.findDOMNode(inputElement).focus();
    inputElement.current.focus();
  }
    return (
      <div>
        <div>
          <input type="text" ref={inputElement} />
          <input
            type="button"
            value="Focus the text input"
            onClick={handleClick}
          />
        </div>
      </div>
    );
})

class SecondChild extends React.Component {
  
  render() {
    return <button> </button>;
  }
}
// const ChildEx = React.forwardRef((props, ref) => (
//   // <Child ref={ref}>

//   // </Child>
//   <button ref={ref}>

//   </button>
// ))
// export default class Parent extends React.Component {
  export default function Parent(){
    const parentElement = useRef()
    useEffect(() => {
      // parentElement.current.myFunc()
      console.log(parentElement)
      // console.log(parentElement.current.myFunc())
    })
  // componentDidMount() {
  //   // var x = this.foo.myFunc();
  //   // console.log(x);
  //   const parentElement = useRef()
  // }
  // render() {
    return (
      // <ChildEx ref={parentElement}
      // />
      <SecondChild ref={parentElement}/>
    );
  // }
}
