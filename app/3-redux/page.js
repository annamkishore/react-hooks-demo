'use client'

// libraries-------- reduxjs/toolkit, react-redux,
import {Provider, useDispatch, useSelector} from "react-redux";

import {decrement, increment, incrementAsync, incrementByVal} from "./counterSlice";
import store from "./store";

export default function App() {
    return <>
        <Provider store={store}>
            <Hello/>
        </Provider>
    </>
}

function Hello() {
    let count = useSelector(state => state.counter) // counter name from createSlice(name)
    let dispatch = useDispatch()

    return <>
        <h1 style={{margin: "2rem"}}>Hello {count.value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByVal(3))}>Increment 3</button>
        <button onClick={() => dispatch(incrementAsync(1))}>Increment Async</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
}
