import React, { useRef, useEffect } from "react";
function PassByValue() {

  var obj = {
      value: 1
  }

  function foo(o){
    o = 2
    console.log(o); //2
  }

  const refff = useRef(null);
  const testBtn = () => {
    console.log("testBtn...");
    console.log('testRef is ' + JSON.stringify(refff))
  }

  useEffect(() => {
    
    // refff && refff.testApply()

    foo(obj)
    console.log(obj.value); //2
    
    console.log("useEffect...");
    return () => {
      console.log("componentWillUnmount...");
    };
  });

  return (
    <div>
      <button onClick={testBtn}>Click me</button>
    </div>
  );
}

export default PassByValue;
