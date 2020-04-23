import React, { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count => count - 1)}>minus</button>
    </div>
  );
}

export default HookCounter;
