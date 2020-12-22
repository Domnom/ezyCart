/**
 * @requires Libraries
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * @requires Utils
 */
import {
    buildCartInitialStateFromLocalStorage,
    calculateCartTotal,
    saveCartProductsToLocalStorage
} from '../../utils';


export const cartSlice = createSlice({
    name : "cart",
    initialState : buildCartInitialStateFromLocalStorage(),
    reducers : {
        addProduct: (state, action) => {

            // -- Check if there is an existing product
            const existingProduct = state.products.find((product) => product.name === action.payload?.name);

            if (existingProduct)
            {
                // -- Update the existing model (Mutation is fine with Redux Toolkit)
                existingProduct.price = action.payload?.price;
                existingProduct.quantity += 1;
                existingProduct.total = existingProduct.quantity * existingProduct.price;
            }
            else
            {
                // -- We will create a new entry!
                state.products.push({
                    name : action.payload?.name,
                    price : action.payload?.price,
                    quantity : 1,
                    total : action.payload?.price
                })
            }

            // -- Calculate the new total
            state.total = calculateCartTotal(state.products);

        },
        removeProduct: (state, action) => {
            
            // -- Seach for the product (we need both the product AND the index so a for loop will do to get what we need)
            if (state.products?.length > 0)
            {
                let cartProduct;
                let cartProductIndex;

                // -- Iterate over all the cart products and find the one we want to remove
                for (let cartProductI = 0; cartProductI < state.products.length; cartProductI++)
                {
                    cartProduct = state.products[cartProductI];

                    if (cartProduct.name === action.payload)
                    {
                        cartProductIndex = cartProductI
                        break;
                    }
                }

                // -- Only continue if the cart product was found
                if (cartProductIndex !== undefined)
                {
                    // -- Check if the product quantity is greater than 1
                    if (cartProduct.quantity > 1)
                    {
                        // -- We will be decrementing the quantity
                        cartProduct.quantity -= 1;
                        
                        // -- Update the cart product total
                        cartProduct.total = cartProduct.quantity * cartProduct.price;
                    }
                    else
                    {
                        // -- We will be removing the product from the cart!
                        state.products.splice(cartProductIndex, 1);
                    }
                }

                // -- Calculate the new total
                state.total = calculateCartTotal(state.products);
            }

        }
    }
})


/**
 * @export Actions
 */
export const { populateCartProducts, addProduct, removeProduct } = cartSlice.actions;





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
 * @exports Thunks
 */
export const addNewProduct = (productName) => {
    return (dispatch, getState) => {
        
        // -- Using the product name as an ID, fetch the product from the products array in the products reducer
        const productData = getState().products?.products?.find((productData) => {
            return productData.name === productName;
        });

        // -- Add to the cart state
        dispatch(addProduct(productData));

        // -- Save to local storage
        saveCartProductsToLocalStorage(getState().cart?.products);
    }
}

export const removeExistingProduct = (productName) => {

    return (dispatch, getState) => {

        // -- Remove the product from the cart state
        dispatch(removeProduct(productName))

        // -- Save to local storage
        saveCartProductsToLocalStorage(getState().cart?.products);
    }

}





/**
 * @export Reducer
 */
export const cartReducer = cartSlice.reducer;