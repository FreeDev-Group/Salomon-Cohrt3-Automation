const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: 'cypress/mes-rapports/screenshots', // Personnalisation du dossier
    video: true, // Activez aussi l'enregistrement vidéo si besoin
    videosFolder: 'cypress/mes-rapports/videos',
    // ...
  },
});