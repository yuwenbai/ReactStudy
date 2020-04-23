import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Route'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import createSagaMiddleware from 'redux-saga'
// import { helloSaga } from './saga/sagas';
// import SagaCounter from './saga/SagaCounter'
// const sagaMiddleware = createSagaMiddleware()

import rootReducer from './redux/RootReducer'
const middleWare = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composeWithDevTools(middleWare))
// sagaMiddleware.run(helloSaga)

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });

function App() {
  return (
    <Provider store={store}>
    <div className="app">
    {/* <SagaCounter
              value={store.getState()}
              onIncrement={() => store.action("INCREMENT")}
              onDecrement={() => store.action("DECREMENT")}
              onIncrementAsync={() => store.action("INCREMENT_ASYNC")}
            /> */}
      <Routes />
    </div>
    </Provider>
  );
}

export default App;
