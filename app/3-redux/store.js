// Step #2---------- create store
import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice";

// kind of creating a store-------------
export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})
