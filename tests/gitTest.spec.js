import {Page} from '@playwright/test';

export class GitTest{
    async waitForPageLoad(){
        await this.page.waitForLoadState('networkidle');
    };   
}