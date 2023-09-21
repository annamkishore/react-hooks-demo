import {createSlice} from "@reduxjs/toolkit";

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
