import React, { useState, useRef } from "react";
import {AuthContext} from './../HookReducer'
import ProviderCard from './ProviderCard'

const initialState = {
    songs: [],
    isFetching: false,
    hasError: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SONGS_REQUEST":
        return {
          ...state,
          isFetching: true,
          hasError: false
        };
      case "FETCH_SONGS_SUCCESS":
        return {
          ...state,
          isFetching: false,
          songs: action.payload
        };
      case "FETCH_SONGS_FAILURE":
        return {
          ...state,
          hasError: true,
          isFetching: false
        };
      default:
        return state;
    }
  };

  export const ProviderHome = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const { state: authState } = React.useContext(AuthContext);
    const testRef = useRef(null);
    React.useEffect(() => {
      console.log('testRef is ' + JSON.stringify(testRef))
      testRef && testRef.testApply()
        dispatch({
          type: "FETCH_SONGS_REQUEST"
        });
        fetch("https://hookedbe.herokuapp.com/api/songs", {
          headers: {
            Authorization: `Bearer ${authState.token}`
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw res;
            }
          })
          .then(resJson => {
            console.log(resJson);
            dispatch({
              type: "FETCH_SONGS_SUCCESS",
              payload: resJson
            });
          })
          .catch(error => {
            console.log(error);
            dispatch({
              type: "FETCH_SONGS_FAILURE"
            });
          });
      }, [authState.token]);
    return (
        <div>
            <h1>ProviderHome</h1>
      <React.Fragment>
    <div className="home">
      {state.isFetching ? (
        <span className="loader">LOADING...</span>
      ) : state.hasError ? (
        <span className="error">AN ERROR HAS OCCURED</span>
      ) : (
        <>
          {state.songs.length > 0 &&
            state.songs.map(song => (
              <ProviderCard key={song.id.toString()} song={song} ref={testRef}/>
            ))}
        </>
      )}
    </div>
    </React.Fragment>
        </div>
    )
}
export default ProviderHome