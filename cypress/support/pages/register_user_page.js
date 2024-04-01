/// <reference types="cypress" />

const elements = {
    labels: {
        title_form: '.account_form'
    },
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        user_name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '#errorMessageFirstName',
        register_success_title: '#swal2-title',
        register_success_sub_title: '#swal2-html-container'
    }
}


export default {
    clickRegister() {
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click();
    },

    validate_error_message(message) {
        cy.get(elements.messages.error)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).equal(message)
            })

        // .should('be.visible')
        // .should('have.text', message)
    },

    fill_username_field(username) {
        cy.get(elements.fields.user_name)
            .should('be.visible')
            .type(username)
    },

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

    validate_success_user_register(name) {
        cy.get(elements.messages.register_success_title)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!');

        cy.get(elements.messages.register_success_sub_title)
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`);

        cy.get(elements.messages.register_success_sub_title)
            .should('be.visible')
            .contains(name)
    },

    validate_visualize_user_register_page() {
        cy.get(elements.labels.title_form)
            .should('be.visible')
            .contains('Cadastro de usuário');
    }
}