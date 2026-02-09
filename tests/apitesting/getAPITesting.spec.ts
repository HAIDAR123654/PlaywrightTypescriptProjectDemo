import {test, request, expect, APIRequest, APIRequestContext, APIResponse} from "@playwright/test";

let reqContext2: APIRequestContext

test.beforeAll("Before all the test", async () => {
    reqContext2 = await request.newContext({
        baseURL : "https://restful-booker.herokuapp.com",
        extraHTTPHeaders : {
            Accept : "application/json"
        }
    })
})

test("get api test 1", async ({request}) => {
    const resp1: APIResponse = await request.get("https://restful-booker.herokuapp.com/booking", {
        headers : {
            Accept : "application/json"
        }
    });
    console.log(await resp1.json());
})

test("get api test 2", async () => {
    const reqContext: APIRequestContext = await request.newContext({
        baseURL : "https://restful-booker.herokuapp.com",
        extraHTTPHeaders : {
            Accept : "application/json"
        }
    })
    const resp1 = await reqContext.get("/booking");
    console.log(await resp1.json());
})

test("get api test 3", async () => {
    const resp1: APIResponse = await reqContext2.get("/booking")
    console.log(await resp1.json());
})

test("get api test 4", async ({request}) => {
    const resp1: APIResponse = await request.get("/booking");
    console.log(await resp1.json());
})

test("get api test 5 path parameter", async ({request}) => {
    const resp1: APIResponse = await request.get("/booking/150");
    console.log(await resp1.json());
})

test("get api test 6 query parameter", async ({request}) => {
    const resp1: APIResponse = await request.get("/booking?firstname=John&lastname=Smith");
    console.log(await resp1.json());
})

test("get api test 7 query parameter", async ({request}) => {
    const resp1: APIResponse = await request.get("/booking", {
        params : {
            firstname : "John",
            lastname : "Smith"
        }
    });
    console.log(await resp1.json());
})

test("get api test 8 status code", async ({request}) => {

    const resp1: APIResponse = await request.get("/booking/150");
    console.log(await resp1.json());
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();

    expect(await resp1.json()).toMatchObject({
            firstname: 'John',
            lastname: 'Smith',
    })

    expect(await resp1.json()).toEqual({
            firstname: 'John',
            lastname: 'Smith',
            totalprice: 111,
            depositpaid: true,
            bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
            additionalneeds: 'Breakfast'
    })

    const responseBody = await resp1.json();
    expect(responseBody.firstname).toEqual("John");
    expect(responseBody).toHaveProperty('totalprice');
 
})