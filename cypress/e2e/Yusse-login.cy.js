/// <reference types="Cypress" />

describe('Login', () => {

  it('should allow a user to log in', () => {
  cy.visit('https://student.michaelkentburns.com/');
  cy.contains('User').click();
  cy.contains('Login').click();
   cy.get('#user_login').type('yussecelestin@gmail.com');
  cy.get('#user_pass').type('13579013@#Yc');
  cy.contains('Remember Me').click({ force: true });
  cy.get('#wp-submit').click();

  });

});