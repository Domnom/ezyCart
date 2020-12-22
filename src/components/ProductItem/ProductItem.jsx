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
import './ProductItem.scss';


/**
 * A product item row that contains a product name and price with the ability to add it
 *
 * @export
 * @param {*} props
 * @returns
 */
export function ProductItem(props)
{
    // -- Handle the click event and pass it to the props.clickAdd callback (the parent can handle this call)
    const clickAddHandler = (e) => {
        props.clickAdd();
    }

    return (
        <div className="productItem">
            <div className="productName">
                {props.name}
            </div>
            <div className="productPrice">
                {convertNumberToDollarString(props.price)}
            </div>
            <div className="productButtons">
                <button onClick={clickAddHandler}>
                    Add
                </button>
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    name : PropTypes.string,
    price : PropTypes.number,
    clickAdd: PropTypes.func
}