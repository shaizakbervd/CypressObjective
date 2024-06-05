const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  env: {
    url: "https://www.saucedemo.com/"
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/Integration/Testing/*.js',
    chromeWebSecurity: false,
    viewportWidth:1200,
  },
  defaultCommandTimeout: 10000
});
