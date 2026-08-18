describe('Create Account', () => {

  it('Open the registration page', () => {

    cy.visit('https://student.michaelkentburns.com/');
    cy.contains('User').click();
 cy.contains('Register').click();
cy.get('#user_login').type('ushindi');
cy.get('#user_email').type('ushindigabriel@gmail.com');        
cy.get('#wp-submit').click();
cy.get('input[value-"Register"]').click();
cy.contains( 'Account created successfully').should ('be visible');

  });

});