import {expect, test} from "@playwright/test";

test("this is patch api test 1", async ({request}) => {

    const respPut = await request.patch("/booking/1", {
        headers : {
            Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },

        data : {
                
                firstname: 'Jim updated',
                lastname: 'Brown',
                additionalneeds: 'Breakfast up patch'
        }
    })
    
    expect(respPut.status()).toBe(200);
    expect(respPut.statusText()).toBeTruthy();
    console.log(await respPut.json());
    const getResp = await request.get("/booking/1");
    console.log(await getResp.json());

})