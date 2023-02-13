const { config } = require("./wdio.shared.conf");
const path = require("path");

config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "16.1",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "./app/ios/wdioNativeDemoApp.app"),
  },
];
config.connectionRetryTimeout = 90000;
config.connectionRetryCount = 0;
config.waitforTimeout = 90000;
config.timeout = 90000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = [
  "./mobile-appium-automation/step-definitions_ios/**.js",
];
config.baseUrl = "http://localhost";
config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
      },
      logPath: "./",
    },
  ],
];

exports.config = config;
