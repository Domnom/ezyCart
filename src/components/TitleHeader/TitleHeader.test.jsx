/**
 * @requires Libraries
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * @requires Stories
 */
import { Default } from './TitleHeader.stories';


describe("TitleHeader", () => {

    describe("Default", () => {

        it ("Should render with the correct UI", () => {

            const { getByRole } = render(<Default {...Default.args}/>);

            expect(getByRole('img')).toBeInTheDocument();

        })
        
    })

})