"use client"

import {useReducer} from "react";

const Actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
}

function reducer(state, action) {
  switch (action) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.DECREMENT:
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
      <button onClick={()=>dispatch(Actions.INCREMENT)}>Add</button>
      Value: {state}
      <button onClick={()=>dispatch(Actions.DECREMENT)}>Subtract</button>
    </h1>
  </>
}
