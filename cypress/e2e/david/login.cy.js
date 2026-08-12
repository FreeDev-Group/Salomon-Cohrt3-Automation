describe('Login Test', () => {

  it('Open the application', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('mumemekaleba@gmail.com');
    cy.get('#user_pass').type('Mk8524@#$?!');
    cy.get('#wp-submit').click();
    cy.url().should('not.include', 'login');
  });

});