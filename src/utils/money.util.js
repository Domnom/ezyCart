/**
 * Use toLocaleString to convert a number to 2 d.p currency string
 *
 * @export
 * @param {*} numberToConvert
 * @returns
 */
export function convertNumberToDollarString(numberToConvert)
{
    return numberToConvert.toLocaleString('en-US', {
        style : "currency",
        currency : "USD"
    });
}


/**
 * Add the totals of all cart products to get the cart total
 *
 * @export
 * @param {*} cartProducts
 * @returns
 */
export function calculateCartTotal(cartProducts)
{
    if (Array.isArray(cartProducts) && cartProducts.length > 0)
    {
        return cartProducts.reduce((acc, cartProduct) => {
            return acc += cartProduct.total;
        }, 0)
    }
    else
    {
        return 0;
    }
}