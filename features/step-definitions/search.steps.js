import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Navbar from '../pageobjects/navbar.page.js';
import SearchResultPage from '../pageobjects/searchResult.page.js';


Given('I see the Search option', async() => {
  await $(Navbar.searchButton);
});

When('I click on the Search button', async() => {
  await $(Navbar.searchButton).click();
});

When('I see the Search bar open', async() => {
           return 'pending';
});


When('I input {string} in the search input field', async(string) => {
           return 'pending';
         });

When('I see the search result page', async() => {
           return 'pending';
         });

When('I see empty search page', async() => {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

When('I input {string} in the search input field', async(string) => {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

Then('I see more than {int} search match', async(int) => {
         // When('I see {float} search matches', async (float) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
