import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Navbar from '../pageobjects/navbar.js';
import SearchResultPage from '../pageobjects/searchResult.page.js';
import MainPage from '../pageobjects/main.page.js';

///GIVEN STATEMENTS
Given('I see the Search option', async() => {
  await MainPage.open();
  await expect(Navbar.searchButton).toBeDisplayedInViewport();
});

Given('The Search bar is open', async() => {
  await MainPage.open();
  await expect(Navbar.searchButton).toBeDisplayedInViewport();
  const search = Navbar.searchButton;
  await search.click();
  await expect(Navbar.searchBar).toBeDisplayedInViewport();
});

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

//WHEN STATEMENTS
When('I click on the Search button on the navigation bar', async() => {
  const search = Navbar.searchButton;
  await expect(search).toBeClickable();
  await search.click();
});

When('I input {string} in the navigation bar search input field', async(string) => {
  await Navbar.search(string);
});

When('I input {string} in the search page input field', async(string) => {
  await SearchResultPage.searchFromPage(string);
});

When('I click the search button', async() => {
  await expect(Navbar.searchBarButton).toBeClickable();
  await Navbar.triggerSearch();
});

When('I click the search button in the Search Result page', async() => {
  await SearchResultPage.triggerSearch();
});


//THEN STATEMENTS
Then('I should see the Search bar open', async() => {
  await expect(Navbar.searchBar).toBeDisplayedInViewport();
});

Then('I should see the Search Result page', async() => {
  //asserting that we are on the search result page
  const headerText = await SearchResultPage.header.getText();
  await expect(headerText).toContain('Meklēšana');
});

When('I should see {int} search matches', async() => {
  await expect(SearchResultPage.resultCount).toBeDisplayed();
  await SearchResultPage.exactResults(int);
});

Then('I should see more than {int} search match', async(int) => {
  await expect(SearchResultPage.resultCount).toBeDisplayed();
  await SearchResultPage.compareResults(int);
});


