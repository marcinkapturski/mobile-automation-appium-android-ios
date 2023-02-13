const { config } = require("./wdio.shared.conf");
import { join } from "path";

config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "11.0",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UIAutomator2",
    "appium:app": join(
      process.cwd(),
      "./app/android/Android-NativeDemoApp-0.4.0.apk"
    ),
    // 'appium:chromedriverPort': '4723'
  },
];
config.connectionRetryTimeout = 90000;
config.connectionRetryCount = 0;
config.waitforTimeout = 90000;
config.timeout = 90000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = [
  "./mobile-appium-automation/step-definitions_android/**.js",
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
