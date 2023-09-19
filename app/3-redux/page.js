'use client'

// libraries-------- reduxjs/toolkit, react-redux,
import {Provider, useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice";
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
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
}
