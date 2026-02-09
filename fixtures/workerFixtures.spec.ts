import {test as base} from "@playwright/test";

type MyWorkerFixtures = {
    token : string
}

export const test = base.extend<{}, MyWorkerFixtures>({
    token : [async({}, use : any) => {
        console.log("token generating...");
        const data : string = "THIS IS TOKEN";
        await use(data)
        console.log("token deleted...")},
        {scope : 'worker'}]
})