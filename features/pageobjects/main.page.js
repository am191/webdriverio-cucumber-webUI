import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    // SELECTORS RELATED TO COOKIE PREF BAR
    get cookiePrefBar() {
        // id="cconsent-bar"
        return $('div[id="cconsent-bar"]');
    }

    get customizeCookiesBtn() {
        return $('button=Pielāgot');
    }

    get cookieModal(){
        return $('h2=Sīkdatņu uzstādījumi');
    }

    get cookieModalBtn(){
        return $('button=Saglabāt uzstādījumus');
    }
    


    // METHODS TO INTERACT WITH THE MAIN PAGE  
    selectCookieCategory(category) {
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('#');
    }
}

export default new MainPage();
