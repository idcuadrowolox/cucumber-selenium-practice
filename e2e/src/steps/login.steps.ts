import { Before, Given, Then, When, After } from 'cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/login.po';
import { environment } from '../enviroments/enviroment.e2e';
import { urls } from '../pages/urls';

let page: LoginPage;

Before({ tags: '@login' }, () => {
  page = new LoginPage();
});

Given(/^I am on the login page$/, async () => {
  await page.navigateTo(urls.login);
  await page.wait(1000);
});

When(/^I enter a correct username$/, async () => {
  await page.writeUser(environment.credentials.username);
  await page.wait(1000);
});

When(/^I enter a correct password$/, async () => {
  await page.writePassword(environment.credentials.password);
  await page.wait(1000);
});

When(/^I click on login$/, async () => {
  await page.doLogin();
});

Then(/^Go to home page$/, async () => {
  const currentURL = await page.getCurrentUrl();
  expect(currentURL).to.equal(`${page.baseUrl}${urls.home}`);
});

Then(/^Validate message for user incorrect "([^"]*)"$/, async (message) => {
  const usernameErrorMessage = await page.getUsernameErrorMessage();
  expect(usernameErrorMessage).to.equal(message);
});

Then(/^Validate message for password incorrect "([^"]*)"$/, async (message) => {
  const passwordErrorMessage = await page.getPasswordErrorMessage();
  expect(passwordErrorMessage).to.equal(message);
});

After({ tags: '@login' }, async () => {
  await page.wait(2000);
  await page.restartBrowser();
});
