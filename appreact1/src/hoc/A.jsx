import React, { Component } from "react";
// 引入高阶函数
import HOCprogress from "./HOCprogress";

class A extends Component {
  render() {
    return <div>这是 A 组件！</div>;
  }
}
// 使用高阶组件包裹 A 组件
export default HOCprogress(A, 56);