import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Route'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './redux/RootReducer'
import {addToCart} from './redux/reducer/cardReducer'

const middleWare = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composeWithDevTools(middleWare))
console.log(' console.log("initial state: ", store.getState()); is ' , store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

unsubscribe();
function App() {
  return (
    <Provider store={store}>
    <div className="app">
      <Routes />
    </div>
    </Provider>
  );
}

export default App;
