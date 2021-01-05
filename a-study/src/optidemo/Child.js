// child.js
import React from "react";

function Child(props) {
  console.log(props.name)
  return (
      <>
      <button onClick={props.onClick}>改标题</button>
      <h1>{props.name}</h1>
      </>
  )
}

export default React.memo(Child)