import 'cypress-mochawesome-reporter/register';

/// <reference types="Cypress" />

describe('Account Registration', () => {
  it('should create a new account successfully', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Register').click();
    cy.get('#user_login').type('Rachel');
    cy.get('#user_email').type('nabintucizarachel@gmail.com');
    cy.get('input[value="Register"]').click();
    cy.get('.message').should('contain', 'Registration complete. Please check your email.');

      it('should display validation errors when submitting an username and email already existed', () => {

  // Submit the form without existing username and email
  cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Register').click();
    cy.get('#user_login').type('Rachel');
    cy.get('#user_email').type('nabintucizarachel@gmail.com');
    cy.get('input[value="Register"]').click();
    cy.get('#login_error')
    .should('This username is already registered. Please choose another one.').and('This email address is already registered. Log in with this address or choose another one.');

})
  });

});
