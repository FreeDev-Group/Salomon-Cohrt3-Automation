describe('Feedback History', () => {

  beforeEach(() => {

    // Login
     cy.visit('https://student.michaelkentburns.com/');
  cy.contains('User').click();
  cy.contains('Login').click();
   cy.get('#user_login').type('yussecelestin@gmail.com');
  cy.get('#user_pass').type('13579013@#Yc');
  cy.contains('Remember Me').click({ force: true });
  cy.get('#wp-submit').click();

  });


    it('should view completed surveys and export CSV', () => {

    // Step 1: Open My Completed Surveys
    cy.contains('My Completed Surveys').click();

    // Step 2: Verify the page loads
    cy.url().should('include', '/my-completed-surveys');
    cy.get('.survey-link').contains('Backend questions 1').click();
    cy.contains('a.survey-link', 'frontend questions 1').click();
    cy.contains('a.survey-link', 'Your developpement').click();
    cy.contains('a.survey-link', 'Your self').click();
    cy.contains('a.survey-link', 'Read the home section at MKB Web site.').click();
    cy.contains('a.survey-link', 'Salomon test Instructor').click();
    
  });

});