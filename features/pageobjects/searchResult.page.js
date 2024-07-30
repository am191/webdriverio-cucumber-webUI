import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    get header() {
        return $('h1');
    }

    get searchField() {
        return $('#searchOrder');
    }

    get searchSubmitButton() {
        return $('button[title="Meklēt"]');
    }

    get resultCount() {
        return $('span.searchResults__queryCountNum');
    }

    get articles() {
        return $$('article');
    }

    get articleDates() {
        return $$('span.searchResults__resultDate');
    }

    get articleCategories() {
        return $$('span.searchResults__resultCategory');
    }

    get filterSection() {
        return $('div.searchFilters');
    }

    get clearFilters() {
        return $('a.searchFilters__filterCancelButton')
    }

    async compareResults(int) {
        let result = (await this.resultCount).getText();
        result = parseInt(result,10); // in case string is returned
        if (result > int){
            return true;
        } else {
            throw new Error(`Query returns less than ${int} results`);
        }
    }

    async exactResults(int) {
        let result = (await this.resultCount).getText();
        result = parseInt(result,10);
        if (result === int){
            return true;
        } else {
            throw new Error(`Query does not contain ${int} results`);
        }
    }

    async searchFromPage(query) {
        let input = this.searchField;
        await input.waitForClickable();
        await input.setValue(query); 
    }

    async triggerSearch(){
        const searchTrigger = this.searchSubmitButton;
        await searchTrigger.click();
    }

    open() {
        return super.open('search');
    }

    openSpecific(string) {
        return super.open(`search?query=${string}`)
    }
}

export default new SearchResultPage();

