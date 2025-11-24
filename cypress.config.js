const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "as8hcy",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
