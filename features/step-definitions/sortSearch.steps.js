import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SearchResultPage from '../pageobjects/searchResult.page.js';


// SCENARIO: As a user, I can sort search results by age
When('I see the {string} filter section', async (string) => {
  const section = await SearchResultPage.getFilterSection(string);
  await expect(section).toBeDisplayed();
});

When('I choose to sort by the {string}', async (string) => {
  const radioBtn = await SearchResultPage.pickSortType(string);
  await expect(radioBtn).toBeDisplayed();
  await expect(radioBtn).toBeClickable();
  await radioBtn.click()
});

// SCENARIO: As a user, I can sort search results by type
When('I open {string} filter section', async (string) => {
  const filter = await SearchResultPage.getCategoryAccordeon(string);
  await expect(filter).toBeClickable();
  await filter.click();
});

When('I check {string} checkbox', async (string) => {
  await SearchResultPage.selectCheckbox(string);
});

Then('I clear the filter checkbox', async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Given(/^I am on the Search Result page for (.+) query$/, async(searchQuery) => {
  await SearchResultPage.openSpecific(searchQuery);
  const queryText = await SearchResultPage.getQueryText();
  await expect(queryText).toBe(searchQuery);
});

When(/^I sort results by (.+)$/, async(sortOrder) => {
  const orderSelect = await SearchResultPage.pickOrderType(sortOrder);
  await expect(orderSelect).toBeDisplayed()
  await orderSelect.click()
});

When(/^I verify that the URL contains (.+) for required sorting$/, async (parameter) => {
  // Wait until the URL contains the expected sorting parameter, timeout is max waiting time
  await browser.waitUntil(
      async () => (await SearchResultPage.getCurrentUrl()).includes(parameter),
      {
          timeout: 3000, // 3s
          timeoutMsg: `Expected URL to contain "${parameter}", but it didn't`
      }
  );
  const currentUrl = await SearchResultPage.getCurrentUrl();
  await expect(currentUrl).toContain(parameter)
});

When(/^I wait until the query results have updated$/, async() => {
  //fetch the title of the first article before result update
  const oldArticle = await SearchResultPage.articles[0].getText()
  let newArticle;
  //wait until the results have updated; checking first article title
  await browser.waitUntil(
    async() => {
      newArticle = await SearchResultPage.articles[0]
      const currentText = await newArticle.getText()
      return oldArticle !== currentText
    },
    {
      timeout: 5000,
      timeoutMsg: "Query results did not update in time"
    })
  await expect(newArticle).toBeDisplayed()
});

  
Then(/^I verify the sorting order is (.+)$/, async(sortOrder) => {
  //verify is sorting is correctly applied through comparing article date order
  const result = await SearchResultPage.compareArticleDates(sortOrder)
  await expect(result).toBe(true)
});

