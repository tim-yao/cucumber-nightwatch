// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}
loadServices()

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  test_settings: {
    default: {
      disable_error_log: false,
      output: true,

      desiredCapabilities: {
        browserName: 'chrome',
      },

      webdriver: {
        start_process: true,
        server_path: '',
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            'start-maximized',
            'window-size=1920,1080',
          ],
        },
      },

      webdriver: {
        start_process: true,
        server_path: ''
      },
    },
  },
}

function loadServices() {
  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {}
}
