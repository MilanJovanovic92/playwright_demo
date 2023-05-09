import { Locator, Page } from 'playwright';
import * as selectors from '../../selectors.json';

export default class HomePage {
    constructor(page: Page) {
        this.page = page;
    }

    private page: Page;

    public getGoogleOfferedText(): Locator {
        return this.page.locator(selectors.googleOfferedInText);
    }
}