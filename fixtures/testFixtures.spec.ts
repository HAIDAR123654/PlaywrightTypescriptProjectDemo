import {test as base} from "@playwright/test";

type MyMainFixtures = {
    centralFixture : string
}

export const test1 = base.extend<MyMainFixtures>({
    centralFixture : async({}, use) => {
        const data : string = "MY NAME IS HAIDAR";
        await use(data)
    }
})

export const test2 = base.extend<{centralFixture1 : void}>({
    centralFixture1 : [async({}, use) => {
        const data : string = "THIS WILL NOT RETURN ANY VALUE TO TEST";
        console.log(data.toLowerCase());
        await use()},
        {auto : true}]
})