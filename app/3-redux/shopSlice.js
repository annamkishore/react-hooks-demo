import {createSlice} from "@reduxjs/toolkit";

// Step #1 (create slice)
export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        taxPercent: 5,
        items: [
            {name: 'apple', value: 20},
            {name: 'orange', value: 10}
        ]
    },
    reducers: {
    }
})
