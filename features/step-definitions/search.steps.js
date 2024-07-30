import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Navbar from '../pageobjects/navbar.js';
import SearchResultPage from '../pageobjects/searchResult.page.js';
import MainPage from '../pageobjects/main.page.js';


Given('I see the Search option', async() => {
  await MainPage.open();
  await expect(Navbar.searchButton).toBeDisplayedInViewport();
});

When('I click on the Search button', async() => {
  const search = Navbar.searchButton;
  await expect(search).toBeClickable();
  await search.click();
});

When('I see the Search bar open', async() => {
  await expect(Navbar.searchBar).toBeDisplayedInViewport();
});

When('I input {string} in the navigation bar search input field', async(string) => {
  await Navbar.search(string);
});

When('I input {string} in the search page input field', async(string) => {
  await SearchResultPage.searchFromPage(string);
  await SearchResultPage.triggerSearch();
});

When('I click search', async(string) => {
  await expect(Navbar.searchBarButton).toBeClickable();
  await Navbar.triggerSearch();
});

When('I see the search page', async(string) => {
    //asserting that we are on the search page
    const headerText = await expect(SearchResultPage.header).getText();
    await expect(headerText).to.include('Meklēšana');
});

When('I see {int} search matches', async() => {
  await expect(SearchResultPage.resultCount).toBeDisplayed();
  await SearchResultPage.exactResults(int);
});


Then('I see more than {int} search match', async(int) => {
  await expect(SearchResultPage.resultCount).toBeDisplayed();
  await SearchResultPage.compareResults(int);
});
