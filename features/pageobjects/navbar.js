import { $ } from '@wdio/globals'

// navbar element is shared across pages

class Navbar {
    //getter methods
    get navbarCategories() {
        return $$('button[class="mainMenu__link"]');
    }

    get searchButton(){
        return $('span.upperMenu__searchIcon');
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

    get closeSearchButton(){
        return $('button.searchWindow__close.searchClose')
    }

    //search bar input
    async search(query) {
        const searchInputField = this.searchInput;
        await searchInputField.setValue(query);   
    }
    
}

export default new Navbar();