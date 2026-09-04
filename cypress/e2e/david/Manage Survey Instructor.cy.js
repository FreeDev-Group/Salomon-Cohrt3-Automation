describe('UC - Manage Survey', () => {

  beforeEach(() => {

    // Ouvrir le site
    cy.visit('https://student.michaelkentburns.com/');

    // Ouvrir User
    cy.contains('User').click();

    // Cliquer sur Login
    cy.contains('Login').click();

    // Entrer les identifiants
    cy.get('#user_login')
      .type('davidmumeme@gmail.com');

    cy.get('#user_pass')
      .type('@#Dav243/$%');

    // Soumettre le formulaire
    cy.get('#wp-submit').click();

  });


  context('UC01 - Create Survey', () => {

    it('Instructor opens the Add New Survey page', () => {

      // Cliquer sur Survey
      cy.contains('.wp-menu-name')
        .should('be.visible')
        .click();

      // Cliquer sur Add New Survey
      cy.get('a[href="post-new.php?post_type=survey"]')
        .should('be.visible')
        .click();

      // Vérifier que la page Add New Survey est ouverte
      cy.url()
        .should('include', 'post-new.php?post_type=survey');

    });

  });

});

  /* describe('UC - Manage Survey', () => {

  context('UC01 - Create Survey', () => {

    it('Instructor opens the Add New Survey page', () => {

      cy.visit('https://student.michaelkentburns.com/');

      cy.contains('User').click();

      cy.contains('Login').click();

      cy.get('#user_login')
        .type('davidmumeme@gmail.com');

      cy.get('#user_pass')
        .type('@#Dav243/$%');

      cy.get('#wp-submit').click();

      cy.contains('.wp-menu-name')
        .should('be.visible')
        .click();

      cy.get('a[href="post-new.php?post_type=survey"]')
        .should('be.visible')
        .click();

      cy.url()
        .should('include', 'post-new.php?post_type=survey');

    });

  });
*/
