/**
 * @requires Config
 */
import { 
    localStorageKeys
} from '../config';

/**
 * @requires Utils
 */
import { calculateCartTotal } from './money.util';


/**
 * Stores the cart products to localstorage
 *
 * @export
 * @param {*} [cartProducts=[]]
 */
export function saveCartProductsToLocalStorage(cartProducts = [])
{
    try
    {
        const cartProductsString = JSON.stringify(cartProducts);

        localStorage.setItem(localStorageKeys.cartProducts, cartProductsString);
    }
    catch(err)
    {
        throw err;
    }
}

/**
 * Fetches the cart products from localstorage
 *
 * @export
 * @returns
 */
export function getCartProductsFromLocalStorage()
{
    try
    {
        const cartProductsString = localStorage.getItem(localStorageKeys.cartProducts);

        const cartProducts = JSON.parse(cartProductsString);

        return cartProducts || [];
    }
    catch(err)
    {
        console.warn("Something went wrong with json parsing. Were gonna return an empty array to prevent a crash");
        return [];
    }
}


/**
 * Fetches all cart products stored local storage and recounts the total.
 * Returns an object suitable for storing in the cart slice
 *
 * @export
 * @returns
 */
export function buildCartInitialStateFromLocalStorage()
{
    const cartProducts = getCartProductsFromLocalStorage();

    const cartTotal = calculateCartTotal(cartProducts);

    return {
        products: cartProducts,
        total: cartTotal
    }
}