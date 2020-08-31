import React, { useContext } from "react";
const colorContext = React.createContext("gray");
function Bar() {
  const color = useContext(colorContext);
  return <div>{color}</div>;
}
function Foo() {
  return <Bar />;
}
function ColorContext() {
  return (
    <colorContext.Provider value={"green"}>
      <Foo />
    </colorContext.Provider>
  );
}

export default ColorContext;