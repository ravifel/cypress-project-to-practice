/// <reference types="cypress" />

export default {
    access_user_register_page() {
        cy.visit('/')

        cy.get('.fa-lock')
            .click()
    },

    access_login_page() {
        cy.visit('/')

        cy.get('.fa-user')
            .should('be.visible')
            .click()
    }
}