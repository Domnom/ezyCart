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
import { Default } from './CartItem.stories';


describe("CartItem", () => {

    describe("Default", () => {

        it("Should render a cart item and have basic functionality", () => {

            // -- Spy on event handlers
            const clickRemoveSpy = jest.spyOn(Default.args, 'clickRemove');

            const { getByText, getByRole } = render(<Default {...Default.args} />);

            // -- Check for viewable text
            //    1. Product name
            //    2. Price
            //    3. Quantity
            //    4. Total
            //    5. Button to remove
            const priceValue = convertNumberToDollarString(Default.args.price);
            const totalValue = convertNumberToDollarString(Default.args.price * Default.args.quantity);

            expect(getByText(Default.args.name)).toBeInTheDocument();
            expect(getByText(priceValue)).toBeInTheDocument();
            expect(getByText(Default.args.quantity)).toBeInTheDocument();
            expect(getByText(totalValue)).toBeInTheDocument();
            
            // -- Check to see if the button exists, click and is handled
            const removeButton = getByRole("button", { name : /remove/i });
            expect(removeButton).toBeInTheDocument();
            userEvent.click(removeButton);
            expect(clickRemoveSpy).toBeCalledTimes(1);
        })

    })

})