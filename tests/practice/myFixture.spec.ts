import {test as base} from '@playwright/test';

type MyFixtures = {
    stringFixtureSetUp : string,
    stringFixtureTearDown : string,
}

export const test = base.extend<MyFixtures>({
    stringFixtureSetUp : async({}, use) => {
    const data : string = "SETTING UP THE DATA...";
    await use(data); 
    console.log("SETUP DONE...")
    },

    stringFixtureTearDown : async({}, use) => {
    const data : string = "TEARING DOWN THE DATA..";
    await use(data); 
    console.log("TEARDOWN DONE...")
    }
})

test("testing fixture that return string value", async({stringFixtureSetUp,stringFixtureTearDown }) => {
    console.log("test execution started...");
    console.log(stringFixtureSetUp.toLowerCase());
    console.log(stringFixtureTearDown.toLowerCase());
    console.log("test execution ended...");
})