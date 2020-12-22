/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { EzyCartLogo } from './EzyCartLogo';


/**
 * @exports Storybook
 */
const story = {
    component: EzyCartLogo,
    title : "components/EzyCartLogo"
}
export default story;

// -- Create a template that can be cloned for each "story"
const Template = (args) => {
    return (
        <EzyCartLogo {...args}/>
    )
}

export const Default = Template.bind({});
Default.args = {

}