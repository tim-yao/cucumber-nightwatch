# cucumber-nightwatch 🥒 + 🦉

> A small library to enable us to use nightwatch.js in cucumber.js

## Installation

```bash
npm install @cucumber/cucumber nightwatch cucumber-nightwatch
```

## Cucumber configuration

```JavaScript
const{
  Before,
  After,
  setWorldConstructor,
} = require('@cucumber/cucumber')
const { NightwatchWorld } = require('cucumber-nightwatch')

setWorldConstructor(NightwatchWorld)

// Launch the browser session
Before(async function () {
  await this.initNightwatch()
})

// Close the browser session
After(async function () {
  await this.endNightwatch()
})
```

## Nightwatch configuration

```shell
# Nightwatch variables
NIGHTWATCH_BROWSER=chrome
NIGHTWATCH_HEADLESS=true
NIGHTWATCH_CONFIG=./custom_dir/nightwatch.conf.js
NIGHTWATCH_SILENT=false
NIGHTWATCH_OUTPUT=true
```

## Verbose Cucumber Nightwatch log

```shell
CN_DEBUG=true
```
