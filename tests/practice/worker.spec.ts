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

test.describe("this is the describe block to skip test suites", () => {
    test("this is the testing of worker1 scope fixture", async({token}) => {
        console.log("test1 started...");
        console.log(token.toLowerCase());
        console.log("test1 ended...")
    })
})

