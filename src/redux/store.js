/**
 * @requires Libraries
 */
import { configureStore } from '@reduxjs/toolkit';

/**
 * @requires Slices
 */
import { 
    productsReducer,
    cartReducer
} from './slices';

export const store = configureStore({
    reducer: {
        products : productsReducer,
        cart : cartReducer
    }
})