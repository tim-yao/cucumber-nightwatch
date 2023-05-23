const { Given, When, Then } = require('@cucumber/cucumber')
const subProcess = require('child_process')
const assert = require('assert')
const consola = require('consola')

Given('a Cucumber setup with cucumber-nightwatch', function () {
  // this.command = 'npm run test-js -- '
  this.command = 'node_modules/.bin/cucumber-js test/fixtures --require test/fixtures/**/*.js --format @cucumber/pretty-formatter --publish-quiet '
})

When('I run the cucumber-js with {string}', async function (options) {
  const execOptions = {
    env: {
      ...process.env,
      NIGHTWATCH_BROWSER: 'chrome',
      NIGHTWATCH_HEADLESS: true,
      NIGHTWATCH_CONFIG: 'test/fixtures/nightwatch.conf.js',
      NIGHTWATCH_OUTPUT: true,
      NIGHTWATCH_SILENT: true
    },
    timeout: 30000, // kill the process after 30 seconds
  }
  try {
    const ls = subProcess.execSync(this.command + options, execOptions)
    consola.start('===================== Sub Process Start =====================')
    consola.info(ls.toString())
    consola.success('===================== Sub Process End =====================')
  } catch (err) {
    this.testError = err.stdout.toString()
  }
})

Then('it passes', async function () {
  assert.equal(this.testError, undefined, 'Demo test should pass but fail.\n' + this.testError);
})

Then('it fails', async function () {
  assert.notEqual(this.testError, undefined, 'Demo test should fail but pass. No test error was caught.');
})
