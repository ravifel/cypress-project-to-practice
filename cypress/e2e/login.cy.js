/// <reference types="cypress"/>

import { faker } from "@faker-js/faker"
import login_page from "../support/pages/login_page"
import commum_page from "../support/pages/commum_page"
import register_user_page from "../support/pages/register_user_page"


const email_valid = faker.internet.email();
const email_invalid = 'email_invalid';
const password_valid = '123456';
const password_invalid = '123';

describe('Login Tests', () => {

    beforeEach('Acess to Login Page', () => {
        commum_page.access_login_page();
    })

    it('Email Field Empty', () => {
        login_page.click_login();
        login_page.validate_error_message('E-mail inválido.');
    })

    it('Email Field Invalid', () => {
        login_page.fill_email_field(email_invalid);
        login_page.click_login();
        login_page.validate_error_message('E-mail inválido.');
    })

    it('Password Field Empty', () => {
        login_page.fill_email_field(email_valid);
        login_page.click_login();
        login_page.validate_error_message('Senha inválida.');
    })

    it('Password Field Invalid', () => {
        login_page.fill_email_field(email_valid);
        login_page.fill_password_field(password_invalid);
        login_page.click_login();
        login_page.validate_error_message('Senha inválida.');
    })

    it('Checkbox Remember me', () => {
        login_page.validate_check_box();
    })

    it('Directing to Users Register Page', () => {
        login_page.validate_link_redirect_to_user_register_page();
        register_user_page.validate_visualize_user_register_page();
    })

    it.only('Login with Success', () => {
        login_page.fill_email_field(email_valid);
        login_page.fill_password_field(password_valid);
        login_page.click_login();
        login_page.validade_success_login(email_valid);
    })
})