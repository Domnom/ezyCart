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
import { 
    Default 
} from './ProductItem.stories';


describe("ProductItem", () => {

    describe("Default", () => {

        it ("Should render the default product item and have basic functionality", () => {

            // -- Set spies to ensure click is handled
            const clickAddSpy = jest.spyOn(Default.args, 'clickAdd');

            const { getByText, getByRole } = render(<Default {...Default.args}/>)

            // -- Check for the following values
            //    1. name
            //    2. price
            const priceValue = convertNumberToDollarString(Default.args.price);

            expect(getByText(Default.args.name)).toBeInTheDocument()
            expect(getByText(priceValue)).toBeInTheDocument()
            
            // -- Search for the Add button and click it to ensure the prop callback fires
            const addButton = getByRole("button", { name : "Add" });
            expect(addButton).toBeInTheDocument();
            userEvent.click(addButton);
            expect(clickAddSpy).toBeCalledTimes(1);
            
        })

    })

});