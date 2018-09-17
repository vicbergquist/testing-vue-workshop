module.exports = {
  src_folders: ['e2e/specs'], // #A
  output_folder: 'e2e/reports', // #B

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path, // #C
    host: '127.0.0.1',
    port: 4444, // #D
    cli_args: {
      'WebDriver.chrome.driver': require('chromedriver').path,
      'WebDriver.gecko.driver': require('geckodriver').path
    }
  },

  test_settings: {
    chrome: {
      // #F
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox' // #A
      }
    }
  }
}
