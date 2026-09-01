import 'cypress-mochawesome-reporter/register';

/// <reference types="cypress" />

describe('UC01 - Manage Surveys', () => {

    beforeEach(() => {

        cy.visit('https://student.michaelkentburns.com/');

        cy.contains('User').click(); 
        cy.contains('Login').click();

        cy.get('#user_login').should('be.visible').type('yucelestin.student@arts.ac.ug');
        cy.get('#user_pass').type('13579013@#Yc');

        cy.get('#rememberme').check({ force: true });

        cy.get('#wp-submit').click();
    });

    it('should allow the instructor to create a new survey', () => {
        cy.contains('.wp-menu-name', 'Surveys').click();
        cy.contains('a', 'Add New Survey').click();
        cy.get('input[name="post_title"]').type('What is your name');
        cy.contains('Publish').click();
        cy.contains('Survey').should('exist');
    });

});