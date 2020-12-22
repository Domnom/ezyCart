/**
 * @requires Libraries
 */
import React from 'react';

/**
 * @requires Components
 */
import { TitleHeader } from './TitleHeader';
import { EzyCartLogo } from '../EzyCartLogo';


/**
 * @exports Storybook
 */
const story = {
    component: TitleHeader,
    title: "components/TitleHeader"
}
export default story;

const Template = (args) =>
{
    return (
        <TitleHeader {...args}/>
    )
}



export const Default = Template.bind({})
Default.args = {
    logo : <EzyCartLogo />
}