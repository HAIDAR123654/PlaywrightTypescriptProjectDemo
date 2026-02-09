import {APIResponse, test} from "@playwright/test";

test("this is respnse header test", async ({request}) => {
    const resp1:APIResponse = await request.get("/booking/1");
    const headers = resp1.headers();
    console.log(headers.date)

    const headersArrray = resp1.headersArray();
    console.log(headersArrray);
})

