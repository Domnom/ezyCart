/// <reference types="cypress" />


describe("Products Page", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it("Should be sweet", () => {
        expect(true).to.be.true;
    })

})