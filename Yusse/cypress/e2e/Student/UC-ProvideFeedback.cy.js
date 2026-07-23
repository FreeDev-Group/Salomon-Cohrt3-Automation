import 'cypress-mochawesome-reporter/register';
/// <reference types="Cypress" />

// 1. student logs in 
describe('Provide Feedback', () => {
    it('MF01 - should allow a user to provide feedback', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('katwanyishanis@gmail.com');
    cy.get('#user_pass').type('ktshanis@1');
    cy.get('#wp-submit').click();
    });

    // 2. Dashboard opens

    it.skip('MF02 - should open the dashboard after login', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('katwanyishanis@gmail.com');
    cy.get('#user_pass').type('ktshanis@1');
    cy.get('#wp-submit').click();
    });

    // 3. Student sees available surveys
    it('MF03 - Student sees available surveys', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login')
    .type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.get('#wp-submit').click();
    cy.get('a[href="/survey/"]').click();
    cy.contains('a', 'Wise _Test_With_Playwright Updated').should('be.visible').click();
    });
// 4. Student answer question 
it('MF04 - Student answers text question', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login')
    .type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.get('#wp-submit').click();
    cy.get('a[href="/survey/"]').click();
    cy.contains('a', 'Wise _Test_With_Playwright Updated').click();
    cy.get('input[name="answer[747]"]').type('Excellent course!');
    cy.get('input[name="answer[747]"]').should('have.value', 'Excellent course!');
});
// 5. Student submits feedback
it('MF05 - Student submits feedback', () => {
    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login')
    .type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.get('#wp-submit').click();
    cy.get('a[href="/survey/"]').click();
    cy.contains('a', 'Wise _Test_With_Playwright Updated').click();
    cy.get('input[name="answer[747]"]').type('Excellent course!');
    cy.get('input[name="answer[747]"]').should('have.value', 'Excellent course!');
    cy.contains('Submit').click();  
});

// 5. confirmation message is displayed
it('MF05 - Confirmation message is displayed', () => {
   cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
    cy.contains('Login').click();
    cy.get('#user_login').type('yussecelestin@gmail.com');
    cy.get('#user_pass').type('13579013@#Yc');
    cy.get('#wp-submit').click();
    cy.get('a[href="/survey/"]').click();
    cy.contains('a', 'Wise _Test_With_Playwright Updated').click();
    cy.get('input[name="answer[747]"]').type('Excellent course!');
    cy.get('input[name="answer[747]"]').should('have.value', 'Excellent course!');
    cy.contains('Submit').click();  
    cy.contains('Merci, vos réponses ont bien été enregistrées !').should('be.visible');
});
});