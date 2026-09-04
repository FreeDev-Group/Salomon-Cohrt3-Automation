
  /*  describe('UC04 - Provide Feedback', () => {

  it('Open surveys page', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();
    cy.contains('Login').click();

    cy.get('#user_login').type('mumemekaleba@gmail.com');
    cy.get('#user_pass').type('Mk8524@#$?!');

    cy.get('#wp-submit').click();
    cy.contains('All Surveys').click();
  cy.contains('Provide feedback Front end question-david') .click();
  cy.get('input[name="answer[2622][]"][value="Advanced"]')
  .check({ force: true }); 
  cy.get('input[name="answer[2624][]"][value="JavaScript"]')
  .check({ force: true });  
 cy.get('input[name="answer[2625]"][value="true"]')
  .check({ force: true })
  .should('be.checked');
  cy.get('#submit-btn').click();
  cy.contains('Home') .click()
    });
  });*/

  describe('UC04 - Provide Feedback', () => {

  it('Open surveys page', () => {

    cy.visit('https://student.michaelkentburns.com/');

    cy.contains('User').click();
    cy.contains('Login').click();

    cy.get('#user_login').type('mumemekaleba@gmail.com');
    cy.get('#user_pass').type('Mk8524@#$?!');

    cy.get('#wp-submit').click();
    cy.contains('All Surveys').click();
  cy.contains('Provide feedback Front end question-david') .click();
  cy.get('input[name="answer[2622][]"][value="Advanced"]')
  .check({ force: true }); 
  cy.get('input[name="answer[2624][]"][value="JavaScript"]')
  .check({ force: true });  
 cy.get('input[name="answer[2625]"][value="true"]')
  .check({ force: true })
  .should('be.checked');
  cy.get('#submit-btn').click();
    });
  });
  

