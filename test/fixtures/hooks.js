const { Before, After, setWorldConstructor } = require('@cucumber/cucumber')
const { NightwatchWorld } = require('../../dist/cjs/NightwatchWorld')

setWorldConstructor(NightwatchWorld)

// Launch the browser session
Before(async function () {
  await this.initNightwatch()
})

// Close the browser session
After(async function () {
  await this.endNightwatch()
})
