import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SearchResultPage from '../pageobjects/searchResult.page.js'; 

//steps related to the Search page (lu.lv/search)

Given('I am on the Search Result page', async() => {
  await SearchResultPage.open();
  const headerText = await SearchResultPage.header.getText();
  await expect(headerText).toContain('Meklēšana');
});

Given('I am on the Search Result page for {string} query', async(string) => {
  await SearchResultPage.openSpecific(string);
  const queryText = await SearchResultPage.getQueryText();
  await expect(queryText).toBe(string);
});

When('I input {string} in the search page input field', async(string) => {
    await SearchResultPage.searchFromPage(string);
});

When('I click the search button in the Search Result page', async() => {
  const searchBtn = await SearchResultPage.searchSubmitButton;
  await expect(searchBtn).toBeClickable();
  await searchBtn.click();
});


Then('I should see the Search Result page', async() => {
    //asserting that we are on the search result page
    const headerText = await SearchResultPage.header.getText();
    await expect(headerText).toContain('Meklēšana');
});
  
  When('I should see {int} search matches', async(int) => {
    await expect(SearchResultPage.resultCount).toBeDisplayed();
    await SearchResultPage.exactResults(int);
});
  
  Then('I should see more than {int} search match', async(int) => {
    await expect(SearchResultPage.resultCount).toBeDisplayed();
    await SearchResultPage.compareResults(int);
});

When('I clear search field', async () => {
    (await SearchResultPage.searchField).clearValue()
    await expect(SearchResultPage.searchField).toHaveValue('')
  });


//steps related to Search page specifically related to filtering and sorting results
  When('I choose to sort by the {string}', async (string) => {
    const radioBtn = await SearchResultPage.pickSortType(string);
    await expect(radioBtn).toBeDisplayed();
    await radioBtn.click()
  });

//different step string format to be able to pass examples
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
            timeout: 3000,
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
    //wait until the results have updated by checking first article title
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
    //verify sorting is correctly applied through comparing article date order
    const result = await SearchResultPage.compareArticleDates(sortOrder)
    await expect(result).toBe(true)
  });