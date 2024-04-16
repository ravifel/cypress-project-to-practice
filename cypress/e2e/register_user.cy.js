/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

import commum_page from "../support/pages/commum_page";
import register_user_page from "../support/pages/register_user_page";


const name = faker.person.fullName();
const email_valid = faker.internet.email();
const email_invalid = 'teste123';
const passaword_valid = '123456';
const passaword_invalid = '123';

describe('User Register Tests', () => {

    beforeEach('Access to User Register Page', () => {
        commum_page.access_user_register_page();
    })


    it('User name Fields Empty', () => {
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo nome deve ser prenchido');
    })

    it('Email Fields Empty', () => {
        register_user_page.fill_username_field(name);
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo e-mail deve ser prenchido corretamente');
    })

    it('Email Fields Invalid', () => {
        register_user_page.fill_username_field(name);
        register_user_page.fill_email_field(email_invalid);
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo e-mail deve ser prenchido corretamente');
    })

    it('Password Fields Empty', () => {
        register_user_page.fill_username_field(name);
        register_user_page.fill_email_field(email_valid);
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo senha deve ter pelo menos 6 dígitos');
    })

    it('Password Fields Invalid', () => {
        register_user_page.fill_username_field(name);
        register_user_page.fill_email_field(email_valid);
        register_user_page.fill_password_field(passaword_invalid);
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo senha deve ter pelo menos 6 dígitos');
    })

    it('User Register with Success', () => {
        register_user_page.fill_username_field(name);
        register_user_page.fill_email_field(email_valid);
        register_user_page.fill_password_field(passaword_valid);
        register_user_page.clickRegister();
        register_user_page.validate_success_user_register(name);
    })
})