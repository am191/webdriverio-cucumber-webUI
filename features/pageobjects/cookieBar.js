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


    async getCookieCategory(category) {
        return $(`input[data-category="${category}"]`)
    }

    async findButtonByText(buttonText) {
        return $(`//button[text()="${buttonText}"]`);
    }
}

export default new CookieBar();
 