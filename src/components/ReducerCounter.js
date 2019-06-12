//import the hook useReducer
import React, { useReducer } from "react";
const initialState = { count: 0 };

// 1. create Reducer

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
    //throw new error
  }
}

// 2. function that use the (3) hook reducer and the reducer - here we dispatch ACTIONS
export default function ReduceCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}> + </button>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </div>
  );
}
