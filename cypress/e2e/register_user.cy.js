/// <reference types="cypress" />

import commum_page from "../support/pages/commum_page";
import register_user_page from "../support/pages/register_user_page";

describe('User Register Tests', () => {

    beforeEach('Access to User Register Screen', () => {
        commum_page.access_user_register_page();
    })


    it('User name Fields Empty', () => {
        register_user_page.clickRegister();
        register_user_page.validate_error_message('O campo nome deve ser prenchido');
    })

    it('Email Fields Empty', () => {

    })

    it('Email Fields Invalid', () => {

    })

    it('Password Fields Empty', () => {

    })

    it('Password Fields Invalid', () => {

    })

    it('User Register with Success', () => {

    })
})