describe('All Surveys Navigation', () => {
  beforeEach(() => {
    // Log in first
     cy.visit('https://student.michaelkentburns.com/');
  cy.contains('User').click();
  cy.contains('Login').click();
   cy.get('#user_login').type('yussecelestin@gmail.com');
  cy.get('#user_pass').type('13579013@#Yc');
  cy.contains('Remember Me').click({ force: true });
  cy.get('#wp-submit').click();
  });

  it('should navigate to the All Surveys page', () => {
    cy.contains('a', 'All Surveys').click();
    cy.url().should('include', '/survey');
    cy.contains('All Surveys').should('be.visible');
  });

});