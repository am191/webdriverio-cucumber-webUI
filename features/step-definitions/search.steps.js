import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Navbar from '../pageobjects/navbar.page.js';
import SearchResultPage from '../pageobjects/searchResult.page.js';


Given('I see the Search option', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I click on the Search button', async () => {
  await $(Navbar.searchButton).click();
});

When('I see the Search bar open', function () {
           return 'pending';
         });


When('I input {string} in the search input field', function (string) {
           return 'pending';
         });

When('I see the search result page', function () {
           return 'pending';
         });

When('I see empty search page', function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

When('I input {string} in the search input field', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

Then('I see more than {int} search match', function (int) {
         // When('I see {float} search matches', function (float) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
