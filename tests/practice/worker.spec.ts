import {test} from "../../fixtures/workerFixtures.spec.ts";

test("this is the testing of worker1 scope fixture", async({token}) => {
    console.log("test1 started...");
    console.log(token.toLowerCase());
    console.log("test1 ended...")
})

test("this is the testing of worker2 scope fixture", async({token}) => {
    console.log("test2 started...");
    console.log(token.toLowerCase());
    console.log("test2 ended...")
})