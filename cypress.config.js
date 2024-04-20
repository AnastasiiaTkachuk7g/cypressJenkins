const { defineConfig } = require("cypress");


module.exports = defineConfig({

  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",
    userId: "rahul",
    password: "3242"
  },

  retries: {
    runMode: 1,
  },

  projectId: "ne7nj9",
  e2e: {
    setupNodeEvents (on, config) {
//
    },
    specPattern: ' cypress/Integration/Examples/*.js'
  },
});
