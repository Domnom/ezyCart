/**
 * @requires Libraries
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * @requires Stories
 */
import { Default } from './EzyCartLogo.stories';


describe("EzyCartLogo", () => {

    describe("default", () => {
        
        it ("Should render with an img", () => {

            const { getByRole } = render(<Default />)

            expect(getByRole('img')).toBeInTheDocument();

        })

    })

})