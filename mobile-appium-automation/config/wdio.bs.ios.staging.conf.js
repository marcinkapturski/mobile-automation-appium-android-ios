require("dotenv").config();

const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
config.capabilities = [
  {
    os_version: "16",
    device: "iPhone 14 Pro",
    app: "bs://9560f32a7c584703ba9cd6ac9bb18d50929cc3a0",
    project: "Mobile Automation Tests",
    build: "Version 0.0.1",
    "browserstack.acceptInsecureCerts": "true",
    "browserstack.networkLogs": "true",
    build: "iOS_build_1234",
    name: "iOS_demo_sesion",
  },
];
config.connectionRetryTimeout = 40000;
config.connectionRetryCount = 0;
config.waitforTimeout = 20000;
config.timeout = 20000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = [
  "./mobile-appium-automation/step-definitions_ios/**.js",
];
config.services = ["browserstack"];

exports.config = config;
