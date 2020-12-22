/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { CartList } from './CartList';

/**
 * @exports Storybook
 */
const story = {
    component : CartList,
    title : "/components/CartList"
}
export default story;

const Template = (args) => {
    return (
        <CartList {...args} />
    );
}

export const Default = Template.bind({});
Default.args = {
    
}