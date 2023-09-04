'use client'

// libraries-------- reduxjs/toolkit, react-redux,
import {createSlice, configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch, useSelector} from "react-redux";

// Step #1---------- create slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        incrementByVal: (state, action) => state + action.payload
    }
})
// Step #2---------- create store
let store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})
// Step #3---------- expose actions
let {
    increment,
    decrement,
    incrementByVal
} = counterSlice.actions
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const incrementAsync = val => async dispatch => {
    await timeout(1000)
    dispatch(incrementByVal(val))
}

// Step #4---------- wrap using Provider passing created store
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
        <h1 style={{margin: "2rem"}}>Hello {count}</h1>
        <button onClick={() => dispatch(incrementAsync(2))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
}
