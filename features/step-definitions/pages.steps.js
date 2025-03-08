import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import CookieBar from '../pageobjects/cookieBar.js';
import Page from '../pageobjects/page.js';

//contains all defintions for page landing and redirecting
 
Given('I am on the {string} page', async(string) => {
    await Page.open(string);
  });

  
