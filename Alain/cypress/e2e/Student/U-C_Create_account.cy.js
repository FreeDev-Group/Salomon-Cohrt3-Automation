describe('Create Account - Validation', () => {

  it('should display validation errors when submitting an empty registration form', () => {

    // 1. Ouvrir la page d'accueil
    cy.visit('/')

    // 2. Vérifier les menus principaux
    cy.contains('Home').should('be.visible')
    cy.contains('About').should('be.visible')
    cy.contains('User').should('be.visible')

    // 3. Ouvrir le menu User
    cy.contains('User').click()

    // 4. Vérifier les options du menu
    cy.contains('Login').should('be.visible')
    cy.contains('Register as Student').should('be.visible')

    // 5. Cliquer sur Register as Student
    cy.contains('Register as Student').click()

    // 6. Vérifier que la page Register est ouverte
    cy.contains('Register For This Site').should('be.visible')

    // 7. Cliquer sur Register sans remplir les champs
    cy.get('#wp-submit').click()

    // 8. Vérifier les messages d'erreur
    cy.get('#login_error')
      .should('contain', 'Please enter a username')
      .and('contain', 'Please type your email address')

  })

})