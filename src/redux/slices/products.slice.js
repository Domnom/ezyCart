/**
 * @requires Libraries
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * @requires Config
 */
import { productsData } from '../../config';


/**
 * Export a slice which contains both the store AND reducers.
 * 
 * For the products slice, we will simply use this as a store for shared data (this could alternatively be moved 
 * to a context provider but because we have redux, well why not.)
 * 
 * TODO: Populate the products data via API (out of scope)
 */
export const productsSlice = createSlice({
    name : "products",
    initialState : {
        products : [...productsData]
    },
    reducers : {}
})

/**
 * @exports Selectors
 */
export const selectProducts = (state) => {
    return state.products.products;
}

/**
 * @exports Reducer
 */
export const productsReducer = productsSlice.reducer;