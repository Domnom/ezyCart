/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { CartItem } from './CartItem';


/**
 * @exports Storybook
 */
const story = {
    component : CartItem,
    title : "components/CartItem"
}
export default story

const Template = (args) => {
    return (
        <CartItem {...args} />
    )
}


export const Default = Template.bind({});
Default.args = {
    name : "Hacksaw",
    price : 18.45,
    quantity : 10,
    clickRemove : () => {}
}
Default.args.total = Default.args.price * Default.args.quantity;