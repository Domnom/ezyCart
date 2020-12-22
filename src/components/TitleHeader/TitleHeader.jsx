/**
 * @requires Libraries
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @requires Styles
 */
import "./TitleHeader.scss";


/**
 * A header that contains a single "logo" in the top left corner
 *
 * @export
 * @param {*} props
 * @returns
 */
export function TitleHeader(props)
{
    return (
        <header className="titleHeader">
            {props.logo}
        </header>
    )
}

TitleHeader.propTypes = {
    logo : PropTypes.element
}