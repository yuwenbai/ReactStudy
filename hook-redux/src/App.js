import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import Toggle from "./Toggle";
import './App.css';


export default function App() {
  return (
    <Provider store={Store}>
      <Toggle />
    </Provider>
  );
}
