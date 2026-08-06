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

        // Wait until the WordPress dashboard is loaded
        cy.url().should('include', '/wp-admin');
        cy.contains('Dashboard').should('be.visible');
    });

    it('should allow the instructor to create a new survey', () => {

        // Open Surveys menu
        cy.contains('Surveys')
            .should('be.visible')
            .click();

        // Verify Surveys page opens
        cy.url().should('include', 'survey');

        // Click Add New (adjust if your site uses a different label)
        cy.contains('Add New').click();

        // Verify Create Survey page
        cy.contains('Add New Survey').should('be.visible');

        // Survey title
        cy.get('#title').type('Cypress Test Survey');

        // If WordPress Classic Editor is used
        cy.get('iframe#content_ifr')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .type('What is your favourite programming language?');

        // Publish survey
        cy.contains('Publish').click();

        // Confirm survey creation
        cy.contains('Survey').should('exist');
    });

});