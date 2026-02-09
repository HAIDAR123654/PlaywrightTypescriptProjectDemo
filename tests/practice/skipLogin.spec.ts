import {test} from "@playwright/test";

test.use({storageState : "testData/authentication.json"})
test("skip login test", async({page}) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
    await page.waitForTimeout(3000);
})