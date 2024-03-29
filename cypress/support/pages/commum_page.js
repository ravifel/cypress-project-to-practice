/// <reference types="cypress" />

export default {
    access_user_register_page() {
        // cy.visit('')
        //     .get('#top_header')

        cy.visit('/')

        cy.get('.fa-lock')
            .click()
    }
}