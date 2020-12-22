/**
 * @requires Libraries
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { selectProducts } from '../../redux/slices/products.slice'

/**
 * @requires Config
 */
import { productsData } from '../../config';

/**
 * @requires Stories
 */
import { Default } from './ProductList.stories';


describe("ProductList", () => {
    
    describe("Default", () => {

        it("Should render a product list with products in redux (currently provided by the config)", () => {

            const { getByText } = render(<Default {...Default.args} />);

            // -- Check for a list header
            expect(getByText("Product name")).toBeInTheDocument();
            expect(getByText("Price")).toBeInTheDocument();

            // -- Ensure that all our products are found on the page!
            for (let productI = 0; productI < productsData.length; productI++)
            {
                const product = productsData[productI];

                // -- Search for the product by name (as this must be on the screen)
                expect(getByText(product.name)).toBeInTheDocument();
            }

        })
    
    })

})