import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    get header() {
        return $('h1');
    }

    get searchField() {
        return $('#searchResultsQuery'); 
        //return $('#searchOrder');
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

    get clearFilters() {
        return $('a.searchFilters__filterCancelButton')
    }

    // "getter" method to select filter accordeon based on the name
    async getFilterAccordeon(title){
        return $("//div[contains(@class, 'searchFilters__categoryTitle') and text()='${title}']")
    }

    async getQueryText(){
        let searchText = (await this.searchField).getText();
        return searchText;
    }

    // methods for interacting with elements
    async compareResults(int) {
        let resultText = await this.resultCount;
        await resultText.waitForDisplayed();
        resultText = await resultText.getText();

        let resultNum = parseInt(resultText,10);
        if (resultNum > int){
            return true;
        } else {
            throw new Error(`Query returns less than ${int} results, returns ${resultNum}, ${resultText}`);
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
        await expect(searchTrigger).toBeClickable();
        await searchTrigger.click();
    }

    async selectCheckbox(value){
        const checkbox = await $(`input[value="${value}"`);
        await expect(checkbox).toBeClickable();
        await checkbox.click();
    }

    async checkArticleCategories(category){
        const elements = this.articleCategories;
        const texts = await Promise.all(elements.map(async element => await element.getText()));
        const result = texts.every(text => text === category);
        await expect(result).toBe.true;

    }

    open() {
        return super.open('search');
    }
    openSpecific(string) {
        return super.open(`search?query=${string}`)
    }
}

export default new SearchResultPage();

