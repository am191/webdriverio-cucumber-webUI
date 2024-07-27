import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    get searchField() {
        return $('#searchOrder');
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
        return result > int ? true : throw new Error(`Query returnes less than ${int} results`);
    }
    open () {
        return super.open('search');
    }
}

export default new SearchResultPage();