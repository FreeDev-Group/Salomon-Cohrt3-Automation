import 'cypress-mochawesome-reporter/register';
/// <reference types="Cypress" />
describe('Password Recovery', () => {

  it('PR02 - should allow a registered user to request a password reset', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.contains('Lost your password?').click();
    cy.get('#user_login').type('yussecelestin@gmail.com');
    cy.get('#wp-submit').click();
    cy.contains('Check your email for the confirmation link, then visit the login page.').should('exist');


    // Salomon's corrections
    // ... après avoir cliqué sur submit
cy.task('getResetToken', 'yussecelestin@gmail.com').then((token) => {
  cy.visit(`https://student.michaelkentburns.com/reset-password?token=${token}`);
  // Continuer le test pour définir le nouveau mot de passe
  cy.get('#pass1').type('NouveauMotDePasse123');
  cy.get('#wp-submit').click();
});
    cy.contains('Check your email for the confirmation link, then visit the login page.').should('be.visible');
  });

});