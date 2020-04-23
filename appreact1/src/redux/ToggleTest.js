import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { TOGGLE } from "./reducer/uiReducer";

const ToggleTest = ({ toggleSwitch }) => {
  console.log(' ui is ')
  return (
    <div>
      <div>test</div>
      <input
        type="checkbox"
        value={''}
        onChange={() => console.log('11111')}
      />
    </div>
  );
};

export default ToggleTest;