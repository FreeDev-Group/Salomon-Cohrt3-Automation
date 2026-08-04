const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      // 1. Activation du plugin pour le rapport
      require('cypress-mochawesome-reporter/plugin')(on);

      // 2. Enregistrement de vos tâches (on est disponible ici)
      on('task', {
        getResetToken(email) {
          // Votre logique ici
          return "test-token-123"; 
        },
      });

      
    },
  },
});