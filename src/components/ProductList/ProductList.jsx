/**
 * @requires Libraries
 */
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/**
 * @requires Redux
 */
import { 
    selectProducts,
    addNewProduct
} from '../../redux'

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
    // -- Fetch all the products in redux
    const products = useSelector(selectProducts);

    // -- Create a dispatch object for dispatching actions
    const dispatch = useDispatch();

    // -- Memoize the array of product items. We only want to re-render this if the product data changes
    const productItems = useMemo(() => {
        
        // -- For each of the products, create a new Product Item that the user can click to add to their cart
        return products.map((product) => {

            const clickAdd = () => {
                dispatch(addNewProduct(product.name));
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