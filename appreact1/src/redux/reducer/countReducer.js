const initialState = {
    reducercount: 0
  };
  function countReducer(state = initialState, action) {
    console.log('countReducer', state, action);
    switch(action.type) {
      case 'INCREMENT':
        return {
          reducercount: state.reducercount + 1
        };
      case 'DECREMENT':
        return {
          reducercount: state.reducercount - 1
        };
      case 'RESET':
        return {
          reducercount: 0
        };
      default:
        return state;
    }
  }
  export default countReducer