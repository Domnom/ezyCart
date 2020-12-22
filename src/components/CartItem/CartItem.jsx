/**
 * @requires Libraries
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @requires Utils
 */
import { convertNumberToDollarString } from '../../utils';

/**
 * @requires Styles
 */
import "./CartItem.scss";



/**
 * A CartItem will display a name and price along with the quantity and total price.
 * There is also the ability to remove the cart item
 *
 * @export
 * @param {*} props
 * @returns
 */
export function CartItem(props)
{
    // -- Handler to remove an item
    const clickRemoveHandler = (e) => {
        props.clickRemove();
    }

    return (
        <div className="cartItem">
            <div className="cartItemName">
                {props.name}
            </div>
            <div className="cartItemPrice">
                {convertNumberToDollarString(props.price)}
            </div>
            <div className="cartItemQuantity">
                {props.quantity}
            </div>
            <div className="cartItemTotal">
                {convertNumberToDollarString(props.total)}
            </div>
            <div className="cartItemButtons">
                <button onClick={clickRemoveHandler}>
                    Remove
                </button>
            </div>
        </div>
    )
}


CartItem.propTypes = {
    name : PropTypes.string,
    price : PropTypes.number,
    quantity : PropTypes.number,
    total : PropTypes.number,
    clickRemove : PropTypes.func
}