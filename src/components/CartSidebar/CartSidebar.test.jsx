/**
 * @requires Libraries
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

/**
 * @requires Utils
 */
import { convertNumberToDollarString } from '../../utils';

/**
 * @requires Stories
 */
import { Default } from './CartSidebar.stories';

describe("CartSidebar", () => {

    describe("Default", () => {

        it("Should render the default cart sidebar which should only show a footer with price of $0.00", () => {

            const { getByText } = render(<Default {...Default.args} />);

            // -- Search for the footer by checking for the total
            const footerTotalCost = getByText('Total $0.00');
            
            expect(footerTotalCost).toBeInTheDocument();

            // -- Clicking the footer (total $) should allow the user to see the empty cart list
            userEvent.click(footerTotalCost);
            expect(getByText('You have no items in your cart!')).toBeInTheDocument();
        })

    })

})