import { Locator, Page } from "@playwright/test";
import dashboard from "./DashboardPage";

export default class LoginPage{

    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginButton : Locator;

    constructor(page : Page){
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator("#login-button");
    }

    async login(usrname :string, pass : string) : Promise<dashboard>{
        await this.username.fill(usrname)
        await this.password.fill(pass)
        await this.loginButton.click()
        return new dashboard(this.page);
    }
}