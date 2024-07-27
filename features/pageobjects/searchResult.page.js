import { $ } from '@wdio/globals';
import Page from './page.js';

class SearchResultPage extends Page {
    open () {
        return super.open('search');
    }
}

export default new SearchResultPage();