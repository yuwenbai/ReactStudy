export const TOGGLE = "ui/toggle";

const initialState = {
  toggle: false
};

export default(state = initialState, action) => {
  // console.log('uiReducer', state, action);
  switch (action.type) {
    case TOGGLE: {
      return {
        ...state,
        toggle: !state.toggle
      };
    }

    default: {
      return { ...state };
    }
  }
};

// export const toggleSwitch = () => dispatch => {
//   dispatch({ type: TOGGLE });
// };
