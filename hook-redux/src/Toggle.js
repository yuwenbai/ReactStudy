import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE } from "./UiReducer";

const Toggle = ({ toggleSwitch }) => {
  const ui = useSelector(state => state.ui);
  console.log(" JSON.stringify(ui) " + JSON.stringify(ui));
  const dispatch = useDispatch();
  return (
    <div>
      <div>{JSON.stringify(ui)}</div>
      <input
        type="checkbox"
        value={ui.toggle}
        onChange={() => dispatch({ type: TOGGLE })}
      />
    </div>
  );
};

export default Toggle;
