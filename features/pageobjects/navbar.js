import { $ } from '@wdio/globals'

// navbar element is shared across pages

class Navbar {
    //getter methods
    get navbarCategories() {
        return $$('button[class="mainMenu__link"]');
    }

    get searchButton(){
        const result = $('span.upperMenu__searchIcon');
        console.log(result);
        return result;
    }

    get searchBar(){
        return $('form[id="mainSearchForm"]');
    }

    get searchInput(){
        return $('textarea[id="searchWindowQuery"]');
    }

    get searchBarButton(){
        return $('a[id="mainSearchButton"]');
    }

    //methods to interact with the navbar
    async search(query) {
        const searchInputField = this.searchInput;
    
        await searchInputField.waitForClickable();
        await searchInputField.setValue(query);   
    }

    async triggerSearch(){
        const searchTrigger = this.searchBarButton;
        await searchTrigger.waitForClickable();
        await searchTrigger.click();
    }
    
}

export default new Navbar();