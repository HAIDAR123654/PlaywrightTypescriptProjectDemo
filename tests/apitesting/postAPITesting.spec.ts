import {expect, test} from "@playwright/test";
import postData from "../../testData/postPutPatchBooking.json";


test("this is post api testing 1", async ({request}) => {
    const resp1 = await request.post("/booking", {
        data : {
                "firstname" : "Jim",
                "lastname" : "Brown",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                     },
                "additionalneeds" : "Breakfast"
            }
    })

    const josnResponse = await resp1.json();
    console.log(josnResponse)
    expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK")

    expect(josnResponse).toHaveProperty('bookingid');
    expect(josnResponse.bookingid).not.toBeNull();
    
    expect(josnResponse).toMatchObject({
          bookingid: expect.anything()
    });
})

test("this is post api testing 2 from json file", async ({request}) => {
    const resp1 = await request.post("/booking", {
        data : postData.postData
    })

    const josnResponse = await resp1.json();
    console.log(josnResponse)
    expect(resp1.status()).toBe(200);
    expect(resp1.statusText()).toBe("OK")

    expect(josnResponse).toHaveProperty('bookingid');
    expect(josnResponse.bookingid).not.toBeNull();
    
    expect(josnResponse).toMatchObject({
          bookingid: expect.anything()
    });
})