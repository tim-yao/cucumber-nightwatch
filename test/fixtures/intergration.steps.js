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

Then('I click {string}', async function (cssSelector) {
  await this.browser.element(cssSelector).click()
})

Then('run below commands should pass', async function (dataTable) {
  const nightwatchCommands = dataTable.hashes()
  for (let i=0; i < nightwatchCommands.length; i++) {
    const nightwatchCommand = nightwatchCommands[i]
    console.log('nightwatchCommand', nightwatchCommand)
    await this.browser[nightwatchCommand.command](nightwatchCommand.arg)
  }
})

Then('element commands should work', async function () {
  const auLink = await this.browser.element.findAllByText('Australia')
  this.browser.expect.element(auLink).text.to.equal('Australia')
})
