import {expect, test} from "@playwright/test";

test("this is delete api test 1", async ({request}) => {

    const respDelete = await request.delete("/booking/9")
    expect(respDelete.status()).toBe(201);
    expect(await respDelete.text()).toEqual("Created");
    console.log(await respDelete.text());
    const getResp = await request.get("/booking/9");
    console.log(await getResp.text());
    expect(getResp.status()).toBe(404);
    expect(await getResp.text()).toEqual("Not Found");
    
})