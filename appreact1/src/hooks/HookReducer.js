import React, {useReducer} from 'react'
import ProviderHome from './examples/ProviderHome'
import ProviderLogin from './examples/ProviderLogin'
export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", JSON.stringify(action.payload.token));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null
        };
      default:
        return state;
    }
  };

  // function reducer (state, action) {
  //   switch (action.type) {
  //     case "LOGIN":
  //       localStorage.setItem("user", JSON.stringify(action.payload.user));
  //       localStorage.setItem("token", JSON.stringify(action.payload.token));
  //       return {
  //         ...state,
  //         isAuthenticated: true,
  //         user: action.payload.user,
  //         token: action.payload.token
  //       };
  //     case "LOGOUT":
  //       localStorage.clear();
  //       return {
  //         ...state,
  //         isAuthenticated: false,
  //         user: null
  //       };
  //     default:
  //       return state;
  //   }
  // };

function HookReducer() {
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
>
    <div>
        {
            !state.isAuthenticated ? <ProviderLogin/> : <ProviderHome/>
        }
        <button onClick={() => dispatch({type: "increment"})}>+</button>
        <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </div>
</AuthContext.Provider>
    )
}
export default HookReducer
