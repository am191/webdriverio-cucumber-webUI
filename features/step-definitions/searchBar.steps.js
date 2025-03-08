import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Navbar from '../pageobjects/navbar.js';
import Page from '../pageobjects/page.js';

//steps related to interactions with Search field in the navbar
Given('I see the Search option', async() => {
  await Page.open();
  await expect(Navbar.searchButton).toBeDisplayedInViewport();
});


When('I click on the Search button on the navigation bar', async() => {
  const search = Navbar.searchButton;
  await expect(search).toBeClickable();
  await search.click();
});

When('I input {string} in the navigation bar search input field', async(string) => {
  await Navbar.search(string);
});

When('I click the search button', async() => {
  await expect(Navbar.searchBarButton).toBeClickable({ timeout:5000 });
  await Navbar.searchBarButton.click();
});


Then('I should see the Search bar open', async() => {
  await expect(Navbar.searchBar).toBeDisplayedInViewport();
});


Then('I close the Search bar', async() => {
	await Navbar.closeSearchButton.click()
});



