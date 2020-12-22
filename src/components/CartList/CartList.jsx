/**
 * @requires Libraries
 */
import React, { useMemo } from 'react';

/**
 * @requires Styles
 */
import "./CartList.scss";


/**
 * Presents to the user a list of all the items they've added to the cart
 *
 * @export
 * @param {*} props
 * @returns
 */
export function CartList(props)
{
    // -- Memoize the array of cart items
    const cartItems = useMemo(() => {
        
       return null;

    }, [])

    return (
        <div className="cartList">
            <div className="cartListHeader">
                <div className="cartListNameTitle">
                    Name
                </div>
                <div className="cartListPriceTitle">
                    Price
                </div>
                <div className="cartListQuantityTitle">
                    Quantity
                </div>
                <div className="cartListTotalTitle">
                    Total
                </div>
                <div className="cartListActionsTitle" />
            </div>
            <div className="cartListBody">
                {
                    cartItems || <div className="cartListEmpty">You have no items in your cart!</div>
                }
            </div>
        </div>
    )
}