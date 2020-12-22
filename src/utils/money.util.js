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