import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js';
 
  Given('I see the main page', async() => {
    await MainPage.open();
  });

  When('I see cookie preference bar', async() => {
    //check if the cookie button is VISIBLE
    await expect(MainPage.cookiePrefBar).toBeDisplayed();
    await expect(MainPage.customizeCookiesBtn).toBeDisplayed();
  });

  When('I can select optional checkbox for {string} cookies', async(string) => {
    await MainPage.selectCookieCategory(string);
  });

  When('I click the {string} button', async(string) => {
    await MainPage.clickButtonByText(string);
  });

  When('I see a cookie modal pop-up', async() => {
    const elements = MainPage.cookieModal; //an array of elements
    for (const element of elements) {
      await expect(element).toBeDisplayed();
    };
  });

  Then('I see the main page without the cookie preference bar', async() => {
    const elements = MainPage.cookieModal;
    for (const element of elements) {
      await expect(element).not.toBeDisplayed();
    };
  });


  