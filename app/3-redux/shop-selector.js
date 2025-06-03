import {createSelector} from "@reduxjs/toolkit";

const selectShopItems = state => state.shop.items
const selectTaxPercent = state => state.shop.taxPercent

// Step #3 (create selector)
export const selectSubtotal = createSelector(
    selectShopItems,
    items => items.reduce((subtotal, item) => subtotal + item.value, 0)
)

const selectTax = createSelector(
    [selectSubtotal, selectTaxPercent],
    (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

export const selectTotal = createSelector(
    [selectSubtotal, selectTax],
    (subtotal, tax) => (subtotal + tax)
)
