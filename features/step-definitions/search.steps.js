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

When('I input {string} in the search input field', async(string) => {
  await Navbar.search(string);
});

When('I click search', async(string) => {
  await expect(Navbar.searchBarButton).toBeClickable();
  await Navbar.triggerSearch();
});

When('I see the search result page', async() => {
  //fetch tab title = Meklēšana - as well
  return 'pending';
});

When('I see empty search page', async() => {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });


Then('I see more than {int} search match', async(int) => {
  await SearchResultPage.compareResults(int);
});
