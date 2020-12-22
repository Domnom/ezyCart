/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { ProductItem } from './ProductItem';

/**
 * @exports Storybook
 */
const story = {
    components: ProductItem,
    title : "components/ProductItem"
}
export default story;

const Template = (args) => {
    return (
        <ProductItem {...args}/>
    )
}

export const Default = Template.bind({});
Default.args = {
    name : "Sledgehammer",
    price : 125.75,
    clickAdd: () => {}
}