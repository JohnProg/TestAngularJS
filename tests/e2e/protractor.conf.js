exports.config = {

  specs: [
    '../e2e/**/*.spec.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:3333'
};