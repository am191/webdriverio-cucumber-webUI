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

    //filter methods
    // "getter" method to select filter accordeon based on the name
    async getFilterSection(title){
        return $(`//div[@class='searchFilters__headerName' and contains(text(),'${title}')]`);
    }
    //get specific filter
    async getCategoryAccordeon(title){
        return $("//div[contains(@class, 'searchFilters__categoryTitle') and text()='${title}']")
    }
    //Kārtot pēc category
    async pickOrderType(sort){
        return $(`input.filterBlockSortByRadio[value='${sort}']+ label`);
    }


    //interacting with input field
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
    async getQueryText(){
        let searchText = (await this.searchField).getText();
        return searchText;
    }

    // methods for interacting with articles
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
    //get dates articles were published at
    async compareArticleDates(order) {
        const dates = await this.articleDates //finds the necessary elements

        const formattedDates = []
        for (const date of dates) {
            let time = await date.getText()
            const [day,month,year,hour,minute] = time.split('.').map(time => time.trim())
            //change into suitable formate for Date constructor
            const dateStr = `${year}-${month}-${day}T${hour}:${minute}:00`;
            formattedDates.push(new Date(dateStr))
        }
  
        const sortedDates = [...formattedDates]
        //sort the dates in the required order DOESNT WORK
        if (order === "asc"){
            sortedDates.sort((a,b) => a-b) //asc order - b is bigger than a
        } else if (order === "desc") {
            sortedDates.sort((a,b) => b-a)
        }
        
        //does the sorted array match the actual values taken from the site
        return sortedDates.every((value,index) => value === formattedDates[index])

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
    async checkArticleCategories(category){
        const elements = this.articleCategories;
        const texts = await Promise.all(elements.map(async element => await element.getText()));
        const result = texts.every(text => text === category);
        await expect(result).toBe.true;
    }

   //methods to interact with filters 
    async selectCheckbox(value){
        const checkbox = await $(`input[value="${value}"`);
        await expect(checkbox).toBeClickable();
        await checkbox.click();
    }

    open() {
        return super.open('search');
    }
    openSpecific(string) {
        return super.open(`search?query=${string}`)
    }
    getCurrentUrl() {
        return browser.getUrl();
    }
}

export default new SearchResultPage();

