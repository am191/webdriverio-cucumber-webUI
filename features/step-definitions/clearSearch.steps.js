import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SearchResultPage from '../pageobjects/searchResult.page.js';

When('I clear search field', async () => {
  await SearchResultPage.clearSearch()
  await expect(SearchResultPage.searchField).toHaveValue('')
});

Then('I see {string} search results', async (string) => {
    const resultNum = await SearchResultPage.resultCount
    await expect(resultNum).toHaveText(string)
});

