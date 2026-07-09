const { defineConfig } = require('cypress')

module.exports = defineConfig({

  // Record videos during cypress run
  video: true,

  // Save screenshots here
  screenshotsFolder: 'cypress/screenshots',

  // Save videos here
  videosFolder: 'cypress/videos',

  e2e: {
    baseUrl: 'https://student.michaelkentburns.com',

    // Cypress test files location
    specPattern: 'cypress/e2e/**/*.cy.js'
  }

})