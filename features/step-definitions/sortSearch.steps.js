import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SearchResultPage from '../pageobjects/searchResult.page.js';

//This file contains definitions for 2 scenarios, since they test similar asyncalities
// SCENARIO: As a user, I can sort search results by age
Given('I see the Search Result page for {string} query', async () => {
  await SearchResultPage.openSpecific(string);
});


When('I see the {string} filter section', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I notice the year that the first article is from', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I choose to sort by the {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I see the first article is from year {int}', async (int) => {
  // Then('I see the first article is from year {float}', async (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });




// SCENARIO: As a user, I can sort search results by type
When('I open {string} filter section', async (string) => {
  const filter = await SearchResultPage.getFilterAccordeon(string);
  await expect(filter).toBeClickable();
  await filter.click();
});

When('I check {string} checkbox', async (string) => {
  await SearchResultPage.selectCheckbox(string);
});

When('I see returned results have {string} type', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I clear the filter checkbox', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

