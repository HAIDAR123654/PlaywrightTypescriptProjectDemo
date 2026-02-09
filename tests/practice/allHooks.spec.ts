import {test} from "@playwright/test";

test.beforeAll(async() => {
    console.log("this is before all hook")
})

test.afterAll(async() => {
    console.log("this is after all hook")
})

test.beforeEach(async() => {
    console.log("this is before each hook")
})

test.afterEach(async() => {
    console.log("this is after each hook")
})

test("first test", async({page}) => {
    console.log("this is test")
})