const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://student.michaelkentburns.com',

    // 👇 IMPORTANT : chemin standard Cypress
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
})