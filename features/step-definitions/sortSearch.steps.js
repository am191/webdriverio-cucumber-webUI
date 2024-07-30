import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import SearchResultPage from '../pageobjects/searchResult.page.js';

//This file contains definitions for 2 scenarios, since they test similar functionalities
// SCENARIO: As a user, I can sort search results by age
Given('I see the search result page for {string}', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


When('I see the {string} filter section', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I notice the year that the first article is from', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I choose to sort by the {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I see the first article is from year {int}', function (int) {
  // Then('I see the first article is from year {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });


// SCENARIO: As a user, I can sort search results by type
Given('I see the search result page', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I open {string} filter section', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I check {string} checkbox', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

When('I see all returned results have {string} type', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('I clear the filter checkbox', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

