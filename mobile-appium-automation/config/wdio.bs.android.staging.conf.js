require("dotenv").config();

const { config } = require("./wdio.shared.conf");

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
config.capabilities = [
  {
    os_version: "10.0",
    device: "Samsung Galaxy S20",
    app: "bs://d0b4992afa2e8f6f01ed7bcfaae227b14123e074",
    project: "Mobile Automation Tests",
    build: "Version 0.0.1",
    "browserstack.networkLogs": "true",
    "browserstack.networkProfile": "4g-lte-high-latency",
    build: "Android_build_1234",
    name: "Android_demo_sesion",
  },
];
config.connectionRetryTimeout = 40000;
config.connectionRetryCount = 0;
config.waitforTimeout = 20000;
config.timeout = 20000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = [
  "./mobile-appium-automation/step-definitions_android/**.js",
];
config.services = ["browserstack"];

exports.config = config;
