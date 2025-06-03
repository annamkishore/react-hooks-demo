import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice";
import {shopSlice} from "./shopSlice";

// kind of creating a store-------------
// Step #2 (configure store)
export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        shop: shopSlice.reducer
    }
})
