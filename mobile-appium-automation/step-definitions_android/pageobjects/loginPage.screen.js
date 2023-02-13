const clickButton = async (name) => {
  await $(name).click();
};

const clickBuyNowButton = async () => {
  await $('android=new UiSelector().textContains("Buy")').click();
};

const inputField = async (value, selector) => {
  let input = await $(selector);
  await input.addValue(value);
};

const LoginScreen = {
  clickLoginButton: () => loginButton(),
  typeUserName: (email) => inputField(email, "#username"),
  typePassword: (password) => inputField(password, "#password"),
  clickLoginButton: () =>
    clickButton('//XCUIElementTypeButton[@name="logInButton"]'),
  clickContinueButton: () => clickButton('//button[@name="action"]'),
  clickBuyNowButton: () => clickBuyNowButton(),
};

export default LoginScreen;
