import {createSlice, current} from "@reduxjs/toolkit";

// kind of creating a reducer-------------
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        offers: [{item: "pencil"}, {item: "eraser"}]
    },
    reducers: {
        increment: state => {
            console.log(current(state))
            state.value = state.value + 1
        },
        decrement: state => state.value - 1,
        incrementByVal: (state, action) => state.value + action.payload
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
