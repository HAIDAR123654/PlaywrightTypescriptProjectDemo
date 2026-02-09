import { Page } from "@playwright/test";

export default class DashboardPage{
    readonly page : Page;

    constructor(page : Page){
        this.page = page;
    }
    
    async getTitle() : Promise<string>{
        return this.page.title();
    }
    
}