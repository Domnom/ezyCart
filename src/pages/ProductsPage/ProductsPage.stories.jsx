/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Utils
 */
import { ReduxWrapperHOC } from '../../utils';

/**
 * @requires Components
 */
import { ProductsPage } from './ProductsPage';

/**
 * @exports Storybook
 */
const story = {
    component: ProductsPage,
    title : "pages/ProductsPage"
}
export default story;

const Template = (args) => {
    return ReduxWrapperHOC(
        <ProductsPage {...args}/>
    )
}


export const Default = Template.bind({});
Default.args = {
    
}