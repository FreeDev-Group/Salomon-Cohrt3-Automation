describe('Password Recovery', () => {

  // SC01 - Verify that student can navigate to password recovery page
  it('SC01 - should navigate to the password recovery page', () => {

    // Visit login page
    cy.visit('/wp-login.php')

    // Click on Lost your password link
    cy.contains('Lost your password?')
      .should('be.visible')
      .click()

    // Verify password recovery URL
    cy.url()
      .should('include', 'wp-login.php?action=lostpassword')

    // Verify password recovery page message
    cy.contains('Please enter your username or email address')
      .should('be.visible')

  })
// SC02 - Verify password recovery form elements are displayed
it('SC02 - should display all password recovery form elements', () => {

  // Visit password recovery page
  cy.visit('/wp-login.php?action=lostpassword')

  // Verify username or email field is visible
  cy.get('#user_login')
    .should('be.visible')

  // Verify submit button is visible with correct text
  cy.get('#wp-submit')
    .should('be.visible')
    .and('have.value', 'Get New Password')

  // Verify login link is visible
  cy.get('.wp-login-log-in')
    .should('be.visible')
    .and('contain', 'Log in')

  // Verify register link is visible
  cy.get('.wp-login-register')
    .should('be.visible')
    .and('contain', 'Register')

  // Verify back to student website link is visible
  cy.get('#backtoblog a')
    .should('be.visible')
    .and('contain', 'Go to student.michaelkentburns.com')

})
// SC03 - Verify password recovery request with a registered email
it('SC03 - should submit password recovery request with a registered email', () => {

  // Visit password recovery page
  cy.visit('/wp-login.php?action=lostpassword')

  // Enter registered student email
  cy.get('#user_login')
    .should('be.visible')
    .type('alainbahanep@gmail.com')

  // Submit password recovery request
  cy.get('#wp-submit')
    .should('be.visible')
    .click()

  // Verify confirmation message is displayed
  cy.contains('Check your email for the confirmation link')
    .should('be.visible')

  // Verify return to login link is displayed
  cy.get('#backtoblog a')
    .should('be.visible')
    .and('contain', 'Go to student.michaelkentburns.com')

})
// SC04 - Verify password recovery request with an unknown username or email
it('SC04 - should reject password recovery request with an unknown username or email', () => {

  // Visit password recovery page
  cy.visit('/wp-login.php?action=lostpassword')

  // Enter unknown username
  cy.get('#user_login')
    .should('be.visible')
    .type('UnknownStudent123')

  // Submit password recovery request
  cy.get('#wp-submit')
    .should('be.visible')
    .click()

  // Verify error message is displayed
  cy.get('#login_error')
    .should('be.visible')
    .and('contain', 'There is no account with that username or email address')

  // Verify login link is still available
  cy.get('.wp-login-log-in')
    .should('be.visible')
    .and('contain', 'Log in')

})
// SC05 - Verify complete password reset flow
it.skip('SC05 - should complete password reset process using email link', () => {

  // Pending automation.
  // The password reset link is delivered by email.
  // Accessing and validating the email link requires email service integration,
  // which is not currently configured in the Cypress test environment.

  // Expected flow:
  // 1. User receives password reset email.
  // 2. User opens the secure reset link.
  // 3. User enters a new password.
  // 4. System updates the password.
  // 5. User is redirected to the login page with a success message.

})

})