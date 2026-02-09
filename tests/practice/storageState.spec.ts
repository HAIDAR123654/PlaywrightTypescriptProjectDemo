import {test} from "@playwright/test";

test("testing the storage state", async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForTimeout(5000);
    page.context().storageState({path : "testData/authentication.json"})


})