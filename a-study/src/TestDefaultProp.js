import React, { useImperativeHandle, useState, useEffect, createRef, useRef, Component } from "react";
import ReactDOM from "react-dom";
{/* <TestDefaultProp name={null}/>
<TestDefaultProp name={undefined}/> */}
//关注属性值的不同  null是 是认为确实是空的 那么不进行渲染 但是当时undefined的时候会去取默认值 也就是 显示 default
class TestDefaultProp extends React.Component {
  
    render() {
      return <div>{this.props.name}</div>
    }
  }
TestDefaultProp.defaultProps = { name: 'default' };
export default TestDefaultProp