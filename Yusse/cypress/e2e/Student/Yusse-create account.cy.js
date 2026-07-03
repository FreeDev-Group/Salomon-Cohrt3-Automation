/// <reference types="Cypress" />
describe('Account Registration', () => {
  it('should create a new account successfully', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Register').click();
    cy.get('#user_login').type('testuser');
    cy.get('#user_email').type('testuser@example.com');
    cy.get('input[value="Register"]').click();
  });

});
