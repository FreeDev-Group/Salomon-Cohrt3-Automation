describe('Login', () => {

  context('Navigation', () => {

    it('SC01 - should navigate to the student login page', () => {

      // Visit the home page
      cy.visit('/')

      // Verify the main navigation menu
      cy.contains('Home').should('be.visible')
      cy.contains('About').should('be.visible')
      cy.contains('User').should('be.visible')

      // Open the User menu
      cy.contains('User').click()

      // Verify the available options
      cy.contains('Login').should('be.visible')
      cy.contains('Register as Student').should('be.visible')

      // Navigate to the Login page
      cy.contains('Login').click()

      // Verify the Login page URL
      cy.url().should('include', 'wp-login.php')

      // Verify the Login page is displayed
      // Verify the login form is displayed
cy.get('#user_login').should('be.visible')
cy.get('#user_pass').should('be.visible')
cy.get('#wp-submit')
  .should('be.visible')
  .and('have.value', 'Log In')

    })

  })
it('SC02 - should display all additional login form elements', () => {

  // Navigate to the Login page
  cy.visit('/wp-login.php')

  // Verify the "Remember Me" checkbox
  cy.get('#rememberme').should('be.visible')

  // Verify the "Lost your password?" link
  cy.contains('Lost your password?').should('be.visible')

  // Verify the Back to website link
  cy.contains('← Go to student.michaelkentburns.com')
    .should('be.visible')

})
it('SC03 - should prevent submission when login fields are empty', () => {

  // Visit the student login page
  cy.visit('/wp-login.php')

  // Click the login button without entering credentials
  cy.get('#wp-submit').click()

  // Verify that the user remains on the login page
  cy.url().should('include', 'wp-login.php')

  // Verify that the username field is still displayed
  cy.get('#user_login').should('be.visible')

  // Verify that the password field is still displayed
  cy.get('#user_pass').should('be.visible')

})
it('SC04 - should reject login with invalid password', () => {

  // Visit the student login page
  cy.visit('/wp-login.php')

  // Enter a valid username with an incorrect password
  cy.get('#user_login')
    .clear()
    .type('Alain')

  cy.get('#user_pass')
    .clear()
    .type('WrongPassword123!')

  // Submit the login form
  cy.get('#wp-submit').click()

  // Verify that an incorrect password error message is displayed
  cy.get('#login_error')
    .should('be.visible')
    .and('contain', 'The password you entered for the username Alain is incorrect')

})

it('SC05 - should reject login with an unknown username', () => {

  // Visit the student login page
  cy.visit('/wp-login.php')

  // Enter a username that does not exist
  cy.get('#user_login')
    .clear()
    .type('UnknownStudent123')

  // Enter a random password
  cy.get('#user_pass')
    .clear()
    .type('WrongPassword123!')

  // Submit the login form
  cy.get('#wp-submit').click()

  // Verify that the system displays an unknown username error
  cy.get('#login_error')
    .should('be.visible')
    .and('contain', 'The username UnknownStudent123 is not registered on this site')

})
it('SC06 - should login successfully with valid student credentials', () => {

  // Visit the student login page
  cy.visit('/wp-login.php')

  // Enter valid student credentials
  cy.get('#user_login')
    .clear()
    .type('Alain')

  cy.get('#user_pass')
    .clear()
    .type('4janvier2001@')

  // Submit the login form
  cy.get('#wp-submit').click()

  // Verify successful login redirection
  cy.url()
    .should('not.include', 'wp-login.php')

  // Verify student dashboard content is displayed
  cy.contains('Welcome to the Student Survey App Platform')
    .should('be.visible')

  // Verify student navigation options are available
  cy.contains('All Surveys')
    .should('be.visible')

  cy.contains('My Completed Surveys')
    .should('be.visible')

})
it.skip('SC07 - should temporarily lock the account after 3 failed login attempts', () => {

  // Pending implementation: account lockout after 3 failed login attempts is not available yet.

  // Attempt 1 - Enter incorrect credentials
  cy.visit('/wp-login.php')

  cy.get('#user_login')
    .type('Alain')

  cy.get('#user_pass')
    .type('WrongPassword123!')

  cy.get('#wp-submit').click()


  // Attempt 2 - Enter incorrect credentials
  cy.get('#user_login')
    .clear()
    .type('Alain')

  cy.get('#user_pass')
    .clear()
    .type('WrongPassword123!')

  cy.get('#wp-submit').click()


  // Attempt 3 - Account should be temporarily locked
  cy.get('#user_login')
    .clear()
    .type('Alain')

  cy.get('#user_pass')
    .clear()
    .type('WrongPassword123!')

  cy.get('#wp-submit').click()

  // Expected future behavior:
  // The system should display an account lock message after three failed attempts.
})
it.skip('SC08 - should lock the account after 5 failed login attempts', () => {

  // Pending implementation: extended account lockout after 5 failed attempts is not available yet.

  // Expected future behavior:
  // After five failed login attempts, the system should lock the account
  // for three minutes and display a security warning message.

})
it.skip('SC09 - should display CAPTCHA after multiple failed login attempts', () => {

  // Pending implementation: CAPTCHA protection after failed login attempts is not available yet.

  // Expected future behavior:
  // After multiple failed login attempts, the system should display CAPTCHA
  // or another security verification mechanism.

})

})

