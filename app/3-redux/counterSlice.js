import {createSlice} from "@reduxjs/toolkit";

// kind of creating a reducer-------------
export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
        incrementByVal: (state, action) => state + action.payload
    }
})

// exporting actions -------------
export let {
    increment,
    decrement,
    incrementByVal
} = counterSlice.actions
export const incrementAsync = val => async dispatch => {
    await timeout(1000)
    dispatch(incrementByVal(val))
}


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
