/**
 * @requires Libraries
 */
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * @requires Redux
 */
import { 
    selectCartProducts,
    removeExistingProduct
} from '../../redux/slices';

/**
 * @requires Components
 */
import { CartItem } from '../CartItem';

/**
 * @requires Styles
 */
import "./CartList.scss";


/**
 * Presents to the user a list of all the items they've added to the cart
 *
 * @export
 * @returns
 */
export function CartList()
{
    // -- Fetch all the cart products
    const cartProducts = useSelector(selectCartProducts);

    // -- Create a dispatch object
    const dispatch = useDispatch();

    // -- Memoize the array of cart items
    const cartItems = useMemo(() => {
        
       // -- If there are no cart products then lets render nothing
        if (cartProducts.length === 0)
        {
            return null;
        }

        // -- Iterate over all the cart products and return an array of CartItems
        return cartProducts.map((cartProduct) => {

            const clickRemove = () => {
                dispatch(removeExistingProduct(cartProduct.name));
            }

            return (
                <CartItem 
                    key={cartProduct.name}
                    name={cartProduct.name}
                    price={cartProduct.price}
                    quantity={cartProduct.quantity}
                    total={cartProduct.total}
                    clickRemove={clickRemove}
                />
            )

        })

    }, [cartProducts])

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