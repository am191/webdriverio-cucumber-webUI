import { $ } from '@wdio/globals'

// navbar element is shared across pages

class Navbar {
    //getter methods
    get navbarCategories() {
        const categories = $$('button[class="mainMenu__link"]');
        return categories;
    }

    get searchButton(){
        
    }



    //methods to interact with the navbar

}

export default new MainPage();