const { Given, When, Then } = require('@cucumber/cucumber')

Given('I visit the Google AU homepage', function () {
  this.browser.url('https://google.com.au')
})

When('I check the page title', async function () {
  this.pageTitle = await this.browser.getTitle()
})

Then('the title text should be {string}', async function (title) {
  await this.browser.assert.equal(this.pageTitle, title)
})
