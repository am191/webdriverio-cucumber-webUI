import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    get header() {
        return $('h1');
    }

    get searchField() {
        return $('#searchResultsQuery'); 
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

    //select methods based on passed value
    // "getter" method to select filter accordeon based on the name
    async getFilterSection(title){
        return $(`//div[@class='searchFilters__headerName' and contains(text(),'${title}')]`);
    }
    //sort by category
    async pickOrderType(sort){
        return $(`input.filterBlockSortByRadio[value='${sort}']+ label`);
    }



    async searchFromPage(query) {
        let input = this.searchField;
        await input.waitForClickable();
        await input.setValue(query); 
    }

    async getQueryText(){
        let searchText = (await this.searchField).getText();
        return searchText;
    }

    // compare expected result amount to actual
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

    // check if result contains the exact article amount as expected
    async exactResults(int) {
        let result = await this.resultCount.getText()
        result = parseInt(result,10);
        
        if (result === int){
            return true;
        } else {
            throw new Error(`Query does not contain ${int} results`);
        }
    }

    //check if sorting works correctly on page
    async compareArticleDates(order) {
        const dates = await this.articleDates

        const formattedDates = []
        for (const date of dates) {
            let time = await date.getText()
            const [day,month,year,hour,minute] = time.split('.').map(time => time.trim())
            //change into suitable formate for Date constructor
            const dateStr = `${year}-${month}-${day}T${hour}:${minute}:00`;
            formattedDates.push(new Date(dateStr))
        }
  
        const sortedDates = [...formattedDates]

        if (order === "asc"){
            sortedDates.sort((a,b) => a-b)
        } else if (order === "desc") {
            sortedDates.sort((a,b) => b-a)
        }
        
        //does the sorted array match the actual value order taken from the site
        return sortedDates.every((value,index) => value === formattedDates[index])
    }

    //methods for urls
    open() {
        return Page.open('search');
    }
    openSpecific(string) {
        return Page.open(`search?query=${string}`)
    }
    getCurrentUrl() {
        return browser.getUrl();
    }
}

export default new SearchResultPage();

