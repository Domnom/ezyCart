/**
 * @requires Libraries
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * @requires Config
 */
import { productsData } from '../../config';

/**
 * @requires Stories
 */
import { Default } from './ProductsPage.stories';


describe("ProductsPage", () => {

    describe("Default", () => {
        
        it("Should render the default page", () => {
            const { getByText, queryByText, getByRole } = render(<Default {...Default.args}/>);

            /**
             * Checking for the header
             */
            expect(getByRole('img')).toBeInTheDocument()


            /** 
             * Checking for the Body
             */

            // -- Product list should be a list of products data
            expect(getByText(productsData[0].name)).toBeInTheDocument();
            
            // -- We should not be able to see our cart
            expect(queryByText('You have no items in your cart!')).not.toBeInTheDocument();

            // -- We should be able to see our total
            expect(queryByText('Total $0.00')).toBeInTheDocument();

        })

    })

})