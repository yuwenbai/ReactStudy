import React, { useState, useEffect, useLayoutEffect } from "react";
function LayoutEffect() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      const title = document.querySelector("#title");
      const titleWidth = title.getBoundingClientRect().width;
      console.log("useLayoutEffect");
      if (width !== titleWidth) {
        setWidth(titleWidth);
      }
    }, [width]);
    useEffect(() => {
      console.log("useEffect");
    });
    return (
      <div>
        <h1 id="title">hello</h1>
        <h2>{width}</h2>
      </div>
    );
  }
  export default LayoutEffect
  