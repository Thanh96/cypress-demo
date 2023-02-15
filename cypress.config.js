const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    baseUrl: 'https://uat.containers.staging-mable.com.au/',
    chromeWebSecurity: false,
    viewportWidth: 1366, // the most suitable screen for the desktop website
    viewportHeight: 768, // the most suitable screen for the desktop website
    requestTimeout: 20000,
    numTestsKeptInMemory: 10,
    responseTimeout: 30000,
    pageLoadTimeout: 100000,
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
