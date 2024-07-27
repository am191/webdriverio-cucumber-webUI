import { $ } from '@wdio/globals'

// navbar element is shared across pages

class Navbar {
    //getter methods
    get navbarCategories() {
        const categories = $$('button[class="mainMenu__link"]');
        return categories;
    }

    get searchButton(){
        return $('button[class="upperMenu__button searchTrigger"');
    }

    get searchBar(){
        return $('form[id="mainSearchForm"');
    }

    get searchInput(){
        return $('textarea[id="searchWindowQuery"');
    }

    get searchBarButton(){
        return $('a[id="mainSearchButton"]');
    }

    //methods to interact with the navbar
    async search(query){
        const searchInputField = this.searchInput;
        const searchTrigger = this.searchBarButton;

        await searchInputField.waitForClickable();
        await searchInputField.setValue(query);
        await searchTrigger.click();
    }
    
}

export default new Navbar();