import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import MainPage from '../pageobjects/main.page.js';

const pages = {
    main: MainPage
}
  
  Given('I see the main page', async () => {
      await MainPage.open();
  });


  When('I see cookie preference bar', async () => {
    //check if the cookie button is VISIBLE
      await expect(MainPage.cookiePrefBar).toBeDisplayed();
      await expect(MainPage.customizeCookiesBtn).toBeDisplayed();
  });

  When('I can select optional checkboxes', function () {
    return 'pending';
  });


  When('I see a modal pop-up when clicking on <Pielāgot> button', function () {
    return 'pending';
  });

  When('I click <Saglabāt uzstādījumus> button', function () {
    return 'pending';
  });


  Then('I see the main page without the <cookie preference bar>', function () {
    return 'pending';
  });


  When(/^I see {cookie preference bar}$/, () => {
    return true;
  });



  