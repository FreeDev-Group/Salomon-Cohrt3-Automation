describe('Create Account', () => {

  it('should navigate to the student registration page', () => {

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

    // Navigate to the registration page
    cy.contains('Register as Student').click()

    // Verify that the registration page is displayed
    cy.url().should('include', 'action=register')

    cy.contains('Register For This Site').should('be.visible')

    // Verify the registration form fields
    cy.get('#user_login').should('be.visible')
    cy.get('#user_email').should('be.visible')
    cy.get('#wp-submit')
      .should('be.visible')
      .and('have.value', 'Register')

  })
it('should display validation errors when submitting an empty registration form', () => {

  // Visit the registration page
  cy.visit('/wp-login.php?action=register')

  // Verify that the registration page is displayed
  cy.contains('Register For This Site').should('be.visible')

  // Verify the required fields
  cy.get('#user_login').should('be.visible')
  cy.get('#user_email').should('be.visible')

  // Submit the form without entering any data
  cy.get('#wp-submit').click()

  // Verify validation error messages
  cy.get('#login_error')
    .should('contain', 'Please enter a username')
    .and('contain', 'Please type your email address')

})
it('should register a new student account successfully', () => {

  // Visit the registration page
  cy.visit('/wp-login.php?action=register')

  // Verify the registration page
  cy.contains('Register For This Site').should('be.visible')

  // Generate a unique username and email
  const uniqueId = Date.now()
  const username = `alainbahane${uniqueId}`
  const email = `alainbahane${uniqueId}@gmail.com`

  // Fill in the registration form
  cy.get('#user_login').type(username)
  cy.get('#user_email').type(email)

  // Submit the registration form
  cy.get('#wp-submit').click()

  // Verify that the user is redirected to the confirmation page
  cy.url().should('include', 'checkemail=registered')

  // Verify the success message
  cy.contains('Registration complete. Please check your email, then visit the login page.')
    .should('be.visible')

  // Verify the link back to the website
  cy.contains('Go to student.michaelkentburns.com')
    .should('be.visible')

})
it('should prevent registration with an existing email address', () => {

  // Visit the registration page
  cy.visit('/wp-login.php?action=register')

  // Verify the registration page
  cy.contains('Register For This Site').should('be.visible')

  // Fill in the form with an existing email
  cy.get('#user_login').type('alainbahaneexisting')
  cy.get('#user_email').type('alainbahanep@gmail.com')

  // Submit the registration form
  cy.get('#wp-submit').click()

  // Verify that the user remains on the registration page
  cy.url().should('include', 'action=register')

  // Verify the error message
  cy.get('#login_error')
    .should('contain', 'This email address is already registered.')
    .and('contain', 'Log in with this address or choose another one.')

})
it('should display the login and password recovery links', () => {

  // Visit the registration page
  cy.visit('/wp-login.php?action=register')

  // Verify the registration page
  cy.contains('Register For This Site').should('be.visible')

  // Verify the Login link
  cy.contains('Log in')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'wp-login.php')

  // Verify the Lost your password? link
  cy.contains('Lost your password?')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'action=lostpassword')

})

})