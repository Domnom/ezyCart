/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { 
    EzyCartLogo,
    TitleHeader,
    ProductList,
    CartSidebar
} from '../../components';

/**
 * @requires Styles
 */
import './ProductsPage.scss';

/**
 * The products page will be our main page which will contain the list of products that can be added
 * aswell as the cart that can be viewed by clicking on the 'total' area
 *
 * @export
 * @param {*} props
 * @returns
 */
export function ProductsPage()
{
    return (
        <section className="ProductsPage">
            <TitleHeader 
                logo={<EzyCartLogo/>}
            />
            <div className="productsPageBody">
                <div className="productsListContainer">
                    <ProductList />
                </div>
                <CartSidebar />
            </div>
        </section>
    )
}