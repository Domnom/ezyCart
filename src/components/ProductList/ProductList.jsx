/**
 * @requires Libraries
 */
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

/**
 * @requires Redux
 */
import { selectProducts } from '../../redux'

/** 
 * @requires Components 
 */
import { ProductItem } from '../ProductItem';

/**
 * @requires Styles
 */
import "./ProductList.scss";


/**
 * Lists a bunch of products in the form of product items. Connects with redux
 * to add products to a cart
 *
 * @export
 * @param {*} props
 * @returns
 */
export function ProductList()
{
    const products = useSelector(selectProducts);

    // -- Memoize the array of product items. We only want to re-render this if the product data changes
    const productItems = useMemo(() => {
        
        // -- For each of the products, create a new Product Item that the user can click to add to their cart
        return products.map((product) => {

            const clickAdd = () => {
                // -- TODO: Dispatch an 'addProduct' action
            }
            
            return (
                <ProductItem
                    key={product.name}
                    name={product.name}
                    price={product.price}
                    clickAdd={clickAdd}
                />
            )

        })

    }, [products]);

    return (
        <div className="productList">
            <div className="productListHeader">
                <div className="productNameTitle">
                    Product name
                </div>
                <div className="productPriceTitle">
                    Price
                </div>
                <div className="productActionsTitle" />
            </div>
            <div className="productListBody">
                {productItems}
            </div>
        </div>
    )
}