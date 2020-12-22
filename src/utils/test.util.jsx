/**
 * @requires Libraries
 */
import React from 'react';
import { Provider } from 'react-redux';

/**
 * @requires Redux
 */
import { store } from '../redux';


/**
 * Wraps a child up in the redux provider with real redux. Use this 
 * in storybook so our tests can run
 *
 * @export
 * @param {*} child
 * @returns
 */
export function ReduxWrapperHOC(child)
{
    return (
        <Provider store={store}>
            {child}
        </Provider>
    )
}