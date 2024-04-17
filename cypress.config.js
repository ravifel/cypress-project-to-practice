const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q7n7ay',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Cypress Project to Practice',
    reportPageTitle: 'Cypress Project to Practice'
  },
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
