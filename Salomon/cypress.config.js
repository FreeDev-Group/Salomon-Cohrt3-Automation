const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://student.michaelkentburns.com",
    screenshotsFolder: "cypress/my-reports/screenshots",
    video: true,
    videosFolder: "cypress/my-reports/videos",
    setupNodeEvents(on, config) {
      // Activation du plugin de reporting
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});