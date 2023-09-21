// Step #2---------- create store
import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice";
import {shopSlice} from "./shopSlice";

// kind of creating a store-------------
export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        shop: shopSlice.reducer
    }
})
