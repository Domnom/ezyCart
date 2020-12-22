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
import { ProductList } from './ProductList';


/**
 * @exports Storybook
 */
const story = {
    component : ProductList,
    title : "components/ProductList"
}
export default story;

// -- The template will be first wrapped in our real redux store to ensure the component works the way 
//    its supposed to
const Template = (args) => {

    return ReduxWrapperHOC(
        <ProductList {...args} />
    )
}


export const Default = Template.bind({});
Default.args = {

}