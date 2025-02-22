import { $ } from '@wdio/globals'
import Page from './page.js';

class CookieBar extends Page {
    // SELECTORS RELATED TO COOKIE PREFERENCE BAR
    get cookiePrefBar() {
        return $('div[id="cconsent-bar"]');
    }

    get customizeCookiesBtn() {
        return $('button=Pielāgot');
    }

    get cookieModal(){
        const modalDiv = $('div[id="cconsent-modal"]');
        const modalHeader = $('//h2[text()="Sīkdatņu uzstādījumi"]');
        return [modalDiv, modalHeader];
    }

    get cookieModalBtn(){
        return $('button=Saglabāt uzstādījumus');
    }

    // METHODS TO INTERACT WITH THE BAR  
    getCookieCategory(category) {
        return $(`input[data-category="${category}"]`)
    }
    async selectCookieCategory(category) {
        const checkbox = this.getCookieCategory(category);
        await checkbox.waitForClickable();
        await checkbox.click();
        await checkbox.isSelected();
    }

    async clickButtonByText(buttonText) {
        const button = $(`//button[text()="${buttonText}"]`);
        await button.waitForClickable({ timeout: 3000 });
        await button.click();
    }
}

export default new CookieBar();
