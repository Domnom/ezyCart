/// <reference types="cypress" />

/**
 * @requires Libraries
 */
import "@testing-library/cypress"


describe("Products Page", () => {

    // -- Load the webpage before each test
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    // -- Clear the local storage after each test (this is usually done automatically but just to be sure...)
    afterEach(() => {
        cy.clearLocalStorage();
    })

    it("Should add multiple items to cart and remove items by decrementing or removing them entirely if the quantity drops to 0. Items left after refresh should still exist", () => {
        // -- First click on the add button twice for the sledgehammer
        cy.findByText("Sledgehammer")
            .siblings('.productButtons')
            .findByRole('button', { name : 'Add' })
            .should('exist')
            .click()
            .click();

        // -- Lets also add an axe
        cy.findByText("Axe")
            .siblings('.productButtons')
            .findByRole('button', { name : 'Add' })
            .should('exist')
            .click();
        
        // -- Open the cart
        cy.findByText("Total $442.00")
            .should('exist')
            .click();

        // -- Check that there are 2 sledge hammers
        cy.findByText('Sledgehammer', { selector: ".cartItemName" })
            .should('exist')
            .siblings('.cartItemQuantity')
            .findByText("2")
            .should('exist');

        // -- And that there is 1 axe
        cy.findByText('Axe', { selector: ".cartItemName" })
            .should('exist')
            .siblings('.cartItemQuantity')
            .findByText("1")
            .should('exist');

        // -- Remove a single sledgehammer
        cy.findByText('Sledgehammer', { selector: ".cartItemName" })
            .siblings('.cartItemButtons')
            .findByRole('button', { name : "Remove" })
            .should('exist')
            .click();

        // -- Check to see if the quantity of sledgehammers decreased from 2 to 1
        cy.findByText('Sledgehammer', { selector: ".cartItemName" })
            .should('exist')
            .siblings('.cartItemQuantity')
            .findByText("1")
            .should('exist');

        // -- Finally remove the last sledgehammer. This entry should no longer exist
        cy.findByText('Sledgehammer', { selector: ".cartItemName" })
            .should('exist')
            .siblings('.cartItemButtons')
            .findByRole('button', { name : "Remove" })
            .should('exist')
            .click();
        
        // -- The sledgehammer should be removed from the cart
        cy.findByText('Sledgehamer', { selector: ".cartItemName" })
            .should('not.exist');

        // -- Refresh the page
        cy.reload();

        // -- Check if the total is still there
        cy.findByText("Total $190.50")
            .should('exist')
            .click();
            
        // -- Check if the axe is still there
        cy.findByText('Axe', { selector: ".cartItemName" })
            .should('exist')
            .siblings('.cartItemQuantity')
            .findByText("1")
            .should('exist');

    })

})