/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields: {
        email: '#user',
        password: '#password'
    },
    check_box: {
        remember_me: '.form-check-input'
    },
    link: {
        to_user_register_page: '#createAccount'
    },
    messages: {
        error: '.invalid_input',
        success_title: '#swal2-title',
        success_sub_title: '#swal2-html-container'
    }
}

export default {

    fill_email_field(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fill_password_field(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },

    click_login() {
        cy.get(elements.buttons.login)
            .should('be.visible')
            .click()
    },

    validate_error_message(message) {
        cy.get(elements.messages.error)
            .should('be.visible')
            .should('have.text', message)
    },

    validate_check_box() {
        cy.get(elements.check_box.remember_me)
            .should('be.visible')
            .check()
            .should('be.checked');
    },

    validate_link_redirect_to_user_register_page() {
        cy.get(elements.link.to_user_register_page)
            .should('be.visible')
            .click();
    },

    validade_success_login(email) {
        cy.get(elements.messages.success_title)
            .should('be.visible')
            .should('have.text', 'Login realizado');

        cy.get(elements.messages.success_sub_title)
            .should('be.visible')
            .should('have.text', `Olá, ${email}`);
    }
}