/** 异步组件使用lazy()函数加载, 传递一个使用import()函数的Promise异步方法, 该方法最终返回import()函数的结果 */
import React, { useEffect } from "react";
const AsyncComponent = () =>{
    return <div> 我是 asyncComponent</div>
}
export default AsyncComponent