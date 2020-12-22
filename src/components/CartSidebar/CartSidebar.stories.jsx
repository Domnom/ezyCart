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
import { CartSidebar } from './CartSidebar';

/**
 * @export Storybook
 */
const story = {
    component : CartSidebar,
    title : "components/CartSidebar"
}
export default story;

const Template = (args) => {
    return ReduxWrapperHOC(
        <CartSidebar {...args} />
    )
}


export const Default = Template.bind({});
Default.args = {
    
}