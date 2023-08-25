const { Before, After, setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber')
const { NightwatchWorld } = require('../../dist/cjs/NightwatchWorld')

setWorldConstructor(NightwatchWorld)

// Set cucumber timeout to 30 seconds because browser testing can be slow.
setDefaultTimeout(30 * 1000)

// Launch the browser session
Before(async function () {
  await this.initNightwatch()
})

// Close the browser session
After(async function () {
  await this.endNightwatch()
})
