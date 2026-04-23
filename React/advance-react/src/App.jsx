import React, { useReducer } from "react";

const App = () => {
  // VERSION - 01
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return state + 1;
  //     case "DECREMENT":
  //       return state - 1;
  //   }
  // };
  // const [current_state, dispatch] = useReducer(reducer, 0);

  // VERSION - 02
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      case "CHANGENAME":
        return {
          ...state,
          name: action.payload,
        };
    }
  };
  const [current_state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "Nicky",
  });

  // console.log(current_state);

  return (
    <div>
      <h1>{current_state.count}</h1>
      <h1>{current_state.name}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          dispatch({ type: "CHANGENAME", payload: "Chota Bheem" });
        }}
      >
        CHANGE NAME
      </button>
    </div>
  );
};

export default App;
