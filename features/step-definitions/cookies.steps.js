import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CookieBar from '../pageobjects/cookieBar.js';

  When('I see cookie preference bar', async() => {
    //check if the cookie button is VISIBLE
    await expect(CookieBar.cookiePrefBar).toBeDisplayed();
    await expect(CookieBar.customizeCookiesBtn).toBeDisplayed();
  });

  When('I can select optional checkbox for {string} cookies', async(string) => {
    const checkbox = await CookieBar.getCookieCategory(string);
    await checkbox.waitForClickable();
    await checkbox.click();
    await checkbox.isSelected();
  });

  When('I click the {string} button', async(string) => {
    const cookieBtn = await CookieBar.findButtonByText(string)
    await cookieBtn.waitForClickable({ timeout: 3000 });
    await cookieBtn.click();
  });

  When('I see a cookie modal pop-up', async() => {
    const elements = CookieBar.cookieModal; //an array of elements
    for (const element of elements) {
      await expect(element).toBeDisplayed();
    };
  });

  Then('I see the main page without the cookie preference bar', async() => {
    const elements = CookieBar.cookieModal;
    for (const element of elements) {
      await expect(element).not.toBeDisplayed();
    };
  });


  