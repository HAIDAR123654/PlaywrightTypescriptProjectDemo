import {test} from "../../fixtures/workerFixtures.spec.ts";

test.skip("this is the testing of worker1 scope fixture", async({token}) => {
    console.log("test1 started...");
    console.log(token.toLowerCase());
    console.log("test1 ended...")
})

test.skip("this is the testing of worker2 scope fixture", async({token}) => {
    console.log("test2 started...");
    console.log(token.toLowerCase());
    console.log("test2 ended...")
})

test.only("skip test on conditionally", async({page, browserName}) => {
    console.log(browserName)
    test.skip(browserName !== "chromium", "This test runs on only Chromium");
    console.log("skip test on conditionally started...");
    await page.goto("https://www.google.com/");
    console.log("skip test on conditionally ended...")
})

test.describe.serial("Login Flow", () => {
    test("test 1 inside descibe block", async({token}) => {
        console.log("Login flow 1 started...");
        console.log(token.toLowerCase());
        console.log("Login flow 1 ended...")
    })

    test("test 2 inside descibe block", async({token}) => {
        console.log("Login flow 2 started...");
        console.log(token.toLowerCase());
        console.log("Login flow 2 ended...")
    })
})

test("checkout88888888888 skip test on testinfo", async({page}, testInfo) => {
    console.log(testInfo.title);
    testInfo.setTimeout(5000);
    testInfo.annotations.push({type : "slow", description : "slow test because of some reason"},
    {type : "issue", description : "checkout"});
    console.log("skip test on testinfo started...");
    await page.goto("https://www.google.com/");
    console.log("skip test on testinfo ended...")
})

