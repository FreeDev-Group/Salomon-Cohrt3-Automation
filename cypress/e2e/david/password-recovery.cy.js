describe('Password Recovery Test', () => {

  it('should open the password recovery page', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();

    cy.contains('Login').click();
cy.contains('Lost your password?').click();

    cy.url().should('include', 'lostpassword');
    it('should enter a registered email address', () => {

  cy.get('#user_login').type('test@example.com');
    

});
  });

});