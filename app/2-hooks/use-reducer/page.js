"use client"

import {useReducer} from "react";

function reducer(state, action) {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function UseReducerDemo() {
  let [state, dispatch] = useReducer(reducer, 0)

  return <>
    <h1>
      Use Reducer Demo <br />
      <button onClick={()=>dispatch("INCREMENT")}>Add</button>
      Value: {state}
      <button onClick={()=>dispatch("DECREMENT")}>Subtract</button>
    </h1>
  </>
}
