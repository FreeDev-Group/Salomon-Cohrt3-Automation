import 'cypress-mochawesome-reporter/register';
/// <reference types="Cypress" />
// login test case
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

  // invalid password
  it('should display an error message for invalid password', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('wrongpassword');
    cy.get('#wp-submit').click();
    cy.get('#login_error > p') // Salomon's correction
    //cy.contains('Invalid username or password.');
  });


  // invalid username
  it('should display an error message for invalid username', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('invaliduser');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.get('#wp-submit').click();
    cy.get('#login_error > p') // Salomon's correction
    //cy.contains('Invalid username or password.');
  });

  // forgot password
  it('should allow a user to reset their password', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.contains('Lost your password?').click();
    cy.get('#user_login').type('yussecelestin@gmail.com');
    cy.get('#wp-submit').click();
    // assert that a reset confirmation message is shown
    cy.contains('Check your email').should('exist');
  });

  //login attempt with empty fields
  it('should display an error message for empty fields', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#wp-submit').click();
    cy.contains('Please enter a username and password.').should('exist');
  });

  //logout test case
  it('should allow a user to log out', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.contains('Remember Me').click({ force: true });
    cy.get('#wp-submit').click();
    cy.contains('Student').click(); // Salomon's correction 
    cy.contains('Logout').click();
  });

});