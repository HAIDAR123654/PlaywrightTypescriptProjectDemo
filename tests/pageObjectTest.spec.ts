import {test, expect} from "@playwright/test";
import haidar from "./pages/LoginPage";

test("this is page object model test", async({page}) => {

    const lp = new haidar(page);
    await page.goto("https://www.saucedemo.com/");
    await lp.login("standard_user", "secret_sauce");
    
})