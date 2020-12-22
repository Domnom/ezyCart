/**
 * @requires Libraries
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

/**
 * @requires Stories
 */
import { Default } from './CartList.stories';

describe("CartList", () => {

    describe("Default", () => {

        it("Should create a default cart list with a header and a body that mentions it's empty", () => {

            const { getByText, queryByRole } = render(<Default {...Default.args} />);

            // -- Search for the header labels
            //    1. Name
            //    2. Price
            //    3. Quantity
            //    4. Total
            expect(getByText("Name")).toBeInTheDocument();
            expect(getByText("Price")).toBeInTheDocument();
            expect(getByText("Quantity")).toBeInTheDocument();
            expect(getByText("Total")).toBeInTheDocument();

            // -- There should be a message that says you have no items in your cart
            const noItemsInCartMessage = "You have no items in your cart!";
            expect(getByText(noItemsInCartMessage)).toBeInTheDocument();

            // -- There should be no cart items so there should be no remove buttons on the screen
            expect(queryByRole("button", { name : /remove/i})).not.toBeInTheDocument();
        })

    })

})