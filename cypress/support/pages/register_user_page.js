/// <reference types="cypress" />

import { should } from "chai";

export default {
    clickRegister() {
        cy.get('#btnRegister')
            .should('be.visible')
            .click();
    },

    validate_error_message(message) {
        cy.get('#errorMessageFirstName')
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).equal(message)
            })

            // .should('be.visible')
            // .should('have.text', message)
    }
}