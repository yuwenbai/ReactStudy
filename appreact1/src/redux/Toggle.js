import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE } from "./reducer/uiReducer";

const Toggle = ({ toggleSwitch }) => {
  const ui = useSelector(state => state.uiReducer);
  console.log(' ui is ' + JSON.stringify(ui))
  const dispatch = useDispatch();
  return (
    <div>
      <div>{JSON.stringify(ui)}</div>
      <input
        type="checkbox"
        value={''}
        onChange={() => dispatch({ type: TOGGLE })}
      />
    </div>
  );
};

export default Toggle;