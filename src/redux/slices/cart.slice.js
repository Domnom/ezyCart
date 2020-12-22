/**
 * @requires Libraries
 */
import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        products : [],
        total : 0
    },
    reducers : {
        
    }
})


/**
 * @export Selectors
 */

// -- Return all the products in the cart
export const selectCartProducts = (state) => {
    return state.cart.products;
}

// -- Return the total price in the cart
export const selectCartTotal = (state) => {
    return state.cart.total;
}



/**
 * @export Reducer
 */
export const cartReducer = cartSlice.reducer;