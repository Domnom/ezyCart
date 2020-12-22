/**
 * @requires Libraries
 */
import React, {useState, useMemo} from 'react';
import { useSelector } from 'react-redux';

/**
 * @requires Redux
 */
import { selectCartTotal } from '../../redux/slices';

/**
 * @requires Utils
 */
import { convertNumberToDollarString } from '../../utils';

/**
 * @requires Components
 */
import { CartList } from '../CartList';

/**
 * @requires Styles
 */
import './CartSidebar.scss';

/**
 * The cart sidebar contains:
 * 
 * A body that stores a cart list. This should be toggled to show/hide if the footer is clicked
 * A footer that stores the cart list total. Clicking this toggles the show/hide state of the body
 *
 * @export
 * @param {*} args
 * @returns
 */
export function CartSidebar(args)
{
    // -- Fetch the cart total via redux
    const cartTotal = useSelector(selectCartTotal);

    // -- A stateful flag to set the body to open/closed
    const [bodyIsOpen, setBodyIsOpen] = useState(false);


    // -- Click event handler to open the body of the sidebar
    const clickToggleBody = (e) => {
        // -- Prevent double handling when we open the sidebar (as the parent contains a click handler to close this)
        e.stopPropagation();

        // -- Toggle the body isOpen flag
        setBodyIsOpen((oldBodyIsOpen) => {
            return !oldBodyIsOpen;
        })
    }


    // -- Show/hide the cartSidebarBody only if it is open/closed. This prevents 
    //    unneccessary rendering
    const renderBody = useMemo(() => {

        // -- If the body is open then we want to render the body
        if (bodyIsOpen)
        {
            // -- Render the main body and 
            return (
                <div 
                    className="cartSidebarBody" 
                    onClick={(e) => { e.stopPropagation(); }}
                >
                    <CartList />
                </div>
            )
        }
        else
        {
            // -- Because it is closed, prevents any rendering to improve performance
            return null;
        }
    }, [bodyIsOpen]);

    
    // -- Helper function to generate a string with our required class names
    const generateMainClassName = () => {
        const className = ["cartSidebar"]
        
        if (bodyIsOpen)
        {
            className.push("bodyIsOpen");
        }
        return className.join(" ");
    }

    // -- Helper function to pretty print the total
    const renderTotal = () => {
        return `Total ${convertNumberToDollarString(cartTotal)}`;
    }

    return (
        <div 
            className={generateMainClassName()} 
            onClick={clickToggleBody}
        >
            {renderBody}
            <div 
                className="cartSidebarFooter"
                onClick={clickToggleBody}
            >
                {renderTotal()}
            </div>
        </div>
    )
}