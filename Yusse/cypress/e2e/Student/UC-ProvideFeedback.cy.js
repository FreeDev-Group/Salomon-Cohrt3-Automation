
 import 'cypress-mochawesome-reporter/register';
describe('All Surveys Navigation', () => {
  beforeEach(() => {
    // Log in first
      cy.visit('https://student.michaelkentburns.com/');
  cy.contains('User').click();
  cy.contains('Login').click();
  cy.get('#user_login').type('nabintucizarachel@gmail.com');
  cy.get('#user_pass').type('yussecheri123');
  cy.contains('Remember Me').click({ force: true });
  cy.get('#wp-submit').click();
  });

  it('should navigate to the All Surveys page', () => {
    cy.contains('a', 'All Surveys').click();
    cy.url().should('include', '/survey');
    cy.contains('Archives: Surveys').should('be.visible');
    cy.contains('a', 'Wise _Test_With_Playwright Updated').click();
    cy.get('input[name="answer[747]"]').type('Excellent course!');
    cy.get('input[name="answer[747]"]').should('have.value', 'Excellent course!');
    cy.contains('Submit').click();  
    cy.contains('Merci, vos réponses ont bien été enregistrées !').should('be.visible');

  });

});   
    
    
    