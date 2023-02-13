import { Given, Then } from "@wdio/cucumber-framework";

import {
  waitForWebContext,
  waitForNativeContext,
} from "../helpers/waitForContext";
import { getCredentials } from "../helpers/userCredentials";
import waitForElement from "../helpers/waitForElement";
import LoginScreen from "./pageobjects/loginPage.screen";

Given("I am on start page as a {string} user", async (user) => {
  const userData = getCredentials(user);
  await browser.reloadSession();

  const nativeContext = await waitForNativeContext(driver);
  await driver.switchContext(nativeContext);
  await LoginScreen.clickLoginButton();

  const webContext = await waitForWebContext(driver);
  await driver.switchContext(webContext);
  await LoginScreen.typeUserName(userData.mail);
  await LoginScreen.typePassword(userData.password);
  await LoginScreen.clickContinueButton();

  await driver.switchContext(nativeContext);
});

Then("I click update button", async () => {
  await LoginScreen.clickBuyButton();
});
